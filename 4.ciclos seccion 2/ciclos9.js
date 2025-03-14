
let palabra;

while (true) {  
    palabra = prompt("Escribe algo (o escribe 'salir' para terminar):");

    if (palabra === "salir") { 
        console.log("Programa terminado.");
        break;
    }

    console.log("Escribiste:", palabra); 
}
