# First Stage Build Angular App
FROM node:11-alpine as node

WORKDIR /frontend

COPY ./webapp ./

RUN npm install
RUN npm run build

# Second Stage Build Jar
FROM gradle:4.10-jdk8-alpine as gradle

WORKDIR /backend

COPY --chown=gradle:gradle . .
COPY --chown=gradle:gradle --from=node /frontend/dist ./src/main/resources/static/app

USER root

RUN gradle bootJar
RUN cp ./build/libs/santatecla.itinerarios.jar ./app.jar

# JAVA 8 as BASE
FROM openjdk:8-alpine

# Set the working directory to
WORKDIR /web

# Folder inside alpine
RUN apk add --no-cache bash
COPY --from=gradle /backend/app.jar ./
COPY ./wait-for-it.sh ./
RUN chmod +x ./wait-for-it.sh

# Make port 8443 available to the world outside this container
EXPOSE 8443

ENTRYPOINT ["./wait-for-it.sh", "db:3306", "--"]

# Start image
CMD ["java" , "-jar", "app.jar"]