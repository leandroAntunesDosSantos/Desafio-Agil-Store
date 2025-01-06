# AgilStore

Bem-vindo à AgilStore, uma aplicação de console para gerenciamento de produtos.

## Linguagens Utilizadas

- Javascript (Node.Js - v22.11.0)

## Pacotes Utilizados

- `prompt-sync`: Para entrada de dados via console.
- `fs`: Para manipulação de arquivos.


## Funcionalidades

1. **Adicionar produtos**: Permite adicionar novos produtos ao estoque.
2. **Listar produtos**: Exibe todos os produtos cadastrados.
3. **Atualizar produto**: Permite atualizar as informações de um produto existente.
4. **Excluir produto**: Permite remover um produto do estoque.
5. **Buscar produto**: Permite buscar um produto específico pelo nome.
9. **Sair**: Encerra a aplicação.

## Como Usar

1. Clone o repositório para sua máquina local.
    ```sh
    git clone git@github.com:leandroAntunesDosSantos/Desafio-Agil-Store.git
    ```
2. Instale as dependências necessárias:
    ```sh
    npm install prompt-sync

        ou somente

    npm install
    ```
3. Execute a aplicação:
    ```sh
    node src/index.js 

       ou
       
    npm start
    ```
4. Siga as instruções no console para interagir com a aplicação.

## Estrutura de Dados

Os dados dos produtos são armazenados em um arquivo JSON localizado na pasta `src` chamado `data.json`.

## Exemplo de Uso

```sh
Bem vindo a loja AgilStore
1 - Adicionar produtos
2 - Listar produtos
3 - Atualizar produto
4 - Excluir produto
5 - Buscar produto
9 - Sair
Escolha uma opção:
```


O arquivo `produtos.json` já está dentro do projeto, na pasta `src`, e deve possuir o seguinte formato inicial:

```json
[
    {
        "idGlobal": 1,
        "produtos": []
    }
]

```

O campo `idGlobal` serve como referência para as operações de CRUD com os produtos, e o array `produtos` armazenará os produtos cadastrados.

Caso esteja utilizando o VS Code, você pode utilizar `Shift + Alt + F` para identar o código e melhorar a visualização do arquivo JSON.


Na operação de buscar produto, é possível realizar a busca pelo ID ou por parte do nome do produto.

Na operação de listar produtos, é possível selecionar a ordenação por nome, quantidade ou preço, ou trazer todos os produtos de forma sequencial, conforme foram gravados no arquivo de produtos.



