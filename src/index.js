const prompt = require('prompt-sync')();
const adicionarProduto = require('./operacoes/adicionarProdutos');
const listarProduto = require('./operacoes/listarProdutos');
const atualizarProduto = require('./operacoes/atualizarProduto');
const excluirProduto = require('./operacoes/excluirProduto');
const buscarProduto = require('./operacoes/buscarProduto');


let continuar = true;

while (continuar) {
    console.log();
    console.log("Bem vindo a loja AgilStore");
    console.log("1 - Adicionar produtos");
    console.log("2 - Listar produtos");
    console.log("3 - Atualizar produto");
    console.log("4 - Excluir produto");
    console.log("5 - Buscar produto");
    console.log("9 - Sair");

    const opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
        case "1":
            console.log();
            adicionarProduto();
            break;
        case "2":
            console.log();
            listarProduto();
            break;
        case "3":
            console.log();
            atualizarProduto();
            break;
        case "4":
            console.log();
            excluirProduto();
            break;
        case "5":
            console.log();
            buscarProduto();
            break;
        case "9":
            console.log("");
            continuar = false;
            break;
        default:
            console.log("Opção inválida");
            break;
    }
}