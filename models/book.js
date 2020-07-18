const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
});

module.exports = Book = mongoose.model('Book', bookSchema);