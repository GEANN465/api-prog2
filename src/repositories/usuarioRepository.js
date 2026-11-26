let usuarios = [
  { id: 1, nome: "Ana Silva", preco: 0 },
  { id: 2, nome: "Carlos Souza", preco: 0 }
];

const obterTodos = () => usuarios;

const obterPorId = (id) => usuarios.find(u => u.id == id);

const salvar = (novoUsuario) => {
  usuarios.push(novoUsuario);
  return novoUsuario;
};

const atualizar = (id, dadosAtualizados) => {
  const index = usuarios.findIndex(u => u.id == id);
  if (index === -1) return null;
  usuarios[index] = { id: Number(id), ...dadosAtualizados };
  return usuarios[index];
};

const deletar = (id) => {
  const index = usuarios.findIndex(u => u.id == id);
  if (index === -1) return false;
  usuarios.splice(index, 1);
  return true;
};

module.exports = {
  obterTodos,
  obterPorId,
  salvar,
  atualizar,
  deletar
};