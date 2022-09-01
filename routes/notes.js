// get dependencies
const notes = require('express').Router();
const {readFromFile, readAndAppend, deleteFromFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// get request will read the db file and return all the json
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// post request will put the provided body, consisting of title and text, with a unique id and add it to the db file
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

// delete request will use the note id to remove the specified note from the db file
notes.delete('/:id', (req, res) => {
    if(req.params.id) {
        deleteFromFile(req.params.id, './db/db.json');
        res.json("Note deleted successfully");
    } else {
        res.json("Error in deleting note.");
    }
});

module.exports = notes;
