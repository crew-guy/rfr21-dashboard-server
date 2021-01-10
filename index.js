const {pool} = require('./db')
const {extractTime, extractDate }= require('./functions/helperFuncs')
const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config()

app.use(express.static("public"));
app.use(cors());
app.use(express.json());

//  @desc Data is queried on form submission (method = "POST")
//  @route POST /api

const TIME_COLUMN = "ctime"
const DATE_COLUMN = "cdate"

app.post('/api', async (req, response)=>{
  try {
  await client.connect()
  console.log('connected')
  const {vehicleId,date, time, graph_type} = req.body

  const [startDate,endDate] = date
  const [startTime,endTime] = time
  const [startVehicleId,endVehicleId] = vehicleId

  let parameters = [startDate, endDate, startTime, endTime, startVehicleId, endVehicleId]
  let xAxis = TIME_COLUMN
  let id = ''
  if (startTime[3] == '0' && startTime[4] == '0' && endTime[3] == '5' && endTime[4] == '9') {
    xAxis = "extract(hour from time)"
    if (startTime == '00:00:00' && endTime == '23:59:59') {
      xAxis = DATE_COLUMN
      if (startDate[0] == 0 && startDate[1] == 1 && endDate[0] == 2 && endDate[1] == 8) {
        xAxis = "extract(month from date)"
        if (startDate[3] == 0 && startDate[4] == 1 && endDate[3] == 1 && endDate[4] == 2) {
          xAxis = "extract(year from date)"}
        }
      }
    }
    if (startVehicleId != endVehicleId) {
      id = ", id"
    }
    let query = "(select avg(" + graph_type + ") as mean, " + xAxis + " as xAxis from data3 where cdate between $1 and $2 and ctime between $3 and $4 and id between $5 and $6 group by " + xAxis + id + " order by " + xAxis + ")"
        
    if (startVehicleId != endVehicleId) {query = "select min(mean), avg(mean) as mean, max(mean), xAxis from " + query + " nested group by xAxis"}
  client.query(query, parameters, (err, res) => {
    if (err) return "data not found"
    console.log(res.rows)
    client.end()
    response.json(res.rows)
  })}
  catch {
    response.json('invalid input')
  }
})

    
// FOR DEVELOPMENT
// const port = 5000;
// app.listen(port, ()=>{
//   console.log(`Listening on port ${port}....`);
// })

// FOR PRODUCION
const port = process.env.PORT || 5000;
app.listen(port,()=>{console.log(`Listening on port ${port}`);})
