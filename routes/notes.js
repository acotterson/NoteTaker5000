const notes = require('express').Router();
const { raw } = require('express');
const {readFromFile, readAndAppend, deleteFromFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    console.log(req.body);

    const {title, text} = req.body;

    if(req.body) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };
        readAndAppend(newNote, './db/db.json');
        res.json('Note added successfully');
    }else {
        res.json('Error in adding note.');
    }

});

notes.delete('/:id', (req, res) => {
    if(req.params.id) {
        deleteFromFile(req.params.id, './db/db.json');
        res.json("Note deleted successfully");
    } else {
        res.json("Error in deleting note.");
    }
});

module.exports = notes;
