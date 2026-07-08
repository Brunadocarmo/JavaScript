const calculadora = {
    historico: [],

    somar(a, b) {
        const resultado = a + b;
        this.historico.push(`${a} + ${b} = ${resultado}`);
        return resultado;
    },

    subtrair(a, b) {
        const resultado = a - b;
        this.historico.push(`${a} - ${b} = ${resultado}`);
        return resultado;
    },

    verHistorico() {
        console.log("Histórico:");

        for (let i = 0; i < this.historico.length; i++) {
            console.log(this.historico[i]);
        }
    }
};

// Operações
console.log(calculadora.somar(5, 3));
console.log(calculadora.subtrair(10, 4));
console.log(calculadora.somar(8, 2));

// Histórico
calculadora.verHistorico();