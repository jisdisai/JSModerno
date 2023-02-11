const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
console.log(navegacion.lastElementChild);
// console.log(navegacion.childNodes); // Los espacios en blanco son considerados elementos 
// console.log(navegacion.children);

// console.log(navegacion.children[1].nodeName); // 
// console.log(navegacion.children[1].nodeType); 

const card = document.querySelector('.card');

// card.children[1].children[1].textContent = 'Nuevo heading desde traversing the dom';
// card.children[0].src = 'img/hacer2.jpg';
// console.log(card.children[0]);


//Traversing the hijo al padre
// console.log(card.parentNode); 
// console.log(card.parentElement); 

// console.log(card.nextElementSibling);

const ultimocard = document.querySelector('.card:nth-child(4)');
console.log(ultimocard.previousElementSibling);