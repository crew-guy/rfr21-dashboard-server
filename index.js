const pool = require('./db')
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

// Middleware
app.use(express.static("public"))
app.use(cors())
app.use(express.json())

// Routes

// @desc Data is queried on form submission (method = "POST")
// @route POST /api

app.post('/api', async(req,res)=>{
    const body = req.body
    const {v_id, year, month, week, day} = body
    let query = " ";
    
    // * ERROR HANDLING

    // https://popsql.com/learn-sql/postgresql/how-to-query-date-and-time-in-postgresql => useful link for week logic
    
    try {
        const graph_data = await pool.query(query , params)
        res.json(graph_data);
    } catch (error) {
        console.log(error.message);
    }
})

const port = process.env.PORT || 5000
app.listen(port, ()=> {console.log(`Listening on port ${5000}`);})