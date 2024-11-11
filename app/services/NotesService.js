import { appState } from "../AppState.js";
import { Note } from "../models/Note.js";

class NotesService {
  createNote(formData) {
    const newNote = new Note({
      title: formData.title,
      color: formData.color,
      body: formData.body
    });
    appState.addNote(newNote); // Use the new method to add and save the note
    appState.setActive(newNote); // Set the new note as the active note
  }

  setActiveNote(id) {
    const note = appState.notes.find(note => note.id === id);
    if (note) {
      appState.setActive(note);
    }
  }

  saveActiveNote(body) {
    const note = appState.activeNote;
    if (note) {
      note.body = body;
      note.updatedAt = new Date();
      appState.saveNotes(); // Save changes to local storage
    }
  }

  deleteNoteById(id) {
    if (confirm("Are you sure you want to delete this note?")) {
      appState.deleteNoteById(id); // Use the new method to delete and save the updated notes
      appState.setActive(null); // Clear the active note if it was deleted
    }
  }
}

export const notesService = new NotesService();