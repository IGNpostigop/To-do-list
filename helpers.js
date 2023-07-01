import Toastify from 'toastify-js';

export function $ (query) {
  return document.querySelector(query);
}
export function $$ (query) {
  return document.querySelectorAll(query);
}

export function inicializateTasks () {
  let tareas = JSON.parse(localStorage.getItem('tareas'));
  if (tareas === null) {
    tareas = [];
  }
  return tareas;
};

export function showNotification (tarea, { duration = 3000, background = '' }) {
  const toastifyOptions = {
    text: tarea,
    duration
  };
  if (background !== '') {
    toastifyOptions.style = { background };
  }
  Toastify(toastifyOptions).showToast();
};
