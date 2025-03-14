let producto = prompt("Ingrese el nombre del producto:").toLowerCase(); 


if (producto === "vino" || producto === "crema") {
    console.log("El producto paga IVA.");
} else if (producto === "lentejas" || producto === "arroz") {
    console.log("El producto no paga IVA.");
} else {
    console.log("Producto no reconocido.");
}
