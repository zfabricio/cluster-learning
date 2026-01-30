import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Olá do Kubernetes!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});