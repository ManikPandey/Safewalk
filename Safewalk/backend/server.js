const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const incidentRoutes = require('./routes/incidents');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/safewalk', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/users', userRoutes);
app.use('/api/incidents', incidentRoutes);

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
