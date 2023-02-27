const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', e => {
    if (e.target.classList.contains('titulo')) {
        console.log('Distes Click en titulo');
    }
    if (e.target.classList.contains('precio')) {
        console.log('Distes Click en precio');
    }
    if (e.target.classList.contains('card')) {
        console.log('Distes Click en card');
    }    
});