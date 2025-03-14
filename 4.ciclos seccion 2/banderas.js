//version menos eficiente
let letra = prompt("Ingrese letra")
while (letra != "s" && letra != "S") {
    letra = prompt("ingrese letra");
}

//version mas eficiente
do {
    letra = prompt("Ingrese letra");
}while (letra != "s" && letra != "S");
