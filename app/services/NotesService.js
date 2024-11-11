import { appState } from "../AppState.js";
import { Note } from "../models/Note.js";

class NotesService {
  createNote(formData) {
    const newNote = new Note({
      title: formData.title,
      color: formData.color,
      body: formData.body
    });
    appState.addNote(newNote);
    appState.setActive(newNote);
  }

  setActiveNote(id) {
    const note = appState.notes.find(note => note.id === id);
    if (note) {

      appState.setActive(note)
      appState.emit("activeNote")
    }
  }

  saveActiveNote(body) {
    const note = appState.activeNote;
    if (note) {
      note.body = body;
      note.updatedAt = new Date():
      appState.saveNotes();
    }
  }

  deleteNoteById(id) {
    if (confirm("Are you sure you want to delete this note?")) {
      appState.deleteNoteById(id);
      appState.setActive(null);
    }
  }
}

export const notesService = new NotesService();