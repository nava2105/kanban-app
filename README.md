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
* [Maven](https://maven.apache.org)
## Installation
***
There are two methods to install this project.
### Via GitHub
There is also two ways to install this project if you want to get it via GitHub.
#### Using Docker
Verify you are running Docker or Docker Desktop and open a terminal in the folder you want to install the application.

Copy the repository
```
git clone https://github.com/nava2105/transcript_pdf.git
```
Enter the directory
```
cd ../transcriptor
```
Build and run the container
```
docker-compose up --build
```
Open a browser and enter to
[http://localhost:5000](http://localhost:5000)
#### Not using Docker
Verify you are python version 3.12.0
```
python --version
```
Copy the repository
```
git clone https://github.com/nava2105/transcript_pdf.git
```
Enter the directory
```
cd ../transcriptor
```
Create a virtual environment
```
python -m venv .venv
```
Activate your virtual environment
* In Windows
```
.venv\Scripts\activate
```
In macOS or Linux
```
source .venv/bin/activate
```
Build the dependencies
```
pip install requirements.txt -r
```
Run front.py file
* By using python command
```
python front.py
```
* If you are using Python 3 and python points to Python 2 on your system, use python3 instead:
```
python3 front.py
```
Open a browser and enter to
[http://localhost:5000](http://localhost:5000)
### Via Docker-hub
Pull the image from Docker-hub
```
docker pull na4va4/transcriptor
```
Start a container from the image
```
docker run -p 5000:5000 na4va4/transcriptor
```
Open a browser and enter to
[http://localhost:5000](http://localhost:5000)
