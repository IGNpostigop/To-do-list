import Toastify from 'toastify-js';
import { btnAdd, btnBorrarTodo, input, tareas } from './constants';
import { insertTask } from './main';

/* -------------------- EVENT FUNCTIONS -------------------- */

const addTask = () => {
  const tarea = input.value.trim(); // Para que no me añada espacios en blanco
  input.value = ''; // Refresco la barra a vacio

  if (tarea === '') {
    // Muestro un mensaje de error en rojo gradiente

    Toastify({
      text: 'La tarea no puede estar vacía',
      duration: 3000,
      style:
      {
        background: 'linear-gradient(to right, #ff416c, #ff4b2b)'
      }
    }).showToast();
  } else if (tareas.find(t => t.nombre === tarea)) {
    Toastify({
      text: 'La tarea ya existe',
      duration: 3000,
      style:
      {
        background: 'linear-gradient(to right, #f9d423, #ff4e50)'
      }
    }).showToast();
  } else {
    // Añado la tarea a la lista
    insertTask(tarea);
  }
};

const handleEnterPress = (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
};

const clearAllTasks = () => {
  localStorage.clear();
  location.reload();
};

/* -------------------- SET UP EVENTS  -------------------- */

export const setUpEvents = () => {
  btnAdd.addEventListener('click', addTask);
  input.addEventListener('keypress', handleEnterPress);
  btnBorrarTodo.addEventListener('click', clearAllTasks);
};
