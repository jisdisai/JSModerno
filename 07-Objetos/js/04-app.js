// Un objeto puede contener cualquier tipo de dato dentro de el, incluso puede tener otros objetos:, esto se le conoce como Objetos anidados.


const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
   
}


//const nombre = producto.nombre;
//console.log(nombre);

//Destructuring
const{nombre, precio, disponible} = producto;
console.log(nombre, precio, disponible);