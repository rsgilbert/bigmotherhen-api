const express = require('express')
const router = express.Router()
const announce = require('./announce')

router.get('/test', (_, res) => {
    return res.json("Test Successful")
})
 

router.use(announce)

module.exports = router

