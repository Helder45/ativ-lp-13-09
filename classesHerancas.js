class Retangulo {

    #altura = null;
    #largura = null;

    constructor(altura, largura){
        this.#altura = altura;
        this.#largura = largura;
    }

    get area(){

        return this.#calcularArea();

    }

    #calcularArea(){

        return this.#altura * this.#largura;

    }
}

class Quadrado extends Retangulo{

    constructor(lado) {

        super(lado, lado)

    }
    
}

const quadrado = new Quadrado(5);
console.log(quadrado.area);