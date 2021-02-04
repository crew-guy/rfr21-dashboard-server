require('dotenv').config()
const { Pool, Client } = require('pg')
const pool = new Pool({
    user:process.env.DB_USERNAME,
    password:process.env.PASSWORD,
    host:process.env.HOST,
    port: process.env.DB_PORT,
    database: process.env.DATABASE,
})

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports.client = client
module.exports.pool = pool
