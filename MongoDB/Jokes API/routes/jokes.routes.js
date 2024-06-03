const express = require('express');
const router = express.Router();
const jokesController = require('../controllers/jokes.controller');

router.get('/', jokesController.getAllJokes);

module.exports = router;
