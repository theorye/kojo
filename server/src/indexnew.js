const {ExpressApp} = require("./express");
const knexModels = require('./models/knex');
const knex = require('knex');

// const db = knex({
//     client: 'pg',
//     connection: {
//       host : '127.0.0.1',
//       user : 'admin',
//       password : 'bacon',
//       database : 'kojo'
//     }
// });

const db = knex({
    client: 'sqlite3',
    connection: {
      filename: './database/bacon.db'
    },
    useNullAsDefault: true
})

const app1 = new ExpressApp(8181);
const app2 = new ExpressApp(8080, knexModels.createConnector(db));

app1.mountRoute('GET', 'v3', (req, res) => res.sendStatus(200) )

app2.mountRoute('GET', 'api/v1/users', async (req, res) => {
  const { orm: {User} } = req;
  const users = await User.getAll();
  res.json({
    users
  });
})

// app2.mountRoute('GET', 'v3/me')

app2.mountRoute('GET', 'api/v1/login', async (req, res) => {
  const { User, Login} = req.orm;
  const { email, password } = req.body;

  const hash = await Login.getHash(email, password)
  console.log(hash);
  res.json({
    hash
  })
})