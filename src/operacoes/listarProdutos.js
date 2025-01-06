const fs = require('fs');
const prompt = require("prompt-sync")();


function listarProdutos() {
    if (!verificarProdutosEmEstoque()) {
        return;
    }
    console.log('------------------------------------');
    console.log('1 - Filtrar por categoria');
    console.log('2 - Ordenar por nome');
    console.log('3 - Ordenar por quantidade');
    console.log('4 - Ordenar por preço');
    console.log('5 - Listar todos os produtos');
    console.log('9 - Voltar');
    const opcao = prompt('Escolha uma opção: ');
    console.log('------------------------------------');

    switch (opcao) {
        case '1':
            filtragemCategoria();
            break;
        case '2':
            ordenarPorNome();
            break;
        case '3':
            ordenarPorQuantidade();
            break;
        case '4':
            ordenarPorPreco();
            break;
        case '5':
            listarTodosProdutos();
            break;
        case '9':
            return;
        default:
            console.log('Opção inválida!');
            break;
    }
}

function filtragemCategoria() {
    const produtosJson = fs.readFileSync('./src/produtos.json');
    const produtosString = JSON.parse(produtosJson);
    
    const categoria = prompt('Digite a categoria do produto: ');
    const produtosFiltrados = produtosString[0].produtos.filter(produto => produto.categoria === categoria);
    visualizarProdutos(produtosFiltrados);
}

function ordenarPorNome() {
    const produtosJson = fs.readFileSync('./src/produtos.json');
    const produtosString = JSON.parse(produtosJson);

    const produtosOrdenados = produtosString[0].produtos.sort((a, b) => {
        if (a.nome < b.nome) {
            return -1;
        }
        if (a.nome > b.nome) {
            return 1;
        }
        return 0;
    });
    visualizarProdutos(produtosOrdenados);
}

function ordenarPorQuantidade() {
    const produtosJson = fs.readFileSync('./src/produtos.json');
    const produtosString = JSON.parse(produtosJson);

    const produtosOrdenados = produtosString[0].produtos.sort((a, b) => a.quantidade_em_estoque - b.quantidade_em_estoque);
    visualizarProdutos(produtosOrdenados);
}

function ordenarPorPreco() {
    const produtosJson = fs.readFileSync('./src/produtos.json');
    const produtosString = JSON.parse(produtosJson);

    const produtosOrdenados = produtosString[0].produtos.sort((a, b) => a.preco - b.preco);
    visualizarProdutos(produtosOrdenados);
}

function listarTodosProdutos() {
    const produtosJson = fs.readFileSync('./src/produtos.json');
    const produtosString = JSON.parse(produtosJson);

    const produtosOrdenados = produtosString[0].produtos.sort((a, b) => a.id - b.id);
    visualizarProdutos(produtosOrdenados);
}

function verificarProdutosEmEstoque() {
    const produtosJson = fs.readFileSync('./src/produtos.json');
    const produtosString = JSON.parse(produtosJson);

    const produtosEmEstoque = produtosString[0].produtos.filter(produto => produto.quantidade_em_estoque > 0);

    if (produtosEmEstoque.length === 0) {
        console.log('------------------------------------');
        console.log('Nenhum produto em estoque!');
        console.log('------------------------------------');
        return false;
    }else{
        return true;
    }
}

function visualizarProdutos(produtosRef){
    console.log('')
    console.log('----- Lista de produtos: -----');
    produtosRef.forEach(produto => {
        console.log(`Id: ${produto.id}`);
        console.log(`Nome: ${produto.nome}`);
        console.log(`Categoria: ${produto.categoria}`);
        console.log(`Quantidade em estoque: ${produto.quantidade_em_estoque}`);
        console.log(`Preço: ${produto.preco}`);
        console.log('------------------------------------');
    });
}

module.exports = listarProdutos;