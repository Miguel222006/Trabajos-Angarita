let angulo1 = parseInt(prompt("Ingrese angulo 1"))
let angulo2 = parseInt(prompt("Ingrese angulo 2"))
let angulo3 = parseInt(prompt("Ingrese angulo 3"))

let total = angulo1 + angulo2 + angulo3;
if (total === 180) {                     // el triangulo debe ser si o si 180°, ni mas ni menos
    alert(`Este es un triangulo`)
}
else {
    alert(`Este no es un triangulo`)
}