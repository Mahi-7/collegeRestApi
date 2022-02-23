const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const CollegeRoute = require('./routes/colleges')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))



mongoose.connect(process.env.MONGO_URL, {useNewUrlParser:true}).then(() => {
    console.log("Connected to mongodb Atlas")
}).catch(error => {
    console.log("Error: ",error)
})
app.use('/api/colleges', CollegeRoute)

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})