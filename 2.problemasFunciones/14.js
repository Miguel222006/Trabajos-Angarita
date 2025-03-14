function permitirEntrada(edad, estatura, permisoParental) {
    // Verificar si es mayor de edad y mide más de 150 cm
    if (edad >= 18 && estatura > 150) {
        console.log("¡Acceso permitido! Eres mayor de edad y cumples con la estatura mínima.");
    } 
    // Si es menor de edad, se revisa si tiene permiso parental
    else if (edad < 18 && estatura > 150 && permisoParental) {
        console.log("Acceso permitido con permiso parental.");
    } 
    // Si no cumple con las condiciones, no puede entrar
    else {
        console.log("Acceso denegado. No cumples con los requisitos.");
    }
}

// Ejemplo de uso:
permitirEntrada(20, 160, false); 
permitirEntrada(16, 155, true);  
permitirEntrada(15, 140, true);
permitirEntrada(17, 160, false); 
