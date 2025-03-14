let n = parseInt(prompt("Ingrese el número de estudiantes:")); 

for (let i = 1; i <= n; i++) { 
    console.log(`\nEstudiante ${i}:`);

    let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

    let promedio = (nota1 + nota2 + nota3) / 3; 

    console.log(`El promedio del estudiante ${i} es: ${promedio.toFixed(2)}`); 
}
