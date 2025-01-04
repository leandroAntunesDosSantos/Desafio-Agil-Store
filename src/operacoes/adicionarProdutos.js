const fs = require('fs');
const prompt = require("prompt-sync")();


function adicionarProdutos() {
    const produtosJson = fs.readFileSync('./src/produtos.json');
    const produtosString = JSON.parse(produtosJson);

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
    
    let id = produtosString[0].idGlobal;
    
    const produto = {
        id: id,
        nome,
        categoria,
        quantidade_em_estoque: quantidade,
        preco
    }

    produtosString[0].idGlobal++;
    produtosString[0].produtos.push(produto);

    fs.writeFileSync('./src/produtos.json', JSON.stringify(produtosString));
    console.log('Produto adicionado com sucesso!');
}

module.exports = adicionarProdutos;
