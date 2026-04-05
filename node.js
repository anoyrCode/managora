const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {Pool} = require('pg');

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('public'))

const pool = new Pool({
    user : 'postgres',
    host : 'localhost',
    database : 'managora_landing_page',
    password : 'muslim',
    port : 5432
})



app.post('/index',async (req,res) => {
    const {nama, email, telepon, lembaga, pesan} = req.body
    try{
        await pool.query("INSERT INTO pendaftar(nama,email,telepon,lembaga,pesan) VALUES($1, $2, $3, $4, $5)",[nama, email, telepon, lembaga, pesan])
    }
    catch(err){
        console.log(err)
    }
})

app.listen(3000,()=>{
    console.log('server running')
})
