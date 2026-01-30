# 🚀 Kubernetes Learning Cluster

Este projeto demonstra como containerizar uma aplicação Node.js com TypeScript e implantá-la em um cluster **Kubernetes (Kind)** local, incluindo automação de CI/CD via **GitHub Actions**.

## 🛠️ Tecnologias Utilizadas
* **Node.js 20** & **TypeScript**
* **Docker**: Para criação da imagem do app.
* **Kubernetes (K8s)**: Orquestração dos containers.
* **Kind (Kubernetes in Docker)**: Ferramenta para rodar clusters locais.
* **GitHub Actions**: Automação de testes e deploy.

## 📋 Pré-requisitos
Antes de começar, você precisará ter instalado no seu Linux:
* [Docker](https://docs.docker.com/engine/install/)
* [Kind](https://kind.sigs.k8s.io/docs/user/quick-start/#installation)
* [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)

## 🚀 Como Rodar Localmente

### 1. Preparar o Cluster
Crie o cluster de teste usando o Kind:
```bash
kind create cluster --name cluster-teste