import './style.css'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

//Creo una variable donde guardo el boton que lo busco con el querySelector pasandole # para id y . para class
const btnAdd = document.querySelector('#agregar-tarea')
const tareas = []

//Al boton le añado un evento de click y una función anonima
btnAdd.addEventListener('click', () => {

  //Creo una variable donde guardo el texto que se introduce en el input
  const textoAdd = document.querySelector('#tarea-introducida').value.trim()
  if (textoAdd === "") {
    //Muestro un mensaje de error en rojo gradiente

    Toastify({
      text: "Tarea introducida vacía",
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



})



function addTareasFunction(textoAdd) {
  //Añado la tarea a la lista
  tareas.push(textoAdd);
  //Muestro la tarea en la consola
  console.log("Tarea añadida: " + tareas);

  //Creo una variable donde guardo el elemento que representa a la lista
  const listaTareas = document.querySelector('#lista-tareas')

  //Creo una variable donde guardo el elemento li (cada elemento concreto)
  const tarea = document.createElement('li')
  tarea.textContent = textoAdd

  //Añado la tarea como li al div de ul
  listaTareas.appendChild(tarea)
  Toastify({
    text: "Tarea introducida vacía",
    duration: 3000,
    style:
    {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
  }).showToast();



}

