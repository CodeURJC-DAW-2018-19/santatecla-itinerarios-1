#!/usr/bin/env bash
.\gradlew bootJar
cp .\build\libs\santatecla.itinerarios-0.1.0.jar .\docker\app.jar
cd docker
docker-machine start default
docker build --tag=daw .
docker tag daw hellodalao/daw:fase3
docker push hellodalao/daw:fase3