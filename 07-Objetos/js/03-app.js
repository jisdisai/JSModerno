// Veamos como asignar variables hacia un objeto


const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true, 
    //imagen: "imagen.jpg"
}

//agregar nuevas propiedades de un objeto
producto.imagen = "imagen.jpg";

console.log(producto);
// const nombre = producto.nombre;

//Eliminar propieddes del objeto
delete producto.disponible;