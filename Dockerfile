FROM node:20-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g tsx
COPY . .
EXPOSE 3000
CMD ["tsx", "app.ts"]