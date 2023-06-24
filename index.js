// Criação de um array vazio para armazenar os dados
const dados = [];

// Função para adicionar um novo item
function adicionarItem(item) {
  dados.push(item);
}

// Função para ler todos os itens
function lerItens() {
  return dados;
}

// Função para atualizar um item existente
function atualizarItem(index, novoItem) {
  if (index >= 0 && index < dados.length) {
    dados[index] = novoItem;
  }
}

// Função para remover um item
function removerItem(index) {
  if (index >= 0 && index < dados.length) {
    dados.splice(index, 1);
  }
}

// Exemplo de uso:
adicionarItem("Item 1");
adicionarItem("Item 2");
adicionarItem("Item 3");

console.log(lerItens()); // Mostra todos os itens: ["Item 1", "Item 2", "Item 3"]

atualizarItem(1, "Item 2 Atualizado");
console.log(lerItens()); // Mostra todos os itens após a atualização: ["Item 1", "Item 2 Atualizado", "Item 3"]

removerItem(0);
console.log(lerItens()); // Mostra todos os itens após a remoção: ["Item 2 Atualizado", "Item 3"]
