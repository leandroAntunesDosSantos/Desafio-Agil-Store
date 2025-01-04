const fs = require('fs');
const prompt = require("prompt-sync")();

function adicionarProdutos() {
    console.log('teste adicionar produtos');
    const nome = prompt('Digite o nome do produto: ');
    const categoria = prompt('Digite a categoria do produto: ');
    const preco = prompt('Digite o preço do produto: ');
    const quantidade = prompt('Digite a quantidade do produto: ');

    const produto = {
        nome,
        categoria,
        preco,
        quantidade
    }

    const produtos = JSON.parse(fs.readFileSync('./src/produtos.json'));
    produtos.push(produto);
    fs.writeFileSync('./src/produtos.json', JSON.stringify(produtos));
    console.log('Produto adicionado com sucesso!');
}

module.exports = adicionarProdutos;

