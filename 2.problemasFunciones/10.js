function eliminarVocales(texto) {
    
    return texto.replace(/[aeiouAEIOU]/g, "");
}


let palabra = "Hola Mundo";
console.log(eliminarVocales(palabra)); 
