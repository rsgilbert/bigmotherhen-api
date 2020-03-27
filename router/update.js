const express = require('express')
const path = require('path')
const fs =  require('fs')
const router = express.Router()
const Chapter = require('../models/chapter')


router.get('/update/:number', (req, res) => {
    let number = parseInt(req.params.number)
    let content = getFileString(number)
    Chapter.findOneAndUpdate({ number }, { content },
        { new: true }, (err, doc) => {
        if(err) throw err
        return res.json(doc)
    })
})

const getFileString = number => {
    const f = fs.readFileSync(path.join(__dirname, '../files', `${number}.txt`))
    return f.toString()
}

module.exports = router