# 🚀 Kubernetes Learning Cluster

Este projeto demonstra o ciclo completo de desenvolvimento moderno: containerização de uma aplicação **Node.js com TypeScript** e implantação em um cluster **Kubernetes (Kind)** local, com esteira de CI/CD via **GitHub Actions** e deploy automático no **Render**.

---

## 🔗 Links do Projeto

[![CI Kubernetes](https://github.com/zfabricio/cluster-learning/actions/workflows/main.yml/badge.svg)](https://github.com/zfabricio/cluster-learning/actions)
[![Link do App](https://img.shields.io/badge/Link-Live_Demo-brightgreen)](https://cluster-learning.onrender.com)

> **Acesse o app online:** [https://cluster-learning.onrender.com](https://cluster-learning.onrender.com)

---

## 🛠️ Tecnologias Utilizadas

* **Runtime:** Node.js 20 & TypeScript
* **Containerização:** Docker (Imagens otimizadas)
* **Orquestração:** Kubernetes (K8s)
* **Cluster Local:** Kind (Kubernetes in Docker)
* **CI/CD:** GitHub Actions (Automação de builds e testes)
* **Cloud Hosting:** Render (Deploy de produção)

---

## 📋 Pré-requisitos

Para rodar este projeto na sua máquina Linux, você precisará de:
* [Docker](https://docs.docker.com/engine/install/) instalado e rodando.
* [Kind](https://kind.sigs.k8s.io/docs/user/quick-start/#installation) para criar o cluster local.
* [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/) para gerenciar o cluster.

---

## 🚀 Como Rodar Localmente

### 1. Preparar o Cluster
Crie o cluster de teste usando o Kind:
```bash
kind create cluster --name cluster-teste
