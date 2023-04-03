FROM php:8.1-fpm

WORKDIR /var/www

RUN apt update -y && apt install -y nginx

COPY src .
COPY /docker/nginx/default /etc/nginx/sites-available/default

COPY entrypoint entrypoint
RUN chmod +x ./entrypoint
ENTRYPOINT ["./entrypoint"]

EXPOSE 8080
