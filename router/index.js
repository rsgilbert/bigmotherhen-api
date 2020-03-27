const express = require('express')
const router = express.Router()
const chapterRouter = require('./chapter')
const updateRouter = require('./update')

router.use(chapterRouter)
router.use(updateRouter)

router.get('/test', (_, res) => {
    return res.json("Test Successful")
})






module.exports = router

