const express = require('express')
const router = express.Router()
const Chapter = require('../models/chapter')

router.get('/chapters', async (req, res) => {
    const chapters = await Chapter.find({})
    // console.log(chapters)
    return res.json(chapters)
})

module.exports = router