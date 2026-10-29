# Football Vault — A Dockerized Football Website

## 1. Project Overview

Football Vault is a football-themed website developed to demonstrate the deployment of a static web application using Docker and Nginx.

The website presents football players, legends, Ballon d'Or history, iconic rivalries, memorable seasons, football history, competitions, and other football-related content through an interactive user interface.

The main objective of this mini-project is to understand how a web application can be packaged into a Docker image and deployed using a Docker container.

## 2. Aim

To develop and deploy a football-related website using Docker and Nginx, demonstrating Docker image creation, containerization, port mapping, container management, and image distribution through Docker Hub.

## 3. Technologies Used

* **HTML5:** Structure of the website.
* **CSS3:** Styling, layout, responsiveness, and visual design.
* **JavaScript:** Interactive website functionality.
* **Nginx:** Web server used to serve the static website.
* **Docker:** Used to build images and run containers.
* **Docker Hub:** Used to store and distribute the Docker image.
* **PowerShell:** Used to execute Docker commands on Windows.

## 4. System Requirements

* Windows computer
* Docker Desktop installed and running
* PowerShell or another compatible terminal
* Web browser
* Internet connection for downloading the base image, pulling images, and publishing to Docker Hub

## 5. Project Structure

```text
football-vault/
├── index.html
├── style.css
├── app.js
├── Dockerfile
├── README.md
└── assets/
    └── images/
        └── football image files
```

## 6. Architecture

The project follows this deployment workflow:

1. Develop the website using HTML, CSS, JavaScript, and image assets.
2. Create a Dockerfile specifying the Nginx base image and website files.
3. Build a Docker image named `football-vault:1.0`.
4. Create and run a container from the image.
5. Map host port `8081` to container port `80`.
6. Access the website through a web browser.
7. Publish the image to Docker Hub for distribution.

## 7. Dockerfile

```dockerfile
FROM nginx:alpine

LABEL org.opencontainers.image.title="Football Vault"
LABEL org.opencontainers.image.description="Football players, history, rivalries and awards archive"

COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY app.js /usr/share/nginx/html/app.js
COPY assets/ /usr/share/nginx/html/assets/

EXPOSE 80
```

### Dockerfile Explanation

* `FROM nginx:alpine` selects the lightweight Nginx base image.
* `LABEL` adds descriptive metadata to the image.
* `COPY` transfers website files and local assets into Nginx's web directory.
* `EXPOSE 80` documents the port on which Nginx serves the website inside the container.

## 8. Implementation Procedure

### Step 1: Prepare the website

Create the website files and organize local images inside the `assets/images/` directory.

### Step 2: Create the Dockerfile

Add the Dockerfile to the root of the project directory.

### Step 3: Build the image

```powershell
docker build -t football-vault:1.0 .
```

### Step 4: Run the container

```powershell
docker run -d --name football-vault-container -p 127.0.0.1:8081:80 football-vault:1.0
```

### Step 5: Access the website

Open the following address in a browser:

`http://localhost:8081`

### Step 6: Verify the deployment

```powershell
docker ps
curl.exe -I http://localhost:8081
docker logs football-vault-container
```

### Step 7: Publish the image

Tag and push the image to your Docker Hub repository using the appropriate account username.

```powershell
docker login
docker tag football-vault:1.0 YOUR_DOCKERHUB_USERNAME/football-vault:1.0
docker push YOUR_DOCKERHUB_USERNAME/football-vault:1.0
```

Replace `YOUR_DOCKERHUB_USERNAME` with your actual Docker Hub username.

## 9. Testing and Results

The deployment was tested by checking the running container, accessing the website through the mapped port, verifying the HTTP response, inspecting container logs, and practising container stop and restart operations.

The website was successfully served by Nginx inside a Docker container.

The Docker image was also published to Docker Hub as part of the image distribution stage.

## 10. Advantages

* Consistent deployment using a packaged Docker image.
* Lightweight web serving using Nginx.
* Isolation of the website process within a container.
* Easy container lifecycle management.
* Ability to distribute the image through Docker Hub.
* Reduced need to configure a web server manually on another computer.

## 11. Limitations

* The current application is a static website.
* No backend API or database is included.
* Some externally hosted images require an internet connection.
* The current deployment is local unless separately hosted on a public server.

## 12. Conclusion

Football Vault demonstrates the practical use of Docker for containerizing and deploying a static web application. By combining HTML, CSS, JavaScript, Nginx, and Docker, the project illustrates the process of creating a Docker image, running a container, mapping network ports, testing the deployment, and distributing the image through Docker Hub.

The project provides a foundation for further development, including backend integration, persistent data storage, automated deployment, and public hosting.
