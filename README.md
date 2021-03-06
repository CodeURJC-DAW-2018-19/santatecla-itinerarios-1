# Gestor de Itinerarios

## Description
We must create a website, a "Gestor de Itinearios", the development of this work will be evaluated by phases, being the distribution of them as follow:
* Phase 0: Form the development team (Not evaluable)
* Phase 1: Layout of pages with HTML and CSS Bootstrap (Not evaluable)
* Phase 2: Implementation of the web with HTML generated in server and AJAX.
* Phase 3: Incorporation of REST API to the web application and deployment with docker
* Phase 4: Implementation of the web with SPA architecture

## Team Members

Name | University email | GitHub Account
------------ | ------------------------- | -------------
ShuXiang Gao | s.gao.2016@alumnos.urjc.es | vitaminac
ZiYao Zhan | z.zhan.2016@alumnos.urjc.es | 13757851340x
Jorge José Vega Espinar | jj.vega.2016@alumnos.urjc.es | cobramarley
Raúl Colino Singh | r.colinos.2016@alumnos.urjc.es | imRCS
Rubén Zarapuz Juárez | r.zarapuz.2016@alumnos.urjc.es | Ruben98Z

**Our Trello:** [Link to the board](https://trello.com/invite/b/CFMjhg2A/1ff5190ce7e6a0f923e44a404e82d269/daw-g8)

# Start-up of the application
For running the application, you need to download this folder, unzip them and run the application with some development environment wich one have implemented the libraries that Spring needs, later you musthave a BBDD with port 80 (default), when your BBDD server is up, just launch the application and open an URL like https://localhost OR https://localhost/api if you want to access to the API.

The project must be imported like a new gradle project.
You must create a database with the following parameters (if you dont will use Docker).

# MySQL Configuration
## Start up
To run the application using docker compose you have to go to docker directory using your terminal and run the command: docker-compose up
Then the images will be created and the containers will be up

## Connections Parameters
### Database name
daw

### Username
daw

### Password
daw_grupo_7

## Tasks
### Phase 0:
- [x] Form a team

### Phase 1:
- [x] Distribute tasks to each one in trello
- [x] [Phase 1 Requirements] (https://docs.google.com/document/d/1cW3UCiqWrq4Fk3JF0MOUjiyEdfOuw9rs257IqyN8ILs/edit?usp=sharing)
- [x] Upload code to GitHub
- [x] Merge all the work

### Phase 2:
- [x] Complete functionality for visitors
- [x] Complete functionality for students
- [x] Complete functionality for the teacher
- [ ] The application contains errors
- [x] Lists of more than 10 items are paged with "load more" (AJAX)
- [x] Image upload is allowed
- [x] The application is accessible by https
- [x] There is access control by role and URL (students can not access administrator URLs)
- [x] The code and comments are in English
- [x] The code has an appropriate format and style?
- [x] The error page when you put an incorrect URL has the same style as the others?
- [x] The documentation contains a navigation diagram with updated screenshots
- [x] Does the documentation contain a diagram with the entities in the database?
- [x] The documentation contains a diagram with the classes (drivers, services, repositories, etc ...)
- [x] The documentation contains a section with instructions on how to configure the development environment and how to develop the application

# Views in Phase 1 (Screenshots)
![picture alt](https://i.ibb.co/NFDCJDR/Fase1.jpg "Descripción de las vistas")
![picture alt](https://i.ibb.co/txTDbb4/Captura-de-pantalla-2019-02-05-a-las-0-18-42.png "Itinerarios")
![picture alt](https://i.ibb.co/vP7mKps/index.png "Unidades")
![picture alt](https://i.ibb.co/Jr31JVY/inicial.png "Inicio")
![picture alt](https://i.ibb.co/pKcj9yD/unidades.png "Login")



# Views in Phase 2 (Screenshots)

# Navigation diagram
![Web navigation diagram](http://i66.tinypic.com/11lis5c.png)

## Overview

![Overview](doc/overview.png)

## Unit

![Unit](doc/unit.png)

## Itinerary

![Itinerary](doc/itinerary.png)

## Login

![Login](doc/login.png)

## Register

![Register](doc/register.png)

## Error Page

![Error Page](doc/error_page.png)

# Entity diagram

![Database Diagram](https://i.ibb.co/wSG5gmS/Untitled-Diagram.png)


# Phase 3:
## Doc about API Rest
Documentation about API into URL: https://github.com/CodeURJC-DAW-2018-19/santatecla-itinerarios-1/blob/master/API.md

## How to install docker

- Go to docker website
- Depending on your system, download docker toolbox
- Select in which folder will be installed docker toolbox
- In settings, select components you need to install
- Install it and docker will be ready to use
- Now you can go to Docker folder and exec "docker-compose up" for have the system ready to work instead all we must do before.

# Phase 4

## Configure development context

install [node.js](https://nodejs.org/en/)

cd into folder webapp run the following commands.

    npm install
    npm install -g @angular/cli

run Spring backend

run the angular dev server with

    npm start

## Angular diagram

![Angular diagram](doc/diagramaAngular.png)

## Deployment

    docker run hellodalo/daw

## Youtube video

    https://www.youtube.com/watch?v=aJt8WBUOVs8&t=43s

# Testing

    We have implemented a series of automatic tests with selenium, using the driver for Chrome, so we have tested the different functionalities of our interface. For example:
    
    Logout
    Login Teacher
    Add unit
    Delete unit
    Add itinerary
    Enter to Itinerary
    Create View in Itinerary
    Looking and Creating Ficha
    Upping IMG to ficha
    Removing Ficha
    
For probe this test suite you must install Katalon Recorder and open "DAWTest.html" there.
