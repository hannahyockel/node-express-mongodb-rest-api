const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/subscribers', { useNewUrlParser: true });

app.listen(3001, () => console.log('listening on port 3001'));