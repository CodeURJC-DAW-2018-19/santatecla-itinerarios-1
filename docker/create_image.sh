#!/usr/bin/env bash
chmod +x ./gradlew
./gradlew -Pversion=$VERSION bootJar
cp ./build/libs/santatecla.itinerarios-$VERSION.jar ./docker/app.jar
cd docker
docker build --tag=daw .
docker tag daw hellodalao/daw:$VERSION
docker push hellodalao/daw:$VERSION