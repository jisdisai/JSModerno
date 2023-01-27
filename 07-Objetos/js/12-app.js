
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    
}


// object Construtor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor 24 Pulgadas', 500);
console.log(producto2 );