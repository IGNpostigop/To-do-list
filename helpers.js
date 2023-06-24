import Toastify from 'toastify-js';

export const $ = (query) => document.querySelector(query);
export const $$ = (query) => document.querySelectorAll(query);

export const inicializateTasks = () => {
  let tareas = JSON.parse(localStorage.getItem('tareas'));
  if (tareas === null) {
    tareas = [];
  }
  return tareas;
};

export const showNotification = (tarea, { duration = 3000, background = '' }) => {
  const toastifyOptions = {
    text: tarea,
    duration
  };
  if (background !== '') {
    toastifyOptions.style = { background };
  }
  Toastify(toastifyOptions).showToast();
};
