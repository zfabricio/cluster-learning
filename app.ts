import cluster from 'node:cluster';
import http from 'node:http';
import { cpus } from 'node:os';

if (cluster.isPrimary) {
  const numCPUs = cpus().length;
  console.log(`[MESTRE]: Cluster iniciado com ${numCPUs} operários.`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`[MESTRE]: Operário ${worker.process.pid} terminou. Reiniciando...`);
    cluster.fork();
  });
} else {
  http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Olá do Cluster! Respondido pelo PID: ${process.pid}\n`);
    console.log(`[WORKER ${process.pid}]: Pedido recebido!`);
  }).listen(8000);

  console.log(`[WORKER]: Operário ${process.pid} online na porta 8000.`);
}