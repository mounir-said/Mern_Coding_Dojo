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
};
