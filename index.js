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

async function execute()
{
try {
  await app.post('/api', async (req, response) => {
      //console.log(req.body)
    await pool.connect((error, client, release) => {
      if (error) (e) => response.json(e)
      const { dateRqst, idRqst, timeRqst, plotRqst } = req.body;
      const [startDateRqst, endDateRqst] = dateRqst;
      const [startTimeRqst, endTimeRqst] = timeRqst;
      const [startIdRqst, endIdRqst] = idRqst;
      let parameters = [startDateRqst, endDateRqst, startTimeRqst, endTimeRqst, startIdRqst, endIdRqst]
      let xAxis = "time"
      let id = ''
      if (extractTime(startTimeRqst,'min') == '00' && extractTime(endTimeRqst,'min')=='59')
      {
        xAxis = "EXTRACT(hour FROM time)"
        if (startTimeRqst == '00:00:00' && endTimeRqst == '23:59:59')
        {
          xAxis = "date"
          if (extractDate(startDateRqst,'day') == '01' && extractDate(endDateRqst,'day')=='28')
          {
            xAxis = "EXTRACT(month FROM date)"
            if (extractDate(startDateRqst,'month') == "01" && extractDate(endDateRqst,'month')=='12')
            {
              xAxis = "EXTRACT(year FROM date)"
            }
          }
        }
      }
      if (startIdRqst != endIdRqst) {id = ", id"}
      let query = "(SELECT AVG(" + plotRqst + ") AS mean, " + xAxis + " AS xAxis FROM dashdata WHERE date BETWEEN $1 AND $2 AND time BETWEEN $3 AND $4 AND id BETWEEN $5 AND $6 GROUP BY " + xAxis + id + " ORDER BY " + xAxis + ")"
      if (startIdRqst != endIdRqst)
      {
        query = "SELECT MIN(mean), AVG(mean) as mean, MAX(mean), xAxis FROM " + query + " nested GROUP BY xAxis"
      }
      // console.log(query)
      client.query(query, parameters, (err, res) => {
        if (err)
        {
          console.log('data not found');
        }
      // console.log(res.rows)
      client.end()
      response.json(res.rows) 
    })
    })
  }
  )
}
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
const port = 5000;
app.listen(port, ()=>{
  console.log(`Listening on port ${port}....`);
})

// FOR PRODUCION
// let server = app.listen(process.env.PORT || 5000, function () {
//   let port = server.address().port;
//   console.log("Express is working on port " + port);
// });

