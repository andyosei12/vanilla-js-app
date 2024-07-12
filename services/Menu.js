import API from './API.js';

export const loadMenu = async () => {
  const menu = await API.fetchMenu();
  app.store.menu = menu;
};
