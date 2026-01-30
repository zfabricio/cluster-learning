FROM node:20-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
# Instalamos o tsx para rodar o TS diretamente sem frescura de tipos no build
RUN npm install -g tsx
COPY . .
CMD ["tsx", "app.ts"]