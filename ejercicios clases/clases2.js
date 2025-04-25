class contador {
    static cuenta = 0;

    static incrementar() {
        contador.cuenta++;
    }
}

console.log(contador.cuenta);
contador.incrementar();
contador.incrementar();
contador.incrementar();
console.log(contador.cuenta);