// for(let i = 0 ; i<20 ; i++){
//     if(i % 2 === 0){
//         console.log(`El numero s{i} es PAR`);
//     } else {
//         console.log(`El numero s{i} es IMPAR`);
//     }
// }



const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

console.log(carrito.length);

for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}