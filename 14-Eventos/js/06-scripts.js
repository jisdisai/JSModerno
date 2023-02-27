// Event Bubbling 

const carDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

carDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en la card');
});

infoDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en la info');
});

titulo.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en la titulo');
});