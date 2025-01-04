const prompt = require('prompt-sync')();
const adicionarProduto = require('./operacoes/adicionarProdutos');


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
            console.log("Adicionar produtos");
            adicionarProduto();
            break;
        case "2":
            console.log("Listar produtos");
            break;
        case "3":
            console.log("Atualizar produto");
            break;
        case "4":
            console.log("Excluir produto");
            break;
        case "5":
            console.log("Buscar produto");
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