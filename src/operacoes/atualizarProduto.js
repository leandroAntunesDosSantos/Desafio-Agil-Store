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

    const campo = prompt('Digite o campo que deseja atualizar (Nome, Categoria, Quantidade, Preço): ');
    if (!campo || campo.trim() === '') {
        console.log('Campo é obrigatório!');
        return;
    }

    const index = produtosString[0].produtos.findIndex(produto => produto.id === id);
    if (index < 0) {
        console.log('Produto não encontrado!');
        return;
    }

    switch (campo.toLowerCase()) {
        case 'nome':
            const nome = prompt('Digite o novo nome do produto: ');
            if (!nome || nome.trim() === '') {
                console.log('Nome do produto é obrigatório!');
                return;
            }
            produtosString[0].produtos[index].nome = nome;
            break;
        case 'categoria':
            const categoria = prompt('Digite a nova categoria do produto: ');
            if (!categoria || categoria.trim() === '') {
                console.log('Categoria do produto é obrigatório!');
                return;
            }
            produtosString[0].produtos[index].categoria = categoria;
            break;
        case 'quantidade':
            const quantidade = parseInt(prompt('Digite a nova quantidade em estoque: '));
            if (!quantidade || quantidade < 0 || isNaN(quantidade)) {
                console.log('Quantidade em estoque é obrigatório!');
                return;
            }
            produtosString[0].produtos[index].quantidade_em_estoque = quantidade;
            break;
        case 'preço':
            const preco = parseFloat(prompt('Digite o novo preço do produto: '));
            if (!preco || preco < 0 || isNaN(preco)) {
                console.log('Preço do produto é obrigatório!');
                return;
            }
            produtosString[0].produtos[index].preco = preco;
            break;
        default:
            console.log('Campo inválido!');
            return;
    }
    console.log();
    console.log('Produto a ser atualizado: ');
    console.log(`Id: ${produtosString[0].produtos[index].id}`);
    console.log(`Nome: ${produtosString[0].produtos[index].nome}`);
    console.log(`Categoria: ${produtosString[0].produtos[index].categoria}`);
    console.log(`Quantidade em estoque: ${produtosString[0].produtos[index].quantidade_em_estoque}`);
    console.log(`Preço: ${produtosString[0].produtos[index].preco}`);
    console.log('------------------------------------');
    const confirmacao = prompt('Deseja realmente atualizar o produto? (S/N): ');
    console.log();
    if (confirmacao.toUpperCase() !== 'S') {
        console.log('Operação cancelada!');
        return;
    }
    fs.writeFileSync('./src/produtos.json', JSON.stringify(produtosString));
    console.log('Produto atualizado com sucesso!');
}

module.exports = atualizarProduto;