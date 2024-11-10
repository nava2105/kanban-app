# Kanban app
## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
## General Info
***
This is a project build in java whose purpose is to provide the user a kanban board to manage their projects.
## Technologies
***
A list of technologies used within the project:
using the version 3.12.0 and using flask as a web framework
* [Java](https://www.java.com/es/): Version 17
* [Spring Boot](https://spring.io/projects/spring-boot): Version 3.3.5
* [H2 Database](https://www.h2database.com/html/main.html)
* [Maven](https://maven.apache.org): Version 3.9.9
## Installation
***
There are two methods to install this project.
### Via GitHub
There is also two ways to install this project if you want to get it via GitHub.
#### Using Docker
Verify you are running Docker or Docker Desktop and open a terminal in the folder you want to install the application.

Copy the repository
```
git clone https://github.com/nava2105/kanban-app.git
```
Enter the directory
```
cd ../kanban-app
```
Build and run the container
```
docker-compose up --build
```
Open a browser and enter to
[http://localhost:8080](http://localhost:8080)
#### Not using Docker
Verify you are using Java version 17
```
java -version
```
Verify you have Maven installed
```
mvn -version
```
Copy the repository
```
git clone https://github.com/nava2105/kanban-app.git
```
Enter the directory
```
cd ../kanban-app
```
Compile the project directly form mvn
```
mvn spring-boot:run
```
Open a browser and enter to
[http://localhost:8080](http://localhost:8080)
### Via Docker-hub
Pull the image from Docker-hub
```
docker pull na4va4/kanban-board
```
Start a container from the image
```
docker run -p 8080:8080 na4va4/kanban-board
```
Open a browser and enter to
[http://localhost:8080](http://localhost:8080)
