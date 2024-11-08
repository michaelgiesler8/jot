import { notesService } from "../services/NotesService.js";
import { appState } from "../AppState.js";


function _drawNotesList() {
  const notes = appState.notes;
  let template = notes.map(note => note.ListTemplate).join("");
  document.getElementById("notesList").innerHTML = template;
  document.getElementById("noteCount").innerHTML = notes.length;
}

