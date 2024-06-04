const express = require('express');
const router = express.Router();
const { createAuthor, getAuthor, getAuthorById, updateAuthor, deleteAuthor } = require('../controllers/author.controller');

router.post('/Authors', createAuthor);
router.get('/Authors', getAuthor);
router.get('/Authors/:id', getAuthorById);
router.put('/Authors/:id', updateAuthor);
router.delete('/Authors/:id', deleteAuthor);

module.exports = router;
