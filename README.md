# AgilStore

Bem-vindo à AgilStore, uma aplicação de console para gerenciamento de produtos.

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
    ```
3. Execute a aplicação:
    ```sh
    node src/index.js
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


