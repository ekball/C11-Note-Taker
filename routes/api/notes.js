const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const notesJSON = require('../../db/db.json');

// unique id package = uuid
const {v4: uuidv4} = require('uuid');

// get all notes
router.get('/notes', (req, res) => {
    res.json(notesJSON);
});

// create a new note based on id
router.post('/notes/:id', (req, res) => {

    // set unique id to body parameter
    req.body.id = uuidv4();

    // check values of req.body.id & req.body
    console.log('req.body.id = ', req.body.id);
    console.log('req.body', req.body);

    // add whatever is in the body to the array
    notesJSON.push(req.body);

    // update the file to create new note
    fs.writeFileSync( path.join(__dirname, '../../db/db.json'),
        // stringify new notesJSON array
        JSON.stringify(notesJSON)
    )

    // check if response was successful; if so, let user know
    if (res) {
        console.log('New note was created');
        res.JSON(res);
    }
});

module.exports = router;
