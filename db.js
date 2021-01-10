const Pool = require('pg').Pool
require('dotenv').config()
// console.log(process.env.DB_USERNAME);
// console.log(process.env.HOST);
// console.log(process.env.PORT);
// console.log(process.env.PASSWORD);
const pool = new Pool({
    user:process.env.DB_USERNAME,
    password:process.env.PASSWORD,
    host:process.env.HOST,
    port: process.env.PORT,
    database:process.env.DATABASE
})
module.exports = pool