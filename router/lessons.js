const express = require('express')
const router = express.Router()

const Lesson = require('../models/lesson')
const User = require('../models/user')



router.get('/lessons', async (req, res) => {
    const lessons = await Lesson.find({})
    res.json(lessons)
})



router.post('/lessons', async (req, res) => {
    const newLesson = req.body
    const lesson = await Lesson.create(newLesson)
    res.json(lesson)
})


module.exports = router
