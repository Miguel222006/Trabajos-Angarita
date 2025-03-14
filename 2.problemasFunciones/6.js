/*let esVocal = prompt("Ingrese letra")
if (esVocal === "a","e","i","o","u") {
    alert ("Esta es una vocal");
}
else{
    alert ("Esta no es una vocal")
}*/

function esVocal(v) {

    switch (v) {
        case `a`:
        case `e`:
        case `i`:
        case `o`:
        case `u`:
            
        return true;
        default:
        return false;
            
    }
}

console.log(esVocal(`e`));
