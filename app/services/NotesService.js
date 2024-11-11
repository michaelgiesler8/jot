import { appState } from "../AppState.js";
import { Note } from "../models/Note.js";

class NotesService {
  createNote(formData) {
    const newNote = new Note({
      title: formData.title,
      color: formData.color,
      body: formData.body,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    appState.notes.push(newNote);
    appState.addNote(newNote);
    appState.setActive(newNote);
  }

  setActiveNote(id) {
    const note = appState.notes.find(note => note.id === id);
    if (note instanceof Note) {
      appState.setActive(note)
    }
  }

  saveActiveNote(body) {
    const note = appState.activeNote;
    if (note instanceof Note) {
      note.body = body;
      note.updatedAt = new Date();
      appState.saveNotes();
    }
  }

  deleteNoteById(id) {
    if (confirm("Are you sure you want to delete this note?")) {
      appState.notes = appState.notes.filter(note => note.id !== id);
      appState.saveNotes();
      appState.setActive(null);
    }
  }
}

export const notesService = new NotesService();