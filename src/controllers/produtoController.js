let produtos = [
  { id: 1, nome: "Notebook", preco: 3500 },
  { id: 2, nome: "Mouse", preco: 150 }
];

const listarProdutos = (req, res) => {
  res.json(produtos);
};

const buscarProdutoPorId = (req, res) => {
  const { id } = req.params;
  const produto = produtos.find(p => p.id == id);
  if (!produto) {
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  }
  res.json(produto);
};

const atualizarTotalmente = (req, res) => {
  const { id } = req.params;
  const { nome, preco } = req.body;
  const index = produtos.findIndex(p => p.id == id);
  
  if (index === -1) {
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  }

  produtos[index] = { id: Number(id), nome, preco };
  res.json(produtos[index]);
};

const atualizarParcialmente = (req, res) => {
  const { id } = req.params;
  const { nome, preco } = req.body;
  const produto = produtos.find(p => p.id == id);

  if (!produto) {
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  }

  if (nome !== undefined) produto.nome = nome;
  if (preco !== undefined) produto.preco = preco;

  res.json(produto);
};

const deletarProduto = (req, res) => {
  const { id } = req.params;
  const index = produtos.findIndex(p => p.id == id);

  if (index === -1) {
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  }

  produtos.splice(index, 1);
  res.status(204).send();
};

module.exports = {
  listarProdutos,
  buscarProdutoPorId,
  atualizarTotalmente,
  atualizarParcialmente,
  deletarProduto
};