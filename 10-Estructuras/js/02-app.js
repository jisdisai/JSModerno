// Veamos otras comparaciones

const puntaje = 1001;
// No es igual
if(puntaje != 1000) {
    console.log("Si! es diferente!");
}  else {
    console.log("No, no es diferente");
}
// comparador estricto de tipo y valor
if(puntaje === 1000) {
    console.log("Si es igual!");
} else {
    console.log("No no es igual");
}

// comparador estricto de tipo y valor
if(puntaje !== 1000) {
    console.log("Si es DIFERENTE (ESTRICTO) !");
} else {
    console.log("No no es igual");
}


// != Diferente, No estricto
// == Igual a concido como operador no estricto 
// === operador Estricto
// !== operador estricto para comparar 