const automovil = {
    model: 'Camaro',
    year: 1969,
    motor: '6.0'

}

// for( let propiedad in automovil ) { 
//     console.log(propiedad);
// }

for(let [llave, valor] of Object.entries(automovil)) {
    console.log(valor);
    console.log(llave);
}