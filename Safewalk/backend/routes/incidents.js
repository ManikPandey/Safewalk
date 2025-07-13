const express = require('express');
const router = express.Router();

// Temporary incident storage
let incidents = [];

// Log new incident
router.post('/log', (req, res) => {
    incidents.push(req.body);
    res.status(201).send('Incident logged');
});

// Get all incidents
router.get('/', (req, res) => {
    res.status(200).json(incidents);
});

module.exports = router;
