class CuentaBancaria {
    #saldo;

    constructor() {
        this.#saldo = 2000000;
    }

    mostrarSaldo() {
        return `Usted tiene en su cuenta ${this.#saldo}`
    }

    depositarDinero(monto) {
       this.#saldo += monto;
       return `Usted ha depositado ${monto}`
    }

    retirarDinero(monto) {
        if (monto > this.#saldo) {
          return `Fondos insuficientes.`;
        }
        this.#saldo -= monto;
        return `Usted ha retirado $${monto}`;
      }
      

}
const miCuenta = new CuentaBancaria();

console.log( miCuenta.mostrarSaldo());
console.log( miCuenta.depositarDinero(500000));
console.log( miCuenta.retirarDinero(1000000));
console.log( miCuenta.mostrarSaldo());

