var mongoose = require('mongoose')

var reportSchema = mongoose.Schema({
    problem: String,
    event: String,
    
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
    userId: String,
    sale: Number,
})


module.exports = mongoose.model("Report", reportSchema)


