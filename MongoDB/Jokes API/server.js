const express = require('express');
const mongooseConfig = require('./config/mongoose.config');
const jokeRoutes = require('./routes/jokes.routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/jokes', jokeRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
