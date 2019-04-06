#!/usr/bin/env bash
docker build --tag=daw .
docker tag daw hellodalao/daw:$VERSION
docker push hellodalao/daw:$VERSION
docker tag daw hellodalao/daw:latest
docker push hellodalao/daw:latest