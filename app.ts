import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Meu Cluster Kubernetes</title>
        <style>
          body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background: #0f172a; color: white; margin: 0; }
          .card { background: #1e293b; padding: 2rem; border-radius: 1rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5); text-align: center; border: 1px solid #334155; }
          h1 { color: #38bdf8; margin-bottom: 0.5rem; }
          p { color: #94a3b8; }
          .status { display: inline-block; padding: 0.5rem 1rem; background: #065f46; color: #34d399; border-radius: 2rem; font-weight: bold; font-size: 0.8rem; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>🚀 App Rodando com Sucesso!</h1>
          <p>Este projeto foi implantado via <strong>GitHub Actions</strong> e <strong>Kubernetes</strong>.</p>
          <div class="status">● SISTEMA OPERACIONAL</div>
          <p style="margin-top: 20px; font-size: 0.7rem; color: #64748b;">Host: ${process.env.HOSTNAME || 'Local Container'}</p>
        </div>
      </body>
    </html>
  `);
});


app.listen(Number(port), '0.0.0.0', () => {
  console.log(`Servidor bombando na porta ${port}`);
});