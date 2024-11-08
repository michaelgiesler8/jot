import { notesService } from "../services/NotesService.js";
import { appState } from "../AppState.js";


function _drawNotesList() {
  const notes = appState.notes;
  let template = notes.map(note => note.ListTemplate).join("");
  document.getElementById("notesList").innerHTML = template;
  document.getElementById("noteCount").innerHTML = notes.length;
}

function _drawActiveNote() {
  const activeNote = appState.activeNote;
  if (activeNote) {
    document.getElementById("activeNote").innerHTML = activeNote.ActiveTemplate;
  } else {
    document.getElementById("activeNote").innerHTML = "<p class='text-muted'>Select a note to view it here.</p>";
  }
}

export class NotesController {
  constructor() {
    _drawNotesList();
    _drawActiveNote();

    appState.on("notes", _drawNotesList);
    appState.on("activeNote", _drawActiveNote);
  }

  createNote() {
    const form = document.getElementById("noteForm");
    const formData = new FormData(form);
    const noteData = Object.fromEntries(formData.entries());
    notesService.createNote(noteData);
    form.reset();
  }

  setActiveNote(id) {
    notesService.setActiveNote(id);
  }

  saveNote() {
    const body = document.getElementById("noteBody").value;
    notesService.saveActiveNote(body);
  }


}