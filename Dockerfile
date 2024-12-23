ARG NODE_VERSION=22.11.0
ARG NPM_REGISTER=https://registry.npmjs.org
ARG BASE_URL=/vuepress-solid-template/

# Builder
FROM node:${NODE_VERSION}-bookworm AS builder
ARG NPM_REGISTER
WORKDIR /app
ENV NODE_OPTIONS=--max-old-space-size=4096

COPY package.json pnpm-lock.yaml ./

RUN npm -v \
    && npm config set registry $NPM_REGISTER \
    && npm install -g pnpm \
    && pnpm -v \
    && pnpm config set registry $NPM_REGISTER \
    && pnpm install

COPY . ./

RUN pnpm build

# Nginx Server
FROM nginx:1.27.3-alpine3.20-slim
ARG BASE_URL
WORKDIR /usr/share/nginx/html${BASE_URL}
COPY --from=builder /app/docs/.vuepress/dist ./
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
