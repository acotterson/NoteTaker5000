const notes = require('exptress').Router();
const {readFromFile, readAndAppend} = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

notes.get('/', req, res => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    cconsole.log(req.body);

    const {title, text} = req.body();

    if(req.body) {
        const newNote = {
            title,
            text,
            note_id: uuid(),
        };
        readAndAppend(newNote, './db/db.json');
        res.json('Note added successfully');
    }e;se {
        res/errpr('Error in adding note.');
    }

});

module.exports = notes;
