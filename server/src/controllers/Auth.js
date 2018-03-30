const bcrypt = require('bcrypt-nodejs')
const saltRnds = 10

const register = (req, res, db) => {
    const { displayName, email, password } = req.body;
  
    bcrypt.genSalt(saltRnds, (salt) => {
      bcrypt.hash(password, salt, null, (err, hash) => {
        db.transaction(trx => {
          db.insert({
            hash: hash,
            email: email
          })
          .into('login')
          .transacting(trx)
          .then(() => {
            return db.insert({
              displayName: displayName,
              email: email,
              joined: new Date().toLocaleString('en-US', { timeZone: 'UTC' })
            })
            .into('users')
            .transacting(trx)
            .then(status => res.status(200).json('Success'))
          })
          .then(trx.commit)
          .catch(trx.rollback)
        })
        .catch(err => res.status(400).json('Unable to register'))
      })
    })
}

const login = (req, res, db) => {
    const { email, password } = req.body;
  
    db.select('email', 'hash')
    .from('login')
    .where('email', '=', req.body.email)
    .then(data => {
      bcrypt.compare(password, data[0].hash, (err, callback) => {
        if(callback) {
          db.select('*').from('users')
          .where('email', '=', req.body.email)
          .then(user => {
            res.status(200).json('Success')
          })
        } else {
          res.status(400).json('Wrong password')
        }
      })
    })
    .catch(err => res.status(400).json('Unable to get user'))
}

module.exports = {
    login,
    register
};