const fs = require('fs');
const prompt = require("prompt-sync")();

function atualizarProduto() {
    const produtosJson = fs.readFileSync('./src/produtos.json');
    const produtosString = JSON.parse(produtosJson);

    const id = parseInt(prompt('Digite o id do produto: '));
    if (!id || id < 0 || isNaN(id)) {
        console.log('Id do produto é obrigatório!');
        return;
    }

    const nome = prompt('Digite o nome do produto: ');
    if (!nome || nome.trim() === '') {
        console.log('Nome do produto é obrigatório!');
        return;
    }
    const categoria = prompt('Digite a categoria do produto: ');
    if (!categoria || categoria.trim === '') {
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
        id,
        nome,
        categoria,
        quantidade_em_estoque: quantidade,
        preco
    }

    const index = produtosString[0].produtos.findIndex(produto => produto.id === id);
    if (index < 0) {
        console.log('Produto não encontrado!');
        return;
    }

    produtosString[0].produtos[index] = produto;

    fs.writeFileSync('./src/produtos.json', JSON.stringify(produtosString));
    console.log('Produto atualizado com sucesso!');
}

module.exports = atualizarProduto;