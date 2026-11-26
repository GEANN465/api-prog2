const repository = require('../repositories/usuarioRepository');

const listar = () => repository.obterTodos();

const buscarPorId = (id) => repository.obterPorId(id);

const atualizarTotal = (id, nome, preco) => {
  return repository.atualizar(id, { nome, preco });
};

const atualizarParcial = (id, dados) => {
  const usuario = repository.obterPorId(id);
  if (!usuario) return null;
  
  const nomeAtualizado = dados.nome !== undefined ? dados.nome : usuario.nome;
  const precoAtualizado = dados.preco !== undefined ? dados.preco : usuario.preco;
  
  return repository.atualizar(id, { nome: nomeAtualizado, preco: precoAtualizado });
};

const deletar = (id) => {
  return repository.deletar(id);
};

module.exports = {
  listar,
  buscarPorId,
  atualizarTotal,
  atualizarParcial,
  deletar
};