const Book  = require('../models/bookModel');

const getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.find({});
        return res.status(200).json({
            count: allBooks.length,
            data: allBooks
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const getASingleBook = async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: 'There is no such book' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const createABook = async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).json({ message: 'All fields are required, please' });
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };
        const bookRet = await Book.create(newBook);
        return res.status(201).json(bookRet);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const updateABook = async (req, res) => {
    try {
        const id = req.params.id;
        await Book.findByIdAndUpdate(id, req.body);
        return res.status(200).json({ message: 'Book updated successfully' });
    } catch (error) {
        return res.status(404).json({ message: 'There is no such book' });
    }
};

const deleteABook = async (req, res) => {
    try {
        const id = req.params.id;
        await Book.findByIdAndDelete(id);
        return res.status(204).json({ message: 'Book deleted successfully' });
    } catch (error) {
        return res.status(404).json({ message: 'There is no such book' });
    }
};

module.exports = { getAllBooks, getASingleBook, createABook, updateABook, deleteABook };

