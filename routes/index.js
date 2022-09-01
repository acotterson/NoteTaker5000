// directs api calls
const express = require('express');

const notesRouter = require('./notes');

const app = express();

// api calls to api/notes uses the notes.js file
app.use('/notes', notesRouter);

module.exports = app;