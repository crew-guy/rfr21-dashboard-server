// const pool = require('./db')
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

app.post('/api', async (req, res)=>{
  try {
    // console.log('beginning to process data request');
    // console.log(req.body);    
    const {vehicleId, date, time, graph_type} = req.body
    let xAxis = "time"

    const [startTime, endTime] = time;
    const [startDate, endDate] = date;
    const startHour = extractTime(startTime, 'hour')
    const endYear = extractDate(endDate, 'year')

    const resultObj = {
      vehicleId,
      startHour,
      endYear,
      graph_type
    }
    // console.log(resultObj);
    // console.log(JSON.stringify(resultObj));
    res.json(JSON.stringify(resultObj))
    }catch (error) {
    console.log(error.message);
  }
})
    

const port = 5000;
app.listen(port, ()=>{
  console.log(`Listening on port ${port}....`);
})

// const port = process.env.PORT || 5000;
// app.listen(port,()=>{console.log(`Listening on port ${port}`);})