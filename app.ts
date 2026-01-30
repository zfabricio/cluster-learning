import cluster from 'node:cluster';
import { cpus } from 'node:os';

const numCPUs: number = cpus().length;

if (cluster.isPrimary) {
  console.log(`[MASTER] Cluster em TS iniciado com ${numCPUs} CPUs.`);
  for (let i = 0; i < numCPUs; i++) cluster.fork();
} else {
  console.log(`[WORKER] Nó ${process.pid} operando.`);
  process.exit(0);
}