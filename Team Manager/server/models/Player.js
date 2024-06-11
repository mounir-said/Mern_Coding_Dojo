const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  position: { type: String },
  status: {
    game1: { type: String, default: 'Undecided' },
    game2: { type: String, default: 'Undecided' },
    game3: { type: String, default: 'Undecided' }
  }
});

module.exports = mongoose.model('Player', PlayerSchema);