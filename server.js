const express = require('express');
const app = express();

// Configura a aplicação para receber dados no formato JSON
app.use(express.json());

// Vetor para armazenar os produtos cadastrados
const produtos = [];

// Variável para gerar automaticamente o ID a partir de 1
let proximoId = 1;

// 1. POST /produtos - Cadastrar um produto
app.post('/produtos', (req, res) => {
    const { nome, preco, quantidade } = req.body;

    const novoProduto = {
        id: proximoId++,
        nome,
        preco,
        quantidade
    };

    produtos.push(novoProduto);

    return res.status(201).json(novoProduto);
});

// 2. GET /produtos - Listar todos os produtos
app.get('/produtos', (req, res) => {
    return res.json(produtos);
});

// 3. GET /produtos/:id - Buscar um produto pelo ID
app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({ mensagem: "Produto não encontrado!" });
    }

    return res.json(produto);
});

// 4. PUT /produtos/:id - Atualizar todos os dados de um produto
app.put('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = produtos.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ mensagem: "Produto não encontrado!" });
    }

    const { nome, preco, quantidade } = req.body;

    produtos[index] = {
        id,
        nome,
        preco,
        quantidade
    };

    return res.json(produtos[index]);
});

// 5. PATCH /produtos/:id - Atualizar parcialmente um produto
app.patch('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({ mensagem: "Produto não encontrado!" });
    }

    const { nome, preco, quantidade } = req.body;

    if (nome !== undefined) produto.nome = nome;
    if (preco !== undefined) produto.preco = preco;
    if (quantidade !== undefined) produto.quantidade = quantidade;

    return res.json(produto);
});

// 6. DELETE /produtos/:id - Excluir um produto
app.delete('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = produtos.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ mensagem: "Produto não encontrado!" });
    }

    produtos.splice(index, 1);

    return res.json({ mensagem: "Produto excluído com sucesso!" });
});

// Servidor executando na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
