const {pool, client} = require('./db')
const {extractTime, extractDate }= require('./functions/helperFuncs')
const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config()

console.log(client)
console.log(pool)
console.log(process.env.DB_USERNAME)

app.use(express.static("public"));
app.use(cors());
app.use(express.json());

//  @desc Data is queried on form submission (method = "POST")
//  @route POST /api

async function execute()
{
try {
  await app.post('/api', async (req, response) => {
    //console.log(req.body)
  await pool.connect((error, client, release) => {
    if (error) (e) => response.json(e)
  console.log('connected')
  const dataRqst = req.body;
  console.log(dataRqst);
  let parameters = [dataRqst.dateRqst[0], dataRqst.dateRqst[1], dataRqst.timeRqst[0], dataRqst.timeRqst[1], dataRqst.idRqst[0], dataRqst.idRqst[1]]
  let xAxis = "time"
  let id = ''
  if (dataRqst.timeRqst[0][3] == '0' && dataRqst.timeRqst[0][4] == '0' && dataRqst.timeRqst[1][3] == '5' && dataRqst.timeRqst[1][4] == '9') {xAxis = "extract(hour from time)"
  if (dataRqst.timeRqst[0] == '00:00:00' && dataRqst.timeRqst[1] == '23:59:59') {xAxis = "date"
  if (dataRqst.dateRqst[0][0] == 0 && dataRqst.dateRqst[0][1] == 1 && dataRqst.dateRqst[1][0] == 2 && dataRqst.dateRqst[1][1] == 8) {xAxis = "extract(month from date)"
  if (dataRqst.dateRqst[0][3] == 0 && dataRqst.dateRqst[0][4] == 1 && dataRqst.dateRqst[1][3] == 1 && dataRqst.dateRqst[1][4] == 2) {xAxis = "extract(year from date)"}}}}
  if (dataRqst.idRqst[0] != dataRqst.idRqst[1]) {id = ", id"}
  let query = "(select avg(" + dataRqst.plotRqst + ") as mean, " + xAxis + " as xAxis from dashdata where date between $1 and $2 and time between $3 and $4 and id between $5 and $6 group by " + xAxis + id + " order by " + xAxis + ")"
  if (dataRqst.idRqst[0] != dataRqst.idRqst[1]) {query = "select min(mean), avg(mean) as mean, max(mean), xAxis from " + query + " nested group by xAxis"}
  // console.log(query)
  client.query(query, parameters, (err, res) => {
    if (err)
    {
      console.log('data not found');
    }
    // console.log(res.rows)
    client.end()
    response.json(res.rows) 
  })})})}
  catch {
    response.json("invalid input") 
  }}
  /*const req = {
    body: {
      idRqst: ['EV20201', 'EV20202'],
      dateRqst: ['01/01/2021', '28/02/2021'],
      timeRqst: ['00:00:00', '22:59:59'],
      plotRqst: 'energy'
    }
  }*/
execute()

    
// FOR DEVELOPMENT
// const port = 5000;
// app.listen(port, ()=>{
//   console.log(`Listening on port ${port}....`);
// })

// FOR PRODUCION
let server = app.listen(process.env.PORT || 5000, function () {
  let port = server.address().port;
  console.log("Express is working on port " + port);
});

