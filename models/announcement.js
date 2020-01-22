var mongoose = require('mongoose')

var announcementSchema = mongoose.Schema({
    message: String,
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
    userId: String,
})


module.exports = mongoose.model("Announcement", announcementSchema)


