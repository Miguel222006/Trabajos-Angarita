function calcularPromedio() {
    let suma = 0; 
    let cantidad = 0; 

    while (true) { 
        let numero = parseFloat(prompt("Ingrese un número (0 para terminar):"));

        if (numero === 0) { 
            break;
        }

        if (!isNaN(numero)) { 
            suma += numero; 
            cantidad++; 
        } else {
            console.log("Por favor, ingrese un número válido.");
        }
    }

    
    if (cantidad === 0) {
        console.log("No ingresaste ningún número válido.");
    } else {
        let promedio = suma / cantidad; 
        console.log("El promedio de los números ingresados es: " + promedio.toFixed(2));
    }
}


calcularPromedio();
