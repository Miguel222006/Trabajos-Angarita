function evaluarEstudiante(nota1, nota2, nota3, nota4, nota5) {
    
    let promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

    
    if (promedio >= 3.0) {
        console.log("¡Felicidades! Has aprobado la materia con un promedio de " + promedio.toFixed(2));
    } else {
        console.log("Lo siento, no aprobaste la materia. Tu promedio es " + promedio.toFixed(2));
    } /* .toFixed(2) sirve para redondear el resultado obtenido a 2 decimales, ya que aveces
    muestra demasiados numeros*/
}


evaluarEstudiante(2.2, 3.0, 4.0, 3.5, 2.0);
