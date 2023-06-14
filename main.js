import './style.css'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

//Creo una variable donde guardo el boton que lo busco con el querySelector pasandole # para id y . para class
const btnAdd = document.querySelector('#agregar-tarea')

//Creo una variable donde guardo el texto que se introduce en el input
const input =  document.querySelector('#tarea-introducida')

const tareas = []

//Al boton le añado un evento de click y una función anonima
btnAdd.addEventListener('click', addTask);
//al enter le añado un evento de click y una función anonima
input.addEventListener('keypress', (e) => {
  console.log(e.key);
  if (e.key === 'Enter') {
    addTask();
  }
});

function addTask() {


  const textoAdd = input.value.trim();
  input.value = "";

  if (textoAdd === "") {
    //Muestro un mensaje de error en rojo gradiente

    Toastify({
      text: "La tarea no puede estar vacía",
      duration: 3000,
      style:
      {
        background: "linear-gradient(to right, #ff416c, #ff4b2b)",
      }
    }).showToast();

   

  }
  else { 
    //Añado la tarea a la lista
    addTareasFunction(textoAdd);
  }



}



function addTareasFunction(textoAdd) {
  //Añado la tarea a la lista
  tareas.push(textoAdd);
  saveTask(tareas);
  //Muestro la tarea en la consola
  console.log("Tarea añadida: " + tareas);

  //Creo una variable donde guardo el elemento que representa a la lista
  const listaTareas = document.querySelector('#lista-tareas')

  //Creo una variable donde guardo el elemento li, label y br (cada elemento concreto)
  const tarea = document.createElement('input')
  const label = document.createElement('label')
  const br = document.createElement('br')

  //creo un checkbox
  tarea.type = "checkbox"
  
  //añado eel texto al checkbox mediante un label
  label.textContent = textoAdd

  //Añado la tarea a la lista (era un input)
  listaTareas.appendChild(tarea)
  //Añado el label a la lista
  listaTareas.appendChild(label)
  //Añado un salto de linea a la lista
  listaTareas.appendChild(br);
  Toastify({
    text: "Tarea añadida",
    duration: 3000,
    style:
    {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
  }).showToast();

}


function saveTask(tareas) {
  localStorage.setItem('tareas', JSON.stringify(tareas));
}
