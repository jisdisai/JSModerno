const nav = document.querySelector('.navegacion');

//registrar un evento

// nav.addEventListener('click', () => {
//     console.log('click en nav');
// });


nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion');
    nav.style.backgroundColor = 'transparent';
});


nav.addEventListener('mouseenter', () => {
    console.log('entrando a la navegavion');
    nav.style.backgroundColor = 'white';
});

