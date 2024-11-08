import { generateId } from "../utils/GenerateId.js";

export class Note {
  constructor({ id = generateId(), title, color = "#ffffff", body = "", createdAt = new Date(), updatedAt = new Date() }) {
    this.id = id;
    this.title = title;
    this.color = color;
    this.body = body;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}