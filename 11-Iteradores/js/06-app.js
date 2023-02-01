const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

const nuevoArreglo = carrito.forEach(producto => producto.nombre);
const nuevoArreglo2 = carrito.map(producto => producto.nombre);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);


const pendientes = ['Tareas', 'Comer', 'Proyectos', 'Estudiar JS'];

pendientes.forEach((pendientes, indice) => {
    console.log(`${indice} : ${pendientes}`)
});