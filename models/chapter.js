var mongoose = require('mongoose')

var chapterSchema = mongoose.Schema({
    number: Number,
    title: String,
    content: String,
    picture: Number,
})


module.exports = mongoose.model("Chapter", chapterSchema)


