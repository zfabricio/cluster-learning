import cluster from 'node:cluster';
import { cpus } from 'node:os';

if (cluster.isPrimary) {
  const totalCores = cpus().length;
  console.log(`MESTRE: Gerindo um cluster de ${totalCores} núcleos.`);

  for (let i = 0; i < totalCores; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`Operário ${worker.process.pid} terminou.`);
  });
} else {
  
  const inicio = Date.now();
  console.log(`OPERÁRIO ${process.pid}: Iniciando cálculo pesado...`);
  
  let soma = 0;
  for (let i = 0; i < 1e7; i++) { soma += i; }

  console.log(`OPERÁRIO ${process.pid}: Finalizado em ${Date.now() - inicio}ms`);
  process.exit();
}