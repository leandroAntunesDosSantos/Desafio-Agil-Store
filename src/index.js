const prompt = require('prompt-sync')();
const adicionarProduto = require('./operacoes/adicionarProdutos');
const listarProduto = require('./operacoes/listarProdutos');
const atualizarProduto = require('./operacoes/atualizarProduto');
const excluirProduto = require('./operacoes/excluirProduto');
const buscarProduto = require('./operacoes/buscarProduto');


let continuar = true;

while (continuar) {
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
            adicionarProduto();
            break;
        case "2":
            listarProduto();
            break;
        case "3":
            atualizarProduto();
            break;
        case "4":
            console.log("Excluir produto");
            excluirProduto();
            break;
        case "5":
            console.log("Buscar produto");
            buscarProduto();
            break;
        case "9":
            console.log("Saindo...");
            continuar = false;
            break;
        default:
            console.log("Opção inválida");
            break;
    }
}