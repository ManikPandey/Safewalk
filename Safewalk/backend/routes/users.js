const express = require('express');
const router = express.Router();

// Temporary user storage
let users = [];

// Register user
router.post('/register', (req, res) => {
    users.push(req.body);
    res.status(201).send('User registered');
});

// Get all users
router.get('/', (req, res) => {
    res.status(200).json(users);
});

module.exports = router;
