const { Book } = require('../models');

exports.list = async function listBooks(req, res) {
    const books = await Book.find({});
    res.json(books)
}
exports.add = async function addBook(req, res) {
    const books = await Book.create(req.body);
    res.json(books);
};

exports.delete = async function deleteBook(req, res) {
    const { _id } = req.params;
    Book.remove({ _id })
    res.json({ _id })
}

