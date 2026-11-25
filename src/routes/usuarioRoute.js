const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuarioController');

router.get('/', controller.listarUsuarios);
router.get('/:id', controller.buscarUsuarioPorId);
router.put('/:id', controller.atualizarTotalmente);
router.patch('/:id', controller.atualizarParcialmente);
router.delete('/:id', controller.deletarUsuario);

module.exports = router;