const Joke = require('../models/jokes.model');

module.exports = {
    getAllJokes: async (req, res) => {
        try {
            const jokes = await Joke.find();
            res.json(jokes);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    getJokeById: async (req, res) => {
        try {
            const joke = await Joke.findById(req.params.id);
            if (!joke) return res.status(404).json({ message: 'Joke not found' });
            res.json(joke);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    createJoke: async (req, res) => {
        const joke = new Joke({
            jokeText: req.body.jokeText
        });
        try {
            const newJoke = await joke.save();
            res.status(201).json(newJoke);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    updateJoke: async (req, res) => {
        try {
            const joke = await Joke.findById(req.params.id);
            if (!joke) return res.status(404).json({ message: 'Joke not found' });
            
            joke.jokeText = req.body.jokeText || joke.jokeText;
            const updatedJoke = await joke.save();
            res.json(updatedJoke);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    deleteJoke: async (req, res) => {
        try {
            const joke = await Joke.findById(req.params.id);
            if (!joke) return res.status(404).json({ message: 'Joke not found' });
            
            await joke.remove();
            res.json({ message: 'Joke deleted' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};
