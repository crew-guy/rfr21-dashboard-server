const pool = require('./db')
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

// Middleware
app.use(express.static("public"))
app.use(cors())
app.use(express.json())
console.log('Mai duniya mai....akela hu');
// Routes

// @desc Data is queried on form submission (method = "POST")
// @route POST /api

app.post('/api', async(req,res)=>{
    const body = req.body
    const {accelRqst, speedRqst} = body
    
    const accel_query = "SELECT * FROM mock_datatable WHERE accel_x BETWEEN $1 AND $2 AND accel_y BETWEEN $3 AND $4 ORDER BY accel_x";
    const accel_params = [...accelRqst, ...speedRqst];
    
    // DO IN HTML
    // if (accelRqst[0] == '') {
    //   accel_params[0] = -Infinity; 
    //   accel_params[1] = Infinity
    // }
    // if (speedRqst[0] == ''){
    //   accel_params[2] = -Infinity; 
    //   accel_params[3] = Infinity
    // }

    try {
        const accel_data = await pool.query( accel_query , accel_params)
        res.json(accel_data);
    } catch (error) {
        console.log(error.message);
    }
})

const port = process.env.PORT || 5000
app.listen(port, ()=> {console.log(`Listening on port ${5000}`);})