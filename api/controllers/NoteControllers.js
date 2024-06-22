const Note = require("../models/Note")

// Get Notes
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find()
    res.status(200).json({
      message: 'Fetched notes successfully',
      date: notes
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({
      message: 'Internal server error',
      error: err.message
    })
  } 
}

// Create Note
const createNote = async (req, res) => {
  try {
    const note = new Note({
      title: req.body.title,
      content: req.body.content
    })
    const newNote = note.save()
    res.status(201).json({
      message: 'Note created successfully',
      data: newNote
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({
      message: 'Internal server error',
      error: err.message
    })
  }
}

module.exports = {
  getNotes,
  createNote
}