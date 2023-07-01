import './style.css';
import 'toastify-js/src/toastify.css';
import { tareas } from './constants';
import { setUpEvents } from './events';
import { recoveryTasks } from './helpers/tasks';

setUpEvents();

// Comprobamos si existe el array de tareas en la bd local
if (tareas !== null) {
  tareas.forEach(tarea => {
    recoveryTasks(tarea);
  });
}
