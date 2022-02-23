const mongoose = require('mongoose')
const Fee = require('./fees')
const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    fees: Fee.schema,
    // admission,
    // contact,
    // hostel,
    // transport
})

module.exports = new mongoose.model("College", collegeSchema)