import { EventEmitter } from "./utils/EventEmitter.js";
import { Note } from "./models/Note.js";
import { loadState, saveState } from "./utils/Store.js";

class AppState extends EventEmitter {
  notes = loadState("notes", Note) || [];
  activeNote = null;

  setActive(note) {
    this.activeNote = note;
    this.emit("activeNote", note);
  }

  saveNotes() {
    saveState("notes", this.notes);
  }

  addNote(newNote) {
    this.notes.push(newNote);
    this.saveNotes();
    this.emit("notes", this.notes);
  }

  deleteNoteById(id) {
    this.notes = this.notes.filter(note => note.id !== id);
    this.saveNotes();
    this.emit("notes", this.notes);
  }
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    return target[prop];
  },
  set(target, prop, value) {
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});