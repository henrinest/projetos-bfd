class Pagamento {
    constructor (valor) {
        if (valor <= 0) {
            throw new Error("O valor digitado é inválido!");
        } else {
            this.valor = valor
        }
    }
    pagar() {}
}

class pagamentoPix extends Pagamento {
    constructor(valor, chavepix) {
        super(valor);
        this.chavepix = chavepix
    }
    pagar() {
        console.log (`O pagamento do valor de ${this.valor} R$ foi realizado para a chave pix: ${this.chavepix}.`)
    }
}

class pagamentoCartao extends Pagamento {
    constructor(valor, cardnumber) {
        super(valor);
        this.cardnumber = cardnumber.toString()
    }
    pagar() {
        const lastnumbers = this.cardnumber.slice(-4)
        console.log(`O pagamento do valor de ${this.valor} R$ foi realizado com sucesso utilizando o cartão de final: ${lastnumbers}`)
    }
}

class pagamentoBoleto extends Pagamento {
    constructor(valor, barcode) {
        super(valor);
        this.barcode = barcode.toString()
    }
    pagar() {
        const lastnumbers = this.barcode.slice(-4)
        console.log(`O pagamento do valor de ${this.valor} R$ foi realizado com sucesso através do código de barras de final: ${lastnumbers}`)
    }
}


const pagamentopix = new pagamentoPix(200, 81997425280);
pagamentopix.pagar();

const pagamentocartao = new pagamentoCartao(100, "9999888855558627");
pagamentocartao.pagar();

const pagamentoboleto = new pagamentoBoleto(200, "999988885555862778");
pagamentoboleto.pagar();