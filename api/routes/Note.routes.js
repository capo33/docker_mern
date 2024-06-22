const express = require('express');

const route = express.Router();

const { getNotes, createNote } = require('../controllers/NoteControllers');

route.get('/notes', getNotes);
route.post('/notes', createNote);

module.exports = route;