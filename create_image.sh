#!/usr/bin/env bash
docker build --tag=daw .
docker tag daw hellodalao/daw:$VERSION
docker push hellodalao/daw:$VERSION