const Pool = require('pg').Pool
require('dotenv').config()
const pool = new Pool({
    user:process.env.USERNAME,
    password:process.env.PASSWORD,
    host:process.env.HOST,
    port: process.env.PORT,
    database:process.env.DATABASE
})
// console.log(process.env.USERNAME);
// console.log(process.env.HOST);
// console.log(process.env.PORT);
// console.log(process.env.PASSWORD);
module.exports = pool