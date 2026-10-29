
# Use the lightweight official Nginx image
FROM nginx:alpine

# Add project metadata
LABEL org.opencontainers.image.title="Football Vault"
LABEL org.opencontainers.image.description="Football players, history, rivalries and awards archive"

# Copy the website into Nginx's default web directory
COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY app.js /usr/share/nginx/html/app.js

# Include all local website images
COPY assets/ /usr/share/nginx/html/assets/

# Nginx listens on port 80 inside the container
EXPOSE 80
