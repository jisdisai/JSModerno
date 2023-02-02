const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar el valor de un arreglo

meses.forEach(mes => { 
    if (mes === 'Enero'){
        console.log('Enero Si Existe');
    }

    });

const resultado = meses.includes('Dicembre');
console.log(resultado);

// en un arreglo de objeto se utiliza .some 
const existe = carrito.some( producto => producto.nombre === 'Celular');
console.log(existe);

// En un arreglo Tradicional
const existe2 = meses.some(mes => mes === 'Febrero' );
console.log(existe2);