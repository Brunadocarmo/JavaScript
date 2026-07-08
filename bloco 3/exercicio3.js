const produto = {
    nome: "Notebook",
    preco: 3500,
    categoria: "Eletrônicos",
    emEstoque: true
};

// Acessando propriedades
console.log(produto.nome);
console.log(produto.preco);
console.log(produto.categoria);
console.log(produto.emEstoque);

// Alterando preço
produto.preco = 3200;

// Adicionando nova propriedade
produto.desconto = 0.1;

// Calculando preço final
const precoFinal = produto.preco * (1 - produto.desconto);

console.log(`Preço final com desconto: R$ ${precoFinal}`);