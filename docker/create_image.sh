#!/usr/bin/env bash
chmod +x ./gradlew
./gradlew bootJar
cp ./build/libs/santatecla.itinerarios-1.0.0.jar ./docker/app.jar
cd docker
docker build --tag=daw .
docker tag daw hellodalao/daw:fase4
docker push hellodalao/daw:fase4