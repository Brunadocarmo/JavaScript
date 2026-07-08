const saudacao = (nome) => `Olá, ${nome}! Bem-vindo ao sistema.`;

const ehPositivo = (numero) => numero > 0;

const calcularArea = (largura, altura) => largura * altura;

// Testes
console.log(saudacao("Ana"));
console.log(saudacao("Carlos"));

console.log(ehPositivo(10));
console.log(ehPositivo(-5));

console.log(calcularArea(5, 4));
console.log(calcularArea(8, 3));