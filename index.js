const {pool, client} = require('./db')
const { generateQuery }= require('./functions/helperFuncs')
const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path')
require('dotenv').config()

app.use(express.static("public"));
app.use(cors());
app.use(express.json());

//  @desc Data is queried on form submission (method = "POST")
//  @route POST /api

// const client = new Client(
//   {
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//       rejectUnauthorized: false

// )

client.connect()

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });


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


  
//! KESHAV'S CODE HERE ONWARDS........
// const {pool, client} = require('./db')
// const {extractTime, extractDate }= require('./functions/helperFuncs')
// const express = require('express');
// const app = express();
// const cors = require('cors')
// require('dotenv').config()

// app.use(express.static("public"));
// app.use(cors());
// app.use(express.json());

// //  @desc Data is queried on form submission (method = "POST")
// //  @route POST /api

// async function myQuery(query, parameters, send) {
//   await pool.connect((error, client, release) => {
//     if (error) (e) => response.json(e)
//     // console.log(query2)
//     client.query(query, parameters, (err, res) => {
//       if (err)
//       {
//         console.log('data not found');
//       }
//     // console.log(res.rows)
//     client.end()
//     send.push(res.rows) 
//   })
//   pool.end()
//   })
// }

// async function execute()
// {
// try {
//   await app.post('/api', async (req, response) => {
//       //console.log(req.body)
//       const { dateRqst, idRqst, timeRqst, plotRqst, targetId} = req.body;
//       const [startDateRqst, endDateRqst] = dateRqst;
//       const [startTimeRqst, endTimeRqst] = timeRqst;
//       const [startIdRqst, endIdRqst] = idRqst;
//       const [xPlot, yPlot] = plotRqst
//       let parameters = [startDateRqst, endDateRqst, startTimeRqst, endTimeRqst, startIdRqst, endIdRqst, targetId]
//       let xAxis = "time"
//       let id = ''
//       let query1 = ''
//       let query2 = ''
//       let query3 = ''
//       let query4 = ''
//       let query5 = ''
//       if (extractTime(startTimeRqst,'min') == '00' && extractTime(endTimeRqst,'min')=='59')
//       {
//         xAxis = "EXTRACT(hour FROM time)"
//         if (startTimeRqst == '00:00:00' && endTimeRqst == '23:59:59')
//         {
//           xAxis = "date"
//           if (extractDate(startDateRqst,'day') == '01' && extractDate(endDateRqst,'day')=='28')
//           {
//             xAxis = "EXTRACT(month FROM date)"
//             if (extractDate(startDateRqst,'month') == "01" && extractDate(endDateRqst,'month')=='12')
//             {
//               xAxis = "EXTRACT(year FROM date)"
//             }
//           }
//         }
//       }
//       if (xPlot == yPlot){
//       if (startIdRqst != endIdRqst) {id = ", id"}
//       query1 = "(SELECT AVG(" + yPlot + ") AS mean, " + xAxis + " AS xAxis FROM dashdata WHERE date BETWEEN $1 AND $2 AND time BETWEEN $3 AND $4 AND id BETWEEN $5 AND $6 GROUP BY " + xAxis + id + " ORDER BY " + xAxis + ")"
//       if (startIdRqst != endIdRqst)
//       {
//         query1 = "SELECT MIN(mean), AVG(mean) as mean, MAX(mean), xAxis FROM " + query1 + " nested GROUP BY xAxis"
//       }
//     }
//     else {
//       query1 = "(SELECT AVG(" + yPlot + ") AS yPlot, AVG(" + xPlot + ") AS xPlot FROM dashdata WHERE date BETWEEN $1 AND $2 AND time BETWEEN $3 AND $4 AND id BETWEEN $5 AND $6 GROUP BY " + xAxis + " ORDER BY " + xPlot + ")"
//       query2 = "(SELECT AVG(" + yPlot + ") AS yPlot, AVG(" + xPlot + ") AS xPlot FROM dashdata WHERE date BETWEEN $1 AND $2 AND time BETWEEN $3 AND $4 AND id = $7 GROUP BY " + xAxis + " ORDER BY " + xPlot + ")"
//       query3 = "SELECT CORR(" + yPlot + ", " +xPlot + ") WHERE id = $7"
//       if (yPlot == 'SOC') {
//         query4 = "SELECT alpha*POWER(0.00822, 0.75) AS first FROM (SELECT (7.543*voltage - 23.75)*EXP(-6976/(temperature + 273))*POWER(10, 6) AS alpha FROM ev20201 WHERE id = $7) shit1"
//         query5 = "SELECT POWER(0.1*2, 0.5)*beta AS second FROM (SELECT 7.348*POWER(10, -3)*POWER(MIN(soc)/100 + 0.1 - 3.667, 2) + 7.6*POWER(10, -4) + 4.081*2*POWER(10, -4) AS beta FROM ev20201 WHERE id = $7) shit2"
//       }
//     }
//     let send = []
//     let SOH = []
//     await pool.connect((error, client, release) => {
//       if (error) (e) => response.json(e)
//       // console.log(query2)
//       client.query(query, parameters, (err, res) => {
//         if (err)
//         {
//           console.log('data not found');
//         }
//       // console.log(res.rows)
//       client.end()
//       send.push(res.rows) 
//       if (xPlot == yPlot){response.json(send)}
//     })
//     pool.end()
//     })

//     if (xPlot != yPlot){
//       myQuery(query2, parameters, send)
//       myQuery(query3, parameters, send)
//       myQuery(query4, parameters, send)
//       await pool.connect((err, client, release) => {
//         client.query(query5, parameters , (err, res) => {
//           send.push(res.rows)
//           client.end()
//           send[3].forEach(element => {
//             SOH.push(1 - element.first - send[4][0].second)        
//           })
//           send.pop()
//           send.pop()
//           send.push(SOH)
//           response.json(send)
//         })
//         pool.end()
//       })
//     }
//   }
//   )
// }
//   catch {
//     response.json("invalid input") 
//   }}
//   /*const req = {
//     body: {
//       idRqst: ['EV20201', 'EV20202'],
//       dateRqst: ['01/01/2021', '28/02/2021'],
//       timeRqst: ['00:00:00', '22:59:59'],
//       plotRqst: ['energy', 'energy']
//       targetId: ['EV20201']
//     }
//   }*/
// execute()

    
// // FOR DEVELOPMENT
// // const port = 5000;
// // app.listen(port, ()=>{
// //   console.log(`Listening on port ${port}....`);
// // })

// // FOR PRODUCION
// let server = app.listen(process.env.PORT || 5000, function () {
//   let port = server.address().port;
//   console.log("Express is working on port " + port);
// });