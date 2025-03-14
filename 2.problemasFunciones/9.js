// function palabra (p) {
//     return p.match("a", "e", "i", "o", "u");
// }
// console.log(palabra("Pseudocodigo"));

function contarVocales(texto) {
    let vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    
    let cantidad = 0;
    
    
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i]; 
        
        
        if (vocales.includes(letra)) {
            cantidad++;
        }
    }
    
    
    return cantidad;
}


let palabra = "Hola Mundo";
console.log("Número de vocales:", contarVocales(palabra)); 
