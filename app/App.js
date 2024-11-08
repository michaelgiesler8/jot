import { NotesController } from "./controllers/NotesController.js";

class App {
  notesController = new NotesController();
}

window.app = new App();