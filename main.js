import './style.css'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"


const btnAdd = document.querySelector('#agregar-tarea')
const btnBorrar = document.querySelector('#borrar-tarea')
const btnBorrarTodo = document.querySelector('#borrar-todo')

//Creo una variable donde guardo el texto que se introduce en el input
const input =  document.querySelector('#tarea-introducida')

//Creo una variable donde guardo el elemento que representa a la lista
const listaTareas = document.querySelector('#lista-tareas')

//Creo una variable donde guardo el array de tareas
let tareas = JSON.parse(localStorage.getItem('tareas'));
if(tareas===null){
  tareas = [];
}

//-----------------EVENTOS-----------------//

btnAdd.addEventListener('click', addTask);
//----------------------------------------//
input.addEventListener('keypress', (e) => {
  console.log(e.key);
  if (e.key === 'Enter') {
    addTask();
  }
});

btnBorrarTodo.addEventListener('click', () => {
  localStorage.clear();
  location.reload();
});



//Comprobamos si existe el array de tareas en la bd local
if(tareas!==null){
  
  tareas.forEach(tarea => {
    
      recoveryTasks(tarea);
  });
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
  else if(tareas.find(t => t.nombre === tarea)) {
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
    const nuevaTarea = { nombre: tarea, realizada: false };
    tareas.push(nuevaTarea);
    //Añado la tarea a la bd local
    localStorage.setItem('tareas', JSON.stringify(tareas));

    //Muestro la tarea en la consola
    console.log("Tarea añadida: " + tareas);

    //Creo una variable donde guardo el elemento li, label y br (cada elemento concreto)
    const divCaja = document.createElement('div')
    const checkBox = document.createElement('input')
    const label = document.createElement('label')
    const br = document.createElement('br')

    checkBox.type = 'checkbox';
    checkBox.id = 'checkbox_' + tarea; // Asigna un ID único al checkbox
    label.textContent = tarea; //añado el texto al checkbox mediante un label
    label.setAttribute('for', 'checkbox_' + tarea); 
 
    //Añado la tarea a la lista (era un input)
    divCaja.appendChild(checkBox)
    //Añado el label a la lista
    divCaja.appendChild(label)
    //Añado un salto de linea a la lista
    divCaja.appendChild(br);
    //Añado la caja a la lista
    listaTareas.appendChild(divCaja);
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

    //Control del checked
    checkBox.addEventListener('change', () => {
      const tareaIndex = tareas.findIndex(t => t.nombre === tarea);
      tareas[tareaIndex].realizada = checkBox.checked;
      localStorage.setItem('tareas', JSON.stringify(tareas));
    });
}



  function recoveryTasks(tarea) {

    const divCaja = document.createElement('div');
    const checkBox = document.createElement('input');
    const label = document.createElement('label');
    const br = document.createElement('br');
        
    checkBox.type = 'checkbox';
    checkBox.id = 'checkbox_' + tarea.nombre; // Asigna un ID único al checkbox
    checkBox.checked = tarea.realizada;
    label.textContent = tarea.nombre;
    label.setAttribute('for', 'checkbox_' + tarea); // Establece la asociación usando el atributo "for"
  
    divCaja.appendChild(checkBox);
    divCaja.appendChild(label);
    divCaja.appendChild(br);
    listaTareas.appendChild(divCaja);

    //Control del checked
    checkBox.addEventListener('change', () => {
      const tareaIndex = tareas.findIndex(t => t.nombre === tarea.nombre);
      if (tareaIndex !== -1) {
        tareas[tareaIndex].realizada = checkBox.checked;
        localStorage.setItem('tareas', JSON.stringify(tareas));
      }
    });
    
  }



