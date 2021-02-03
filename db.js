require('dotenv').config()
const { Pool, Client } = require('pg')
// console.log(process.env.DB_USERNAME);
// console.log(process.env.HOST);
// console.log(process.env.PORT);
// console.log(process.env.PASSWORD);
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
})

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

module.exports.client = client
module.exports.pool = pool
