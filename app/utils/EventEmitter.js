// EventEmitter.js
import { Pop } from "./Pop.js";

export class EventEmitter {
  _listeners = {}

  on(event, fn, thisContext = null) {
    if (typeof fn != "function") { return; }
    if (!(event in this)) {
      console.error(`Unable to register listener for '${event}'`);
      Pop.error(`Unable to register listener for '${event}'`);
      return;
    }
    this._listeners[event] = Array.isArray(this._listeners[event]) ? this._listeners[event] : [];
    fn.ctx = thisContext;
    this._listeners[event].push(fn);
  }

  off(event, fn) {
    this._listeners[event] = Array.isArray(this._listeners[event]) ? this._listeners[event] : [];
    const i = this._listeners[event].indexOf(fn);
    if (i === -1) { return; }
    this._listeners[event].splice(i, 1);
  }

  emit(event, payload) {
    this._listeners[event] = this._listeners[event] || [];
    this._listeners[event].forEach(fn => fn.ctx ? fn.call(fn.ctx, payload) : fn(payload));
  }

  clear(event) {
    delete this._listeners[event];
  }

  clearAll() {
    this._listeners = {};
  }
}