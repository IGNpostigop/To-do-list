/* -------------------- HTML ELEMENTS -------------------- */

import { $, inicializateTasks } from './helpers';

// Creo una variable donde guardo el texto que se introduce en el input
export const input = $('#tarea-introducida');

// Creo una variable donde guardo el elemento que representa a la lista
export const listaTareas = $('#lista-tareas');

export const btnAdd = $('#agregar-tarea');
export const btnBorrarTodo = $('#borrar-todo');

// Creo una variable donde guardo el array de tareas
export const tareas = inicializateTasks();
