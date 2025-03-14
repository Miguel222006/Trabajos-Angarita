let acumuladora = 0;
//variable control del ciclo
let control = 1;
let n = parseInt(prompt("Ingrese n mayor que 1"));
while (control <= n) {
    acumuladora = acumuladora + control;
    control++;
}
console.log("Valor acumulado: ", acumuladora);