let precio = parseFloat(prompt("Precio del electrodoméstico:"));
let meses = parseInt(prompt("Número de meses del crédito:"));
let precioFinal = precio;

for (let i = 0; i < meses; i++) {
    precioFinal += precioFinal * 0.05;
}

let cuotaMensual = precioFinal / meses;
alert("Cuota mensual: $" + cuotaMensual.toFixed(2));
