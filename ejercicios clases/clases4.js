class Animal{

    hacerSonido(){
        console.log("Hacer sonido");
    }
}

class gato extends Animal{

    hacerSonido(){
        console.log("El gato hace miau");
    }

}

const sonido= new gato();
sonido.hacerSonido();


class perro extends Animal{

    hacerSonido(){
        console.log("El perro hace guau");
    }

}
const sonido1= new perro();
sonido1.hacerSonido();