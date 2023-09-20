class Ingresso {

    #valor = null;

    constructor(valor) {

        this.#valor = valor;

    }

    imprimeValor() {
    
        return "O valor do ingresso é: R$" + this.valor;

    }

    //getValor
    get valor() {

        return this.#valor;

    }

}

class Vip extends Ingresso {

    #valorAdc = null;

    constructor(valor, valorAdc) {

        super(valor);
        this.#valorAdc = valorAdc;

    }

    #calcularValorIngresso() {

        return this.valor + this.#valorAdc;

    }

    imprimeValorVip() {

        return "O valor do ingresso VIP é: R$" + this.#calcularValorIngresso();

    }

    get valorAdc() {

        return this.#valorAdc;

    }

}

class Normal extends Ingresso {

    constructor(valor) {

        super(valor);

    }

    imprimeNormal() {

        return "O ingresso é normal";

    }

}

class CamaroteInferior extends Vip {

    #localizacao = null;

    constructor(valor, valorAdc, localizacao) {

        super(valor, valorAdc);
        this.#localizacao = localizacao;

    }

    imprimirLocalizacao() {

        return "Localização: " + this.localizacao;

    }

    get localizacao() {

        return this.#localizacao;

    }

}

class CamaroteSuperior extends Vip {

    #valorAdcCamSup = null;

    constructor(valor, valorAdc, valorAdcCamSup) {

        super(valor, valorAdc);
        this.#valorAdcCamSup = valorAdcCamSup;

    }

    #calcularValorIngressoCamSup() {

        return this.valor + this.valorAdc + this.#valorAdcCamSup

    }

    get valorIngresso() {

        return "O valor do ingresso do camarote superior é: " + this.#calcularValorIngressoCamSup();

    }

}

const ingresso = new Ingresso(5.55);
console.log(ingresso.imprimeValor());

const ingressoVip = new Vip(ingresso.valor, 10);
console.log(ingressoVip.imprimeValorVip());

const ingressoNormal = new Normal(ingresso.valor);
console.log(ingressoNormal.imprimeNormal());

const camaroteInferior = new CamaroteInferior(ingressoVip.valor, ingressoVip.valorAdc, "Viela de baixo");
camaroteInferior.imprimirLocalizacao();

const camaroteSuperior = new CamaroteSuperior(ingressoVip.valor, ingressoVip.valorAdc, 14.45, "Viela de cima");
console.log(camaroteSuperior.valorIngresso);

