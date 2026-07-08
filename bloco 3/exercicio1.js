function saudacao(nome) {
    return `Olá, ${nome}! Bem-vindo ao sistema.`;
}

function ehPositivo(numero) {
    return numero > 0;
}

function calcularArea(largura, altura) {
    return largura * altura;
}

// Testes
console.log(saudacao("Ana"));
console.log(saudacao("Carlos"));

console.log(ehPositivo(10));
console.log(ehPositivo(-5));

console.log(calcularArea(5, 4));
console.log(calcularArea(8, 3));