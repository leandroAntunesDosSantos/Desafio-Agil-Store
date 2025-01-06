const fs = require('fs');
const prompt = require("prompt-sync")();

function atualizarProduto() {
    const produtosJson = fs.readFileSync('./src/produtos.json');
    const produtosString = JSON.parse(produtosJson);

    console.log("");
    const id = parseInt(prompt('  Digite o id do produto: '));
    if (!id || id < 0 || isNaN(id)) {
        console.log("");
        console.log("  Id do produto é obrigatório!");
        console.log("");
        return;
    }

    const campo = prompt("Digite o campo que deseja atualizar (Nome, Categoria, Quantidade, preco): ");
    if (!campo || campo.trim() === "") {
        console.log("");
        console.log("  Campo é obrigatório!");
        console.log("");
        return;
    }

    const index = produtosString[0].produtos.findIndex(produto => produto.id === id);
    if (index < 0) {
        console.log("");
        console.log("  Produto não encontrado!");
        console.log("");
        return;
    }

    switch (campo.toLowerCase()) {
        case "nome":
            const nome = prompt("Digite o novo nome do produto: ");
            if (!nome || nome.trim() === "") {
                console.log("");
                console.log("  Nome do produto é obrigatório!");
                console.log("");
                return;
            }
            produtosString[0].produtos[index].nome = nome;
            break;
        case "categoria":
            const categoria = prompt("Digite a nova categoria do produto: ");
            if (!categoria || categoria.trim() === "") {
                console.log("");
                console.log("  Categoria do produto é obrigatório!");
                console.log("");
                return;
            }
            produtosString[0].produtos[index].categoria = categoria;
            break;
        case "quantidade":
            const quantidade = parseInt(prompt("Digite a nova quantidade em estoque: "));
            if (!quantidade || quantidade < 0 || isNaN(quantidade)) {
                console.log("");
                console.log("  Quantidade em estoque é obrigatório!");
                console.log("");
                return;
            }
            produtosString[0].produtos[index].quantidade_em_estoque = quantidade;
            break;
        case "preco":
            const preco = parseFloat(prompt("Digite o novo preco do produto: "));
            if (!preco || preco < 0 || isNaN(preco)) {
                console.log("");
                console.log("  Preco do produto é obrigatório!");
                console.log("");
                return;
            }
            produtosString[0].produtos[index].preco = preco;
            break;
        default:
            console.log("");
            console.log("  Campo inválido!");
            console.log("");
            return;
    }
    console.log("");
    console.log("Produto a ser atualizado: ");
    console.log(`Id: ${produtosString[0].produtos[index].id}`);
    console.log(`Nome: ${produtosString[0].produtos[index].nome}`);
    console.log(`Categoria: ${produtosString[0].produtos[index].categoria}`);
    console.log(`Quantidade em estoque: ${produtosString[0].produtos[index].quantidade_em_estoque}`);
    console.log(`preco: ${produtosString[0].produtos[index].preco}`);
    console.log("------------------------------------");
    const confirmacao = prompt("Deseja realmente atualizar o produto? (S/N): ");
    if (confirmacao.toUpperCase() !== "S") {
        console.log("");
        console.log(" Atualização cancelada! ");
        console.log("");
        return;
    }
    fs.writeFileSync('./src/produtos.json', JSON.stringify(produtosString));
    console.log("");
    console.log("  Produto atualizado com sucesso! ");
    console.log("");
}

module.exports = atualizarProduto;