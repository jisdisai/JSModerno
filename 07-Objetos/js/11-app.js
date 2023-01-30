//object Literal
const producto = {
  nombre: "Monitor 20 pulgadas",
  precio : 300,
  disponible: true,
  mostrarInfo: function(){
    console.log(`El Producto : ${this.nombre} tiene un precio de: ${this.precio}`)
  }
}

function Producto(nombre, precio){
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}

const producto2 = new Producto('Monitor 20 pulgadas', 500);
console.log(producto2);

const producto3 = new Producto('Monitor 20 pulgadas', 100);
console.log(producto3);

// const producto2 = {
//   nombre: "Tablet",
//   precio: "3000",
//   disponible: true,
//   mostrarInfo: function(){
//     console.log(`El Producto : ${this.nombre} tiene un precio de: ${this.precio}`)
//   }
// }

// producto.mostrarInfo();
// producto2.mostrarInfo();