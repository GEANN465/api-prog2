let usuarios = [
  { id: 1, nome: "Ana Silva", preco: 0 },
  { id: 2, nome: "Carlos Souza", preco: 0 }
];

const listar = () => usuarios;

const buscarPorId = (id) => usuarios.find(u => u.id == id);

const atualizarTotal = (id, nome, preco) => {
  const index = usuarios.findIndex(u => u.id == id);
  if (index === -1) return null;
  usuarios[index] = { id: Number(id), nome, preco };
  return usuarios[index];
};

const atualizarParcial = (id, dados) => {
  const usuario = usuarios.find(u => u.id == id);
  if (!usuario) return null;
  if (dados.nome !== undefined) usuario.nome = dados.nome;
  if (dados.preco !== undefined) usuario.preco = dados.preco;
  return usuario;
};

const deletar = (id) => {
  const index = usuarios.findIndex(u => u.id == id);
  if (index === -1) return false;
  usuarios.splice(index, 1);
  return true;
};

module.exports = {
  listar,
  buscarPorId,
  atualizarTotal,
  atualizarParcial,
  deletar
};