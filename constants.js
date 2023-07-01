/* -------------------- HTML ELEMENTS -------------------- */

import { $ } from './helpers/common';
import { inicializateTasks } from './helpers/tasks';

// Creo una variable donde guardo el texto que se introduce en el input
export const input = $('#tarea-introducida');

// Creo una variable donde guardo el elemento que representa a la lista
export const listaTareas = $('#lista-tareas');

export const btnAdd = $('#agregar-tarea');
export const btnBorrarTodo = $('#borrar-todo');

// Creo una variable donde guardo el array de tareas
export const tareas = inicializateTasks();

export const notificationsColorType = {
  SUCCESS: 'linear-gradient(to right, #00b09b, #96c93d)',
  WARNING: 'linear-gradient(to right, #f9d423, #ff4e50)',
  ERROR: 'linear-gradient(to right, #ff416c, #ff4b2b)',
  DEFAULT: ''
};
