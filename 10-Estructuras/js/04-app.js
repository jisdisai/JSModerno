// Algunas veces vas a desear revisar si se cumple más de una condición...
const rol = 'ADMIN';

if(rol === 'ADMIN') {
    console.log('El Usuario puede editar, eliminar y ver toda la información');
} else if(rol === 'EDITOR' ) {
    console.log('El usuario solo puede editar sus registros');
} else {
    console.log('El Usuario es visitante, solo puede ver la información');
}

// El problema del else if es que si agregas múltiples llegan a ser complejos de leer...

const rol2 = 'ADMIN';

if(rol2 === 'ADMIN') {
    console.log('El Usuario puede editar, eliminar y ver toda la información');
} else if(rol === 'EDITOR' ) {
    console.log('El usuario puede editar todos los registros');
} else if(rol === 'AUTOR') { 
    console.log('El usuario solo puede registrar usuarios');
} else {
    console.log('El Usuario es visitante, solo puede ver la información');
}

// Para ello llegan a ser más útiles los Switch, veamos que son y después volvemos hacia más ejemplos de if else


const dinero = 100;
const totalAPagar = 500;
const tarjeta = false;
const cheque = false;

if(dinero >= totalAPagar) {
    console.log('si podemos pagar');
} else if(cheque) {
    console.log('si tengo un cheque');
} else if (tarjeta){
    console.log('si tengo un tarjeta');
} else{
    console.log('Fondos Insuficientes');
}