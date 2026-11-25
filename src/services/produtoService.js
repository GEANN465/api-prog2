let produtos = [
  { id: 1, nome: "Notebook", preco: 3500 },
  { id: 2, nome: "Mouse", preco: 150 }
];

const listar = () => produtos;

const buscarPorId = (id) => produtos.find(p => p.id == id);

const atualizarTotal = (id, nome, preco) => {
  const index = produtos.findIndex(p => p.id == id);
  if (index === -1) return null;
  produtos[index] = { id: Number(id), nome, preco };
  return produtos[index];
};

const atualizarParcial = (id, dados) => {
  const produto = produtos.find(p => p.id == id);
  if (!produto) return null;
  if (dados.nome !== undefined) produto.nome = dados.nome;
  if (dados.preco !== undefined) produto.preco = dados.preco;
  return produto;
};

const deletar = (id) => {
  const index = produtos.findIndex(p => p.id == id);
  if (index === -1) return false;
  produtos.splice(index, 1);
  return true;
};

module.exports = {
  listar,
  buscarPorId,
  atualizarTotal,
  atualizarParcial,
  deletar
};