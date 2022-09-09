require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', err => console.error(error));
db.once('open', () => console.log('connected to database'));

app.listen(3001, () => console.log('listening on port 3001'));