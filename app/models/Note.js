import { generateId } from "../utils/GenerateId.js";

export class Note {
  constructor({ id = generateId(), title, color = "#ffffff", body = "", createdAt = new Date(), updatedAt = new Date() }) {
    this.id = id;
    this.title = title;
    this.color = color;
    this.body = body;
    this.createdAt = new Date(createdAt);
    this.updatedAt = new Date(updatedAt);
  }

  get ListTemplate() {
    return `
      <li class="list-group-item d-flex justify-content-between align-items-center" onclick="app.notesController.setActiveNote('${this.id}')">
        <span class="text-truncate">${this.title}</span>
        <span class="badge" style="background-color: ${this.color};">&nbsp;</span>
        <br><small class="text-muted">Created: ${this.formatDate(this.createdAt)}</small>
      </li>`;
  }

  get ActiveTemplate() {
    return `
      <div class="p-3 border rounded" style="background-color: ${this.color}">
        <h2>${this.title}</h2>
        <p><small>Created: ${this.formatDate(this.createdAt)}</small></p>
        <p><small>Last Updated: ${this.formatDate(this.updatedAt)}</small></p>
        <textarea id="noteBody" class="form-control mb-3">${this.body}</textarea>
        <button class="btn btn-primary me-2" onclick="app.notesController.saveNote()">Save</button>
        <button class="btn btn-danger" onclick="app.notesController.deleteNote()">Delete</button>
      </div>`;
  }

  formatDate(date) {
    return date.toLocaleString();
  }
}