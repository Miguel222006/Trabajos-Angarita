/*4. Dado el objeto {"dos": 2, "cinco": 5, "siete": 7, "cuarenta": 40, "cincuenta": 50} recorrer el objeto y mostrar
cuáles de los valores son pares.*/

let numero = {  
    "dos": 2,
    "cinco": 5,
    "siete": 7,
    "cuarenta": 40,
    "cincuenta": 50
};

for (let clave in numero) {
    if (numero[clave] % 2 === 0) {
        console.log(`La clave ${clave} tiene un valor par: ${numero[clave]}`)
    }
}