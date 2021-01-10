const {pool, client} = require('./db')
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
  await client.connect();
  try {
    // console.log('beginning to process data request');
    // console.log(req.body);    
    const {vehicleId, date, time, graph_type} = req.body
    let xAxis = "time"

    const [startTime, endTime] = time;
    const [startDate, endDate] = date;
    const startHour = extractTime(startTime, 'hour')
    const endYear = extractDate(endDate, 'year')

    //! RETURNING SIMPLE VALUES
    // const resultObj = {
    //   vehicleId,
    //   startHour,
    //   endYear,
    //   graph_type
    // }
    // res.json(JSON.stringify(resultObj))

    //! RETURNING VALUES FROM DB
    console.log('Querying db........');

    //? Using client
    let parameters=[];
    client.query("SELECT*FROM dashdata LIMIT 3", parameters , (err, resultObj) => {
      if (err) {err => console.log(err)}
      console.log(resultObj.rows);
      res.json(resultObj.rows)
      console.log('Query returned from db !');
    })
    client.end

    //? Using Pool 
    // const resultObj = await pool.query("SELECT*FROM dashdata LIMIT 3")
    // res.json(resultObj.rows)
  }catch (error) {
   console.log(error.message);}
})
    
// FOR DEVELOPMENT
// const port = 5000;
// app.listen(port, ()=>{
//   console.log(`Listening on port ${port}....`);
// })

// FOR PRODUCION
const port = process.env.PORT || 5000;
app.listen(port,()=>{console.log(`Listening on port ${port}`);})
