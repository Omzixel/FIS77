FROM node:22.13.0-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

FROM nginx:1.26.2-alpine

RUN rm -rf /etc/nginx/conf.d/*

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]
