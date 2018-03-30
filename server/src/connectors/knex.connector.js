// const knex = require('knex');

// const db = knex({
//     client: 'pg',
//     connection: {
//       host : '127.0.0.1',
//       user : 'admin',
//       password : 'bacon',
//       database : 'kojo'
//     }
// });

// const db = knex({
//     client: 'sqlite3',
//     connection: {
//       filename: './database/bacon.db'
//     },
//     useNullAsDefault: true
// })

// const db = require('knex')({
//     client: 'sqlite3', 
//     connection: ':memory:', 
//     pool: { 
//       min: 1, 
//       max: 1, 
//       disposeTiemout: 360000*1000, 
//       idleTimeoutMillis: 360000*1000 
// }});

function hash(password) {
    return new Promise((resolve, reject) => {
      // create salt for hash
      bcrypt.genSalt(10, (error, salt) => {
        if (error) {
          reject(error);
          return;
        }
  
        // create hash
        bcrypt.hash(password, salt, (error, hash) => {
          if (error) {
            reject(error);
            return;
          }
  
          // return hash
          resolve(hash);
        });
      });
    });
  }


module.exports.createConnector = db => {     
    // build model associations or start up
    // const User = createUserModel(db, hash);

    return (request, response, next) =>{
        request.orm = { User };
        next();
    };
}

export default createConnector(db);