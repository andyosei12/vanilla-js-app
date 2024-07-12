import { loadMenu } from "./services/Menu.js";
import Router from "./services/Router.js";
import Store from "./services/Store.js";

window.app = {};
app.store = Store;
app.router = Router;

// wait for the DOM to be ready before manipulation
window.addEventListener('DOMContentLoaded', () => {
  loadMenu();
  app.router.init();
});

