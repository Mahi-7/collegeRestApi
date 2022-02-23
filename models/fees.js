const mongoose = require('mongoose')

const feesSchema = new mongoose.Schema({
    fee_type: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
})

module.exports = new mongoose.model("Fee", feesSchema)