const express = require('express')
const router = express.Router()
const College = require('../models/colleges')

router.post('/', async (req, res) => {

        const college = new College({
            name: req.body.name,
            city: req.body.city,
            state: req.body.state,
            fees: {
                fee_type: req.body.fee_type,
                amount: req.body.amount
            }
        })
        try {
            const c1 = await college.save()
            res.json(c1)
        } catch(err) {
            res.send(err)
        }
        
})

module.exports = router