FROM nginx:1.15-alpine
COPY dist /www
COPY conf /etc/nginx/conf.d
WORKDIR /www
