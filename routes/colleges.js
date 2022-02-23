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
router.get('/', async(req, res) => {
    try {
        const collegeD = await College.find()
        res.json(collegeD)
        // console.log(collegeD[0].toObject().name)
        // const outD = collegeD.map(Cname => Cname.name)
        // console.log(outD) 
    } catch(err) {
        console.log('Error ' + err)
    }
})
router.get('/:city', async(req, res) => {
    try {
        const collegeD = await College.find({"city": req.params.city})
        res.json(collegeD)
    } catch(err) {
        console.log('Error ' + err)
    }
})
module.exports = router