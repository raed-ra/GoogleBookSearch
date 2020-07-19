const { Book } = require('../models');

exports.list = async function listBooks(req, res) {
    const books = await Book.find({});
    res.json(books)
}
exports.add = async function addBook(req, res) {
    console.log(req.body)
    const books = await Book.create(req.body);
    console.log({books})
    res.json(books);
};

exports.delete = async function deleteBook(req, res) {
    const { _id } = req.params;
    console.log(req.body._id)
    await Book.deleteOne({ _id:req.body._id})
    res.json({ _id })
}

