import './style.css'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

//Creo una variable donde guardo el boton que lo busco con el querySelector pasandole # para id y . para class
const btnAdd = document.querySelector('#agregar-tarea')

//Creo una variable donde guardo el texto que se introduce en el input
const input =  document.querySelector('#tarea-introducida')

//Creo una variable donde guardo el elemento que representa a la lista
const listaTareas = document.querySelector('#lista-tareas')

//Creo una variable donde guardo el array de tareas
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

//Comprobamos si existe el array de tareas en la bd local
if(localStorage.getItem('tareas')) {
  //Extraemos el array de tareas de la bd local
  const tareas = JSON.parse(localStorage.getItem('tareas'));
  
  if(tareas!==null){
    
    tareas.forEach(tarea => {
        recoveryTasks(tarea);
    });
  }

}

function addTask() {

  const tarea = input.value.trim(); //Para que no me añada espacios en blanco
  input.value = ""; //Refresco la barra a vacio

  if (tarea === "") {
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
  else if(tareas.includes(tarea)) {
    Toastify({
      text: "La tarea ya existe",
      duration: 3000,
      style:
      {
        background: "linear-gradient(to right, #f9d423, #ff4e50)",
      }
    }).showToast();
  }
  else { 
    //Añado la tarea a la lista
    insertTask(tarea);
  }

}


function insertTask(tarea) {
    //Añado la tarea a la lista
    tareas.push(tarea);
    //Añado la tarea a la bd local
    localStorage.setItem('tareas', JSON.stringify(tareas + tarea));

    //Muestro la tarea en la consola
    console.log("Tarea añadida: " + tareas);

    //Creo una variable donde guardo el elemento li, label y br (cada elemento concreto)
    const checkBox = document.createElement('input')
    const label = document.createElement('label')
    const br = document.createElement('br')

    checkBox.type = 'checkbox';
    checkBox.id = 'checkbox_' + tarea; // Asigna un ID único al checkbox
    label.textContent = tarea; //añado el texto al checkbox mediante un label
    label.setAttribute('for', 'checkbox_' + tarea); 
 
    //Añado la tarea a la lista (era un input)
    listaTareas.appendChild(checkBox)
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

    //Guardar tarea en la bd local
    localStorage.setItem('tareas', JSON.stringify(tareas));

}



  function recoveryTasks(tarea) {
    const checkBox = document.createElement('input');
    const label = document.createElement('label');
    const br = document.createElement('br');
        
    checkBox.type = 'checkbox';
    checkBox.id = 'checkbox_' + tarea; // Asigna un ID único al checkbox
    label.textContent = tarea;
    label.setAttribute('for', 'checkbox_' + tarea); // Establece la asociación usando el atributo "for"
  
    listaTareas.appendChild(checkBox);
    listaTareas.appendChild(label);
    listaTareas.appendChild(br);
  }



