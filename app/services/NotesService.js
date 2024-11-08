import { appState } from "../AppState.js";
import { Note } from "../models/Note.js";

class NotesService {
  createNote(formData) {
    const newNote = new Note({
      title: formData.title,
      color: formData.color,
      body: formData.body
    });
    appState.notes.push(newNote);
    appState.saveNotes();
    appState.setActive(newNote);
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
      appState.saveNotes();
    }
  }
}