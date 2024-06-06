require('dotenv').config()
const express=require('express')
const cors=require('cors')
const app=express()
app.use(cors())
const routes=require('./routes')
const mongoose=require('mongoose')

app.use(express.json())
app.use(routes)

mongoose.connect(process.env.MONG_URL).then(()=>{

    app.listen(process.env.PORT, (req, res)=>{

        console.log("working..");
    })


}).catch((error)=>{

console.log(error)
})


