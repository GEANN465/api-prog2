const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtoController');

router.get('/produtos', controller.listarProdutos);
router.get('/produtos/:id', controller.buscarProdutoPorId);
router.put('/produtos/:id', controller.atualizarTotalmente);
router.patch('/produtos/:id', controller.atualizarParcialmente);
router.delete('/produtos/:id', controller.deletarProduto);

module.exports = router;