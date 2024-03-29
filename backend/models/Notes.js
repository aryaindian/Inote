const mongoose = require('mongoose')

const NotesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: Number,
        required: true,
        unique: true
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: String,
        default: Date.now
    }
})

module.exports = mongoose.model("notes", NotesSchema)