const prompt = require("prompt-sync")();
const fs = require('fs');

function buscarProduto() {
    const produtosJson = fs.readFileSync('./src/produtos.json');
    const produtosString = JSON.parse(produtosJson);

    const busca = prompt('Digite o id ou parte do nome do produto: ');
    if (!busca || busca.trim() === '') {
        console.log('Campo de busca é obrigatório!');
        return;
    }

    const produtosEncontrados = produtosString[0].produtos.filter(produto => {
        return produto.id === parseInt(busca) || produto.nome.toLowerCase().includes(busca.toLowerCase());
    });

    if (produtosEncontrados.length === 0) {
        console.log('Produto não encontrado!');
        return;
    }

    console.log('Lista de produtos:');
    produtosEncontrados.forEach(produto => {
        console.log(`Id: ${produto.id}`);
        console.log(`Nome: ${produto.nome}`);
        console.log(`Categoria: ${produto.categoria}`);
        console.log(`Quantidade em estoque: ${produto.quantidade_em_estoque}`);
        console.log(`Preço: ${produto.preco}`);
        console.log('------------------------------------');
    });
    console.log();
}

module.exports = buscarProduto;