import { EventEmitter } from "./utils/EventEmitter.js";
import { Note } from "./models/Note.js";
import { loadState, saveState } from "./utils/Store.js";

class AppState extends EventEmitter {
  /** @type {Note[]} */
  notes = loadState("notes", Note) || []; // Load notes from local storage or initialize with an empty array
  activeNote = null;

  setActive(note) {
    this.activeNote = note;
    this.emit("activeNote", note);
  }

  saveNotes() {
    saveState("notes", this.notes); // Save notes array to local storage
  }

  addNote(newNote) {
    this.notes.push(newNote);
    this.saveNotes(); // Save to local storage each time a new note is added
    this.emit("notes", this.notes); // Emit event to update UI
  }

  deleteNoteById(id) {
    this.notes = this.notes.filter(note => note.id !== id);
    this.saveNotes(); // Update local storage after deletion
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