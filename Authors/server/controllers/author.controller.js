const Author = require('../models/author.model');

const createAuthor = async (req, res) => {
    try {
        const { name } = req.body;
        const newAuthor = new Author({ name });
        await newAuthor.save();
        res.status(201).json(newAuthor);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getAuthor = async (req, res) => {
    try {
        const authors = await Author.find();
        res.status(200).json(authors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getAuthorById = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id);
        if (!author) return res.status(404).json({ error: 'Author not found' });
        res.status(200).json(author);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateAuthor = async (req, res) => {
    try {
        const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        res.json(updatedAuthor);
    } catch (err) {
        res.status(400).json(err);
    }
};

const deleteAuthor = async (req, res) => {
    try {
        const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
        res.json(deletedAuthor);
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports = { createAuthor, getAuthor, getAuthorById, updateAuthor, deleteAuthor };
