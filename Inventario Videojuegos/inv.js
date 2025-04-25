class Inventario {
    #videojuegos;  

    constructor() {
        this.#videojuegos = [];  
    }

    
    ingresarVideojuego(nuevoVideojuego) {
        this.#videojuegos.push(nuevoVideojuego);
    }

    
    obtenerTodosVideojuegos() {
        return this.#videojuegos;
    }


    eliminarVideojuego(nombre) {
        this.#videojuegos = this.#videojuegos.filter(videojuego => videojuego.nombre !== nombre);
    }

    
    actualizarVideojuego(nombre, nuevoDatos) {
        for (let i = 0; i < this.#videojuegos.length; i++) {
            if (this.#videojuegos[i].nombre === nombre) {
                this.#videojuegos[i] = nuevoDatos;  
                break;
            }
        }
    }
}


class Administrador extends Inventario {
    constructor(nombre, contrasena, email) {
        super();  
        this.nombre = nombre;
        this.contrasena = contrasena;
        this.email = email;
    }

    
    agregarVideojuego(videojuego) {
        this.ingresarVideojuego(videojuego);  
    }
}




let admin = new Administrador("Juan", "12345", "juan@correo.com");

admin.agregarVideojuego({nombre: "Minecraft", precio: 100000, categoria: "Sandbox"});
admin.agregarVideojuego({nombre: "FIFA 23", precio: 150000, categoria: "Deportes"});

console.log("Después de agregar:");
console.log(admin.obtenerTodosVideojuegos());


admin.eliminarVideojuego("FIFA 23");
console.log("Después de eliminar FIFA 23:");
console.log(admin.obtenerTodosVideojuegos());


admin.actualizarVideojuego("Minecraft", {nombre: "Minecraft", precio: 120000, categoria: "Aventura"});
console.log("Después de actualizar Minecraft:");
console.log(admin.obtenerTodosVideojuegos());