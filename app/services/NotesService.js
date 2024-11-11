import { appState } from "../AppState.js";
import { Note } from "../models/Note.js";

class NotesService {
  createTemporaryNote(formData) {
    const newNote = new Note({
      title: formData.title,
      color: formData.color,
      body: formData.body,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    appState.setActive(newNote);
  }

  setActiveNote(id) {
    const note = appState.notes.find(note => note.id === id);
    if (note instanceof Note) {
      appState.setActive(note);
    }
  }

  saveActiveNoteToAllNotes(body) {
    const note = appState.activeNote;
    if (note instanceof Note) {
      note.body = body;
      note.updatedAt = new Date();
      appState.addNote(note);
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