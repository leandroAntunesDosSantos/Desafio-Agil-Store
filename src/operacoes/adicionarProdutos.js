const fs = require('fs');
const prompt = require("prompt-sync")();

let auxId = 1;

function adicionarProdutos() {
    const nome = prompt('Digite o nome do produto: ');
    if (!nome || nome.trim() === '') {
        console.log('Nome do produto é obrigatório!');
        return;
    }
    const categoria = prompt('Digite a categoria do produto: ');
    if (!categoria || categoria.trim() === '') {
        console.log('Categoria do produto é obrigatório!');
        return;
    }
    const quantidade = parseInt(prompt('Digite a quantidade em estoque: '));
    if (!quantidade || quantidade < 0 || isNaN(quantidade)) {
        console.log('Quantidade em estoque é obrigatório!');
        return;
    }
    const preco = parseFloat(prompt('Digite o preço do produto: '));
    if (!preco || preco < 0 || isNaN(preco)) {
        console.log('Preço do produto é obrigatório!');
        return;
    }
    

    const produto = {
        id: auxId++,
        nome,
        categoria,
        quantidade_em_estoque: quantidade,
        preco
    }

    const produtosJson = fs.readFileSync('./src/produtos.json');
    const produtos = JSON.parse(produtosJson);
    produtos.push(produto);
    fs.writeFileSync('./src/produtos.json', JSON.stringify(produtos));
    console.log('Produto adicionado com sucesso!');
}

module.exports = adicionarProdutos;

