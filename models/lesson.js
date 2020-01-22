const mongoose = require('mongoose')

const lessonSchema = mongoose.Schema({
    topic: String,
    trainerId: String,
    language: String,
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
})


module.exports = mongoose.model("Lesson", lessonSchema)


