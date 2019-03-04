# JAVA 8 as BASE
FROM openjdk:8-jdk-alpine

# Working directory for docker image
WORKDIR /app

# Folder inside alpine
COPY ./build/libs/web-0.0.1-SNAPSHOT.jar app.jar

# Expose PORT
EXPOSE 8443

# Start image
ENTRYPOINT ["java", "-jar", "app.jar"]