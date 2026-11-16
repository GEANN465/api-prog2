const express = require('express');
const app = express();
const produtoRoutes = require('./src/routes/produtoRoutes');

app.use(express.json());

// Utilizando as rotas modularizadas
app.use('/', produtoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});