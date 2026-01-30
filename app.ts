import cluster from 'node:cluster';
import http from 'node:http';
import { cpus } from 'node:os';

if (cluster.isPrimary) {
  const numCPUs = cpus().length;
  console.log(`[MESTRE]: Cluster ativo com ${numCPUs} nós.`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`[MESTRE]: Operário ${worker.process.pid} offline. Reiniciando...`);
    cluster.fork();
  });
} else {
  http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      mensagem: "Cluster operacional!",
      operario_pid: process.pid,
      uptime: process.uptime()
    }));
  }).listen(8000);
}