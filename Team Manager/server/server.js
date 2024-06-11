const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config/mongoose.config');
const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());



const playerRoutes = require('./routes/players');
app.use('/players', playerRoutes);


app.listen(port, () => console.log(`Server running on port ${port}`));