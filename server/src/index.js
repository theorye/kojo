const express = require('express')
const app = express()
const router = express.Router();
const parser = require('body-parser')
const cors = require('cors')
const knex = require('knex')
const bcrypt = require('bcrypt-nodejs')
const saltRnds = 10;
const port = 8080;

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './database/bacon.db'
  },
  useNullAsDefault: true
})

app.use(cors());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.get('/', (req, res) => {
  res.sendStatus(200);
})

// API router (v1)
app.use('/api/v1', router);

router.get('/', (req, res) => {
  res.sendStatus(200);
})


////////////////////////////
// LOGIN AND REGISTRATION //
////////////////////////////

// Registration
router.post('/register', (req, res) => {
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
})

// Login
router.post('/login', (req, res) => {
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
})


///////////////
// USERS API //
///////////////

const userString = '/users'

// GET all users
router.get(userString, (req, res) => {
  res.sendStatus(200)
})

// GET a specific user
router.get(userString + '/:id', (req, res) => {
  res.sendStatus(200)
})

// UPDATE a specific user
router.put(userString + '/:id', (req, res) => {

})

// DELETE a specific user
router.delete(userString + '/:id', (req, res) => {

})


///////////////
// BOARD API //
///////////////

const boardString = '/board';


app.listen(port)