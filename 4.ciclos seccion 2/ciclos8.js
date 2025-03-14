/*let num = parseInt(prompt("Ingrese número"))

if (num % 2 === 0) {
    alert("Este número es par")
}
else {
    alert ("Este número es impar")
}*/    

/* este es para pedir al usuario un numero y decir si es par o impar, hice esto primero porque 
interprete mal el problema */


//Este es el problema hecho correctamente 
function mostrarImpares(n) {
    for (let i = 1; i <= n; i += 2) { 
        console.log(i); 
    }
}
mostrarImpares(3432);