import Toastify from 'toastify-js';

export function $ (query) {
  return document.querySelector(query);
}
export function $$ (query) {
  return document.querySelectorAll(query);
}

export function showNotification (tarea, type, duration = 3000) {
  const toastifyOptions = {
    text: tarea,
    duration
  };
  if (type !== '') {
    toastifyOptions.style = { background: type };
  }
  Toastify(toastifyOptions).showToast();
};
