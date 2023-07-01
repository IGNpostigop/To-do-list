import { btnAdd, btnBorrarTodo, input, notificationsColorType, tareas } from './constants';
import { showNotification } from './helpers/common';
import { insertTask } from './helpers/tasks';

/* -------------------- EVENT FUNCTIONS -------------------- */

function addTask () {
  const tarea = input.value.trim(); // Para que no me añada espacios en blanco
  input.value = ''; // Refresco la barra a vacio

  const taskIsEmtpy = tarea === '';
  const taskAlreadyExists = tareas.find(t => t.nombre === tarea);

  if (taskIsEmtpy) {
    // Muestro un mensaje de error en rojo gradiente
    showNotification('La tarea no puede estar vacía', notificationsColorType.ERROR);
  } else if (taskAlreadyExists) {
    showNotification('La tarea ya existe', notificationsColorType.WARNING);
  } else {
    // Añado la tarea a la lista
    insertTask(tarea);
  }
};

function handleEnterPress (e) {
  if (e.key === 'Enter') {
    addTask();
  }
};

function clearAllTasks () {
  localStorage.clear();
  location.reload();
};

/* -------------------- SET UP EVENTS  -------------------- */

export function setUpEvents () {
  btnAdd.addEventListener('click', addTask);
  input.addEventListener('keypress', handleEnterPress);
  btnBorrarTodo.addEventListener('click', clearAllTasks);
};
