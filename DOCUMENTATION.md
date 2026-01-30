# 📖 Documentação Técnica: Cluster Learning

Esta documentação detalha a arquitetura de microserviços e a esteira de CI/CD (Integração e Entrega Contínua) utilizada neste projeto.

---

## 🏗️ 1. Arquitetura do Sistema

O projeto foi desenhado para ser **Cloud Native**, o que significa que ele foi pensado desde o início para rodar dentro de containers orquestrados.



### Componentes Principais:
* **Runtime:** Node.js 20 (TypeScript) utilizando `tsx` para execução ágil.
* **Containerização:** Docker (Imagem base `node:20-slim` para menor consumo de disco).
* **Orquestração:** Kubernetes (K8s) com gerenciamento de recursos (CPU/RAM).
* **Infraestrutura Local:** Kind (Kubernetes in Docker).

---

## 🛠️ 2. O Manifesto Kubernetes (Deployment & Service)

Para garantir a estabilidade do app, configuramos limites rigorosos no arquivo `k8s-deployment.yaml`:

* **Memory Limits (512Mi):** Evita que o processo Node.js consuma toda a RAM do nó (Prevenção de `OOMKilled`).
* **Self-Healing:** O Kubernetes monitora o Pod; se o processo travar, o K8s reinicia o container automaticamente.
* **Service (Port 80):** Atua como um balanceador de carga interno, direcionando o tráfego para a porta `3000` do container.

---

## 🤖 3. Esteira de Automação (CI/CD)

A cada alteração no código enviada ao GitHub, o **GitHub Actions** executa os seguintes passos:

1.  **Build Automático:** Cria uma nova imagem Docker com o código atualizado.
2.  **Cluster Provisório:** Inicia um cluster Kubernetes temporário em ambiente de teste.
3.  **Sanity Check:** Realiza o deploy e aguarda o status `Ready`. Se o app não subir em 90 segundos, o build falha e o erro é reportado.



---

## 🌐 4. Acesso Público e Produção

Como o Kubernetes do GitHub é encerrado após os testes, o ambiente de **Produção** é mantido por um provedor de nuvem externa (Render/Railway), que fornece o link público permanente:

* **URL de Produção:** [SEU_LINK_AQUI]
* **Método de Deploy:** Git-based Deployment (Ocorre logo após o sucesso dos testes no GitHub).

---

## ⌨️ 5. Guia de Comandos para Desenvolvedores

### Logs e Debugging
Se precisar ver o que está acontecendo dentro do cluster no GitHub ou localmente:
```bash
# Ver eventos do sistema (erros de agendamento)
kubectl get events --sort-by='.lastTimestamp'

# Ver logs em tempo real
kubectl logs -l app=meu-app -f