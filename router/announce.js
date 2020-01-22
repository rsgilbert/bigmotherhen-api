const express = require('express')
const router = express.Router()


const Announcement = require('../models/announcement')

router.get('/announcement', async (req, res) => {
    const announcements = await Announcement.find({})
    res.json(announcements)
})

router.post('/announcement', async (req, res) => {
    const newAnnouncement = req.body
    const announcement = await Announcement.create(newAnnouncement)
    res.send(announcement)
})

module.exports = router