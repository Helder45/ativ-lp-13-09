class ContaBancaria {

    #saldo = null;
    #numeroDaConta = null;

    constructor(numeroDaConta) {

        this.#saldo = 0;
        this.#numeroDaConta = numeroDaConta;

    }

    depositar(valor) {

        return this.#saldo += valor;

    }

    sacar(valor) {

        if(valor > this.#saldo){
            return "\nNão foi possível realizar a transação! Saldo insuficiente!\n"
        }

        return this.#saldo -= valor;

    }

    get saldo() {

        return this.#saldo;

    }

    get numeroDaConta() {

        return this.#numeroDaConta;

    }
    
}

class ContaCorrente extends ContaBancaria{

    constructor(saldo, numeroDaConta){

        super(saldo, numeroDaConta);

    }

    aplicarTaxaDeManutencao(taxa) {

        return "A taxa de manutenção da conta é de: " + taxa + "%";

    }

}

class ContaPoupanca extends ContaBancaria{

    constructor(saldo, numeroDaConta){

        super(saldo, numeroDaConta);

    }

    aplicarJuros(taxaDeJuros, tempo) {

        let juros = (this.saldo * (1 + (taxaDeJuros/100)) ** tempo) - this.saldo;
        let jurosFixed = juros.toFixed(2);

        return `O juros aplicado no período de ${tempo} meses, sob a taxa de juros de ${taxaDeJuros}% ao mês foi de: R$ ${jurosFixed}`;
        
    }
    
}


const novaContaBancaria = new ContaBancaria(15328);
novaContaBancaria.depositar(1550);
console.log("\nNúmero da conta: ", novaContaBancaria.numeroDaConta,"\nSaldo bancário: ", novaContaBancaria.saldo);

novaContaBancaria.sacar(550);
console.log("\nNúmero da conta: ", novaContaBancaria.numeroDaConta,"\nSaldo bancário: ", novaContaBancaria.saldo);

const novaContaCorrente = new ContaCorrente(novaContaBancaria.numeroDaConta);

novaContaCorrente.depositar(2350);
console.log("\nNúmero da conta corrente: ", novaContaCorrente.numeroDaConta, "\nSaldo bancário: ", novaContaCorrente.saldo);

novaContaCorrente.sacar(2450);
console.log("\nNúmero da conta corrente: ", novaContaCorrente.numeroDaConta, "\nSaldo bancário: ", novaContaCorrente.saldo);

console.log("\n", novaContaCorrente.aplicarTaxaDeManutencao(15), "\n");

const novaContaPoupanca = new ContaPoupanca(novaContaBancaria.numeroDaConta);

novaContaPoupanca.depositar(3525);
console.log("\nNúmero da conta poupança: ", novaContaPoupanca.numeroDaConta, "\nSaldo bancário: ", novaContaPoupanca.saldo);

novaContaPoupanca.sacar(525);
console.log("\nNúmero da conta poupança: ", novaContaPoupanca.numeroDaConta, "\nSaldo bancário: ", novaContaPoupanca.saldo);

console.log(novaContaPoupanca.aplicarJuros(10, 4));