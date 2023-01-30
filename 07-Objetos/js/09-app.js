// Veamos como unir 2 objetos, esto llega a ser muy común ya que algunas veces en una base de datos obtienes el ID del cliente y también tienes los clientes que pertenecen a ese ID y te gustaría unirlos

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}


const medidas = {
    peso: '1 kg',
    medida: '1 metro'
}

console.log(producto);
console.log(medidas);

// Una forma de hacerlo es con el object method llamado assign

const resultado = Object.assign(producto, medidas);

// Spread Operator o Rest Operator

const resultado2 = {...producto, ...medidas}
// Otra forma de hacerlo que se considera más moderna es con El Spread Operator o Rest Operator, veamoslo en el siguiente video

console.log(resultado);
console.log(resultado2);
// los ... significa copiar y asignar dentro del objeto 