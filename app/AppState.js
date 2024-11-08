import { EventEmitter } from "./utils/EventEmitter.js";
import { Note } from "./models/Note.js";
import { loadState, saveState } from "./utils/Store.js";

class AppState extends EventEmitter {
  notes
}