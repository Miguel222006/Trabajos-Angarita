function calcularArea (base, altura) {  //inicio funcion 
    let area = base*altura              // establezco que area sea igual a base por altura
    return area                         // La palabra clave return hace que la función devuelva el valor almacenado en area cuando se la llama.
}

let area = calcularArea (34,23)         // establezco los valores de base y altura respectivamente
console.log(area);                      // muestro en consola el resultado final que seria 782 en este caso
