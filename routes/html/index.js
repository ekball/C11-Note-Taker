const path = require('path');
const router = require('express').Router();

// send users to the notes page
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.js'));
});

// send users to the index page
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;
