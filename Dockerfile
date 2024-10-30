FROM node:21

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

ENV NODE_ENV=production
ENV PORT=3000

CMD ["npm", "run", "start"]