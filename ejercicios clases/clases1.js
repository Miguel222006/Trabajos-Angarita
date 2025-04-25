class persona{
    constructor(nombre){
        this.nombre = nombre;
    }
    caminar(){
        return `Un dia ${this.nombre} salio a caminar.`;
    }
}

const nombre = new persona ('Miguel');
console.log (nombre.caminar());