.\gradlew bootJar
copy .\build\libs\santatecla.itinerarios-0.1.0.jar .\docker\app.jar
cd docker
docker-compose up