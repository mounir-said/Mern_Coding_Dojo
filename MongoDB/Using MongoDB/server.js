const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/my_first_db');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Student Schema
const studentSchema = new mongoose.Schema({
    name: String,
    home_state: String,
    lucky_number: Number,
    birthday: {
        month: Number,
        day: Number,
        year: Number
    },
    interests: [String],
    number_of_belts: Number,
    updated_on: { type: Date, default: Date.now }
});

const Student = mongoose.model('Student', studentSchema);

// Routes

// GET all students
app.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).send(err);
    }
});

// POST create a new student
app.post('/students', async (req, res) => {
    const student = new Student(req.body);
    try {
        await student.save();
        res.status(201).json(student);
    } catch (err) {
        res.status(400).send(err);
    }
});

// PUT update a student by ID
app.put('/students/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!student) {
            return res.status(404).send();
        }
        res.json(student);
    } catch (err) {
        res.status(400).send(err);
    }
});

// DELETE a student by ID
app.delete('/students/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).send();
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
