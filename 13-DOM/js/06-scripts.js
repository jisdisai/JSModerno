const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);

// const nuevoHeading = 'Nuevo Heading';
// document.querySelector('.contenido-hero h1').textContent = nuevoHeading ;



// console.log(encabezado.innerText);// si en el CSS -visibility: hidden; no lo va encontrar 
// console.log(encabezado.textContent); // este  si lo va encontrar 
// console.log(encabezado.innerHTML); //se trae el HTML


const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';