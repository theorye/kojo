const bcrypt = require('bcryptjs')
const { User: UserModel } = require('./User')
const { Login: LoginModel } = require('./Login')

function hash (password) {
  return new Promise((resolve, reject) => {
    // create salt for hash
    bcrypt.genSalt(10, (error, salt) => {
      if (error) {
        reject(error)
        return
      }

      // create hash
      bcrypt.hash(password, salt, (error, hash) => {
        if (error) {
          reject(error)
          return
        }

        // return hash
        resolve(hash)
      })
    })
  })
}

module.exports.createConnector = knex => {
  // build model associations or start up
  const User = new UserModel(knex, hash)
  const Login = new LoginModel(knex, hash)

  return (request, response, next) => {
    request.orm = { User, Login }
    next()
  }
}
