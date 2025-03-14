let PrecioProducto = parseInt(prompt("Ingrese el precio del producto"))

let Porcentaje = 10

let PrecioFinal = PrecioProducto - (PrecioProducto * Porcentaje / 100)

alert(`El precio final de su producto es de ${PrecioFinal}`)