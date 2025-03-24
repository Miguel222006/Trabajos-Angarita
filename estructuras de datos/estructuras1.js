// 1. Cree un objeto donde se almacenen los productos de un supermercado con su respectivo precio. Los
// productos son:
// Papa, Arroz, Lentejas, Aceite. Luego imprima cada uno de los precios almacenados en el objeto anterior con su
// respectivo producto.


let supermercado = {
    Papa: 2500,
    Arroz: 3200,
    Lentejas: 2800,
    Aceite: 12000
};


for (let producto in supermercado) {
    console.log(`Producto: ${producto}, Precio: $${supermercado[producto]}`);
}

