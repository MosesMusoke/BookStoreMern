const mongoose = require('mongoose')

const bookSchema = mongoose.Schema(
    {
        title:{
            type: String,
            requird: true
        },
        author:{
            type: String,
            requird: true
        },
        publishYear:{
            type: Number,
            requird: true
        }
    },
    {
        timestamps: true,
    }
)

const Book = mongoose.model('Book', bookSchema)

module.exports = {Book}

