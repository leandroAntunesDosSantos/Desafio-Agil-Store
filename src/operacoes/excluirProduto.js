const prompt = require("prompt-sync")();
const fs = require('fs');

function excluirProduto() {
    const produtosJson = fs.readFileSync('./src/produtos.json');
    const produtosString = JSON.parse(produtosJson);

    const id = parseInt(prompt('Digite o id do produto: '));
    if (!id || id < 0 || isNaN(id)) {
        console.log('Id do produto é obrigatório!');
        return;
    }

    const index = produtosString[0].produtos.findIndex(produto => produto.id === id);
    if (index < 0) {
        console.log('Produto não encontrado!');
        return;
    }

    produtosString[0].produtos.splice(index, 1);

    const confirmacao = prompt('Deseja realmente excluir o produto? (S/N): ');
    if (confirmacao.toUpperCase() !== 'S') {
        console.log('Operação cancelada!');
        return;
    }
    fs.writeFileSync('./src/produtos.json', JSON.stringify(produtosString));
    console.log('Produto excluído com sucesso!');
    console.log();
}

module.exports = excluirProduto;