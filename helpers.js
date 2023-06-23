export const $ = (query) => document.querySelector(query);
export const $$ = (query) => document.querySelectorAll(query);

export const inicializateTasks = () => {
  let tareas = JSON.parse(localStorage.getItem('tareas'));
  if (tareas === null) {
    tareas = [];
  }
  return tareas;
};
