const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const notesJSON = require('../../db/db.json');

// unique id package = uuid
const {v4: uuidv4} = require('uuid');
const req = require('express/lib/request');

// get all notes
router.get('/notes', (req, res) => {
    res.json(notesJSON);
});

// create a new note and assign a unique id
router.post('/notes', (req, res) => {

    // set unique id to body parameter
    req.body.id = uuidv4();

    // check values of req.body
    // console.log('req.body = ', req.body);

    // assign the body to a variable
    const newNote = req.body
    
    // check the value of the note
    // console.log('new Note = ', newNote)
        
    // add whatever is in the body to the array
    notesJSON.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'), 
        JSON.stringify(notesJSON)
    )

    // if response was successful, let user know and complete request 
    if(res) {
        console.log(`new note created`)
        return res.json()
    }
});

// delete the selected note via id
// router.delete('/notes/:id', (req, res) => {

//     const thisIndex = notesJSON.findIndex(thisNote=> thisNote.id === id);
//     if (thisIndex > -1) {
//       notesJSON.splice(thisIndex, 1);
//     }
// });

module.exports = router;
