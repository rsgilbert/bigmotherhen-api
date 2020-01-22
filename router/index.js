const express = require('express')
const router = express.Router()
const announce = require('./announce')
const lessons = require('./lessons')
const signup = require('./signup')
const signin = require('./signin')

router.get('/test', (_, res) => {
    return res.json("Test Successful")
})



router.use(announce)
router.use(lessons)
router.use(signup)
router.use(signin)


module.exports = router

