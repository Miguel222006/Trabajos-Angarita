function calcularPromedio(numeros) {
    let suma = 0; 

    
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i]; 
    }

    let promedio = suma / numeros.length; 

    return promedio.toFixed(2); 
}

// Ejemplo de uso:
let numerosEjemplo = [5, 8, 6, 10, 7, 9, 4, 6, 8, 7]; 
console.log("El promedio es: " + calcularPromedio(numerosEjemplo));
