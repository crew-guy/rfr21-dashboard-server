// const {pool, client} = require('./db')
const { generateQuery }= require('./functions/helperFuncs')
const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path')
require('dotenv').config()

app.use(express.static('public'));
app.use(cors());
app.use(express.json());

//  @desc Data is queried on form submission (method = "POST")
//  @route POST /api

const { Client } = require('pg');

// const client = new Client({
//     user:process.env.DB_USERNAME,
//     password:process.env.PASSWORD,
//     host:process.env.HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DATABASE,
// });

const client = new Client(
  {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  }
)

client.connect()

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


app.get('/test', async (req, res) =>
{
  const value = `test api is working`
  res.write(value)
})

app.post('/api', async (req, response) => {  
  console.log(req.body)
  const {query, parameters} = generateQuery(req.body)
  client.query(query, parameters, (err, res) => {
    if (err){console.log('data not found');}
  // console.log(res.rows)
    response.json(res.rows) 
  })
})

let server = app.listen(process.env.PORT || 5000, function () {
  let port = server.address().port;
  console.log("Express is working on port " + port);
});


  /*const req = {
    body: {
      idRqst: ['EV20201', 'EV20202'],
      dateRqst: ['01/01/2021', '28/02/2021'],
      timeRqst: ['00:00:00', '22:59:59'],
      plotRqst: 'energy'
    }
  }*/