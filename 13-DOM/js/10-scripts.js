const enlace = document.createElement('A');

//Agregando texto 
enlace.textContent ='Nuevo Enlace';

// añadiendo href
enlace.href = '/nuevo-enlace';

console.log(enlace);

enlace.target = '_blank';

enlace.setAttribute('data-enlace', 'nuevo-enlace');
enlace.classList.add('Alguna-clase');
// enlace.onclick = miFuncion;

//Seleccionar la Navegacion 
const navegacion = document.querySelector('.navegacion');
// console.log(navegacion.chidren);
navegacion.insertBefore(enlace, navegacion.children[1]);

// function miFuncion() {
//     alert('Diste Click');
//
//}


//Crear un CARD


const parrafo1 = document.createElement('P');
parrafo1.textContent= 'Concierto ';
parrafo1.classList.add('categoria', 'Concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent= 'Concierto de rock ';
parrafo2.classList.add('precio');

const parrafo3 = document.createElement('P');
parrafo3.textContent= '$800 por persona ';
parrafo3.classList.add('precio');

// Crear div con la clase de infop
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);


//crear imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';


const card = document.createElement('div');
card.classList.add('card');

//asignar la imagen
card.appendChild(imagen);

//asignar info
card.appendChild(info);

// inset en HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);



// console.log(parrafo1);


