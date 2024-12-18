# Usa l'immagine ufficiale di PHP con Apache
FROM php:8.0-apache

# Copia i tuoi file nella cartella root del server
COPY . /var/www/html/

# Esponi la porta 80 per accedere alla calcolatrice
EXPOSE 80
