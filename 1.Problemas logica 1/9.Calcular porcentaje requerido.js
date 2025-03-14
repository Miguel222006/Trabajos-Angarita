/*let Cantidad = parseInt(prompt("Ingrese la cantidad a calcular"))
let Porcentaje = parseInt(prompt("Ingrese el porcentaje que desea saber"))

let PorcentajeFinal = Cantidad + (Cantidad * Porcentaje / 100)

alert(`La cantidad total es de ${PorcentajeFinal}`);*/

let cantidad = parseFloat(prompt("Ingrese la cantidad:"));
let porcentaje = parseFloat(prompt("Ingrese el porcentaje a calcular:"));

let resultado = cantidad * (porcentaje / 100);

alert(`El ${porcentaje}  % de ${cantidad}  es: ${resultado}`);
