const express = require('express')
const router = express.Router()
const report = require('./report')
const signup = require('./signup')
const login = require('./login')

router.get('/test', (_, res) => {
    return res.json("Test Successful")
})



router.use(report)
router.use(signup)
router.use(login)


module.exports = router

