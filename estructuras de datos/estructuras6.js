//6. Dado el siguiente objeto { numeros: [45, 78, 22, 89, 8] } recorrer el valor de la clave números.

let numeros = {
    numeros: [45, 78, 22, 89, 8]
};

for (let i = 0; i < numeros.numeros.length; i++) {
    console.log(numeros.numeros[i]);
}

