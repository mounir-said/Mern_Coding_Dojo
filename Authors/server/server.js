const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.config');
const AuthorRoutes = require('./routes/author.routes');
require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', AuthorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
