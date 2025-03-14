function calcularFactorial (n) {
    let resultado = 1; // aqui me inicia en 1
    for (let i = 1; i <= n; i++) { // aca va un bucle que va desde 1 hasta el numero que yo ponga en n
        resultado *= i; // aca multiplica el resultado por i (osea por 1) en cada iteracion
        
    }
    return resultado; //aca me retorna el factorial calculado
}

console.log(calcularFactorial(21)); // Llama a la función con n = 21 y muestra el resultado en la consola

