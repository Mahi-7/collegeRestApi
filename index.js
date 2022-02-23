const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser:true}).then(() => {
    console.log("Connected to mongodb Atlas")
}).catch(error => {
    console.log("Error: ",error)
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})