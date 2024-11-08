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


}