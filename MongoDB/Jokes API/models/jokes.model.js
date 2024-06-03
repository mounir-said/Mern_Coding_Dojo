const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    jokeText: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Joke', JokeSchema);
