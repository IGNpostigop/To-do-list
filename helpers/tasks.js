import { listaTareas, notificationsColorType, tareas } from '../constants';
import { showNotification } from './common';

export function inicializateTasks () {
  let tareas = JSON.parse(localStorage.getItem('tareas'));
  if (tareas === null) {
    tareas = [];
  }
  return tareas;
};

export function insertTask (tarea) {
  // Añado la tarea a la lista
  const nuevaTarea = { nombre: tarea, realizada: false };
  tareas.push(nuevaTarea);
  // Añado la tarea a la bd local
  localStorage.setItem('tareas', JSON.stringify(tareas));

  // Muestro la tarea en la consola
  console.log('Tarea añadida: ' + tareas);

  // Creo una variable donde guardo el elemento li, label y br (cada elemento concreto)
  const divCaja = document.createElement('div');
  const checkBox = document.createElement('input');
  const label = document.createElement('label');
  const br = document.createElement('br');
  const borrar = document.createElement('button');

  checkBox.type = 'checkbox';
  checkBox.id = 'checkbox_' + tarea; // Asigna un ID único al checkbox
  label.textContent = tarea; // añado el texto al checkbox mediante un label
  label.setAttribute('for', 'checkbox_' + tarea);
  borrar.textContent = 'x';
  borrar.classList.add('borrarX');

  // Añado la tarea a la lista (era un input)
  divCaja.appendChild(checkBox);
  // Añado el label a la lista
  divCaja.appendChild(label);
  // Añado el boton borrar a la lista
  divCaja.appendChild(borrar);
  // Añado un salto de linea a la lista
  divCaja.appendChild(br);
  // Añado la caja a la lista
  listaTareas.appendChild(divCaja);

  showNotification('Tarea añadida', notificationsColorType.SUCCESS);

  // Guardar tarea en la bd local
  localStorage.setItem('tareas', JSON.stringify(tareas));

  const handleChange = () => {
    const tareaIndex = tareas.findIndex(t => t.nombre === tarea);
    tareas[tareaIndex].realizada = checkBox.checked;
    localStorage.setItem('tareas', JSON.stringify(tareas));
  };

  // Control del checked
  checkBox.addEventListener('change', handleChange);

  // Control del boton borrar
  borrar.addEventListener('click', () => {
    deleteTask(tarea);
  });
}

export function deleteTask (tarea) {

}

export function recoveryTasks (tarea) {
  const divCaja = document.createElement('div');
  const checkBox = document.createElement('input');
  const label = document.createElement('label');
  const br = document.createElement('br');
  const borrar = document.createElement('button');

  checkBox.type = 'checkbox';
  checkBox.id = 'checkbox_' + tarea.nombre; // Asigna un ID único al checkbox
  checkBox.checked = tarea.realizada;
  label.textContent = tarea.nombre;
  label.setAttribute('for', 'checkbox_' + tarea); // Establece la asociación usando el atributo "for"
  borrar.textContent = 'x';
  borrar.classList.add('borrarX');

  divCaja.appendChild(checkBox);
  divCaja.appendChild(label);
  divCaja.appendChild(borrar);
  divCaja.appendChild(br);
  listaTareas.appendChild(divCaja);

  // Control del checked
  checkBox.addEventListener('change', () => {
    const tareaIndex = tareas.findIndex(t => t.nombre === tarea.nombre);
    if (tareaIndex !== -1) {
      tareas[tareaIndex].realizada = checkBox.checked;
      localStorage.setItem('tareas', JSON.stringify(tareas));
    }
  });

  // Control del boton borrar
  borrar.addEventListener('click', () => {
    deleteTask(tarea);
  });
}
