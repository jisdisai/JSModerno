// Seleccionar sus elementos por sus clases 

const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

// si las clases existen mas de una vez 
const contenedor = document.getElementsByClassName('contenedor');
console.log(contenedor);

// si una clase no existe
const noExiste =document.getElementsByClassName('no-existe');
console.log(noExiste);