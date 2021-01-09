const pool = require('./db')
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

// Middleware
app.use(cors())
app.use(express.static("public"))
app.use(express.json())

// Routes

// @desc Data is queried on form submission (method = "POST")
// @route POST /api

app.post('/api', async(req,res)=>{
    //queries added by keshav
    res.send('I am a disco dancer')
    try {
    // await client.connect()
    console.log(req);
    const {dataRqst} = await req.body;
    console.log(dataRqst);
    res = "I am a happy person"
    res.json("Let's go yeah !")
    }catch(err){
      console.log(err.message);
    }})
    // let parameters = [dataRqst.dateRqst[0], dataRqst.dateRqst[1], dataRqst.timeRqst[0], dataRqst.timeRqst[1], dataRqst.idRqst[0], dataRqst.idRqst[1]]
    // let xAxis = "time"
    // let id = ''
    // if (dataRqst.timeRqst[0][3] == '0' && dataRqst.timeRqst[0][4] == '0' && dataRqst.timeRqst[1][3] == '5' && dataRqst.timeRqst[1][4] == '9') {xAxis = "extract(hour from time)"
    // if (dataRqst.timeRqst[0] == '00:00:00' && dataRqst.timeRqst[1] == '23:59:59') {xAxis = "date"
    // if (dataRqst.dateRqst[0][0] == 0 && dataRqst.dateRqst[0][1] == 1 && dataRqst.dateRqst[1][0] == 2 && dataRqst.dateRqst[1][1] == 8) {xAxis = "extract(month from date)"
    // if (dataRqst.dateRqst[0][3] == 0 && dataRqst.dateRqst[0][4] == 1 && dataRqst.dateRqst[1][3] == 1 && dataRqst.dateRqst[1][4] == 2) {xAxis = "extract(year from date)"}}}}
    // if (dataRqst.idRqst[0] != dataRqst.idRqst[1]) {id = ", id"}
    // let query = "(select avg(" + dataRqst.plotRqst + ") as mean, " + xAxis + " as xAxis from data3 where date between $1 and $2 and time between $3 and $4 and id between $5 and $6 group by " + xAxis + id + " order by " + xAxis + ")"
    // if (dataRqst.idRqst[0] != dataRqst.idRqst[1]) {query = "select min(mean), avg(mean) as mean, max(mean), xAxis from " + query + " nested group by xAxis"}
    // client.query(query, parameters, (err, res) => {
    //   if (err) return "data not found"
    //   console.log(res.rows)
    //   client.end()
    //   res.json(res.rows)
    // })
    // }
    //   catch {
    //   return "invalid input"
    // }
    //This is the structure of request:
    /*const req = {
  body: {
    idRqst: ['EV20201', 'EV20202'],
    dateRqst: ['01/01/2021', '09/01/2021'],
    timeRqst: ['00:00:00', '23:58:59'],
    plotRqst: 'energy'
  }
}*/


const port = process.env.PORT || 5000
app.listen(port, ()=> {console.log(`Listening on port ${5000}`);})
