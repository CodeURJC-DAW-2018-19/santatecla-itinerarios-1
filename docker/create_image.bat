call .\gradlew bootJar
copy .\build\libs\santatecla.itinerarios-0.1.0.jar .\docker\app.jar
cd docker
call docker-machine start default
call docker build --tag=daw .
call docker tag daw hellodalao/daw:fase3
call docker push hellodalao/daw:fase3