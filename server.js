const express = require('express');
const app = express();
const usuarioRoute = require('./src/routes/usuarioRoute');

app.use(express.json());

// Rota base para os usuários
app.use('/usuarios', usuarioRoute);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});