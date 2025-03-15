// let cadena = "Venta de zapatos"
// let posicion = "z"
// function palabra(cadena) {
//     if (posicion === true)
//         return true

// } 
// return false 

// console.log(palabra(cadena));



/*solucion

let cadena = prompt("Ingrese cadena")

function comprobarZ(cadena){
    for (let index = 0; index < cadena.length; index++) {
        if (cadena [index] == "z"){
            return true;
        }

    }
    return false;
}
console.log(comprobarZ(cadena));*/




//Ejercicios para practicar

/*Una función que recibe una cadena y muestra si la cadena tiene la letra s o S 

let cadena = prompt("Ingrese palabra")

function comprobarSs(cadena) {
    for (let index = 0; index < cadena.length; index++) {
        if (cadena[index] == "s" || cadena[index] == "S") {
            return true;
    }
    
}
return false;
}

console.log((comprobarSs(cadena)));*/

//Una función que reciba dos números y retorne el mayor si lo hay

function encontrarMayor(num1, num2) {
    if (num1 > num2) {
        return num1;  
    } else if (num2 > num1) {
        return num2;  
    } else {
        return "Los números son iguales";  
    }
}


console.log(encontrarMayor(10, 5));  
console.log(encontrarMayor(3, 8));   
console.log(encontrarMayor(-9, -5));   

//Una función que reciba un arreglo de números y retorne otro arreglo solo con los números pares

function filtrarPares(arreglo) {
    return arreglo.filter(num => num % 2 === 0);
}

// Ejemplo de uso
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = filtrarPares(numeros);
console.log(pares);  // Salida: [2, 4, 6, 8, 10]




