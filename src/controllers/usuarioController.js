const service = require('../services/usuarioService');

const listarUsuarios = (req, res) => {
  const usuarios = service.listar();
  res.json(usuarios);
};

const buscarUsuarioPorId = (req, res) => {
  const usuario = service.buscarPorId(req.params.id);
  if (!usuario) {
    return res.status(404).json({ mensagem: "Usuário não encontrado" });
  }
  res.json(usuario);
};

const atualizarTotalmente = (req, res) => {
  const { nome, preco } = req.body;
  const atualizado = service.atualizarTotal(req.params.id, nome, preco);
  if (!atualizado) {
    return res.status(404).json({ mensagem: "Usuário não encontrado" });
  }
  res.json(atualizado);
};

const atualizarParcialmente = (req, res) => {
  const atualizado = service.atualizarParcial(req.params.id, req.body);
  if (!atualizado) {
    return res.status(404).json({ mensagem: "Usuário não encontrado" });
  }
  res.json(atualizado);
};

const deletarUsuario = (req, res) => {
  const removido = service.deletar(req.params.id);
  if (!removido) {
    return res.status(404).json({ mensagem: "Usuário não encontrado" });
  }
  res.status(204).send();
};

module.exports = {
  listarUsuarios,
  buscarUsuarioPorId,
  atualizarTotalmente,
  atualizarParcialmente,
  deletarUsuario
};