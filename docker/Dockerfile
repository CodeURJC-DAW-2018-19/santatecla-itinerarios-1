# JAVA 8 as BASE
FROM openjdk:8-jdk-alpine

# Working directory for docker image
WORKDIR /webapp

# Folder inside alpine
COPY ./webapp/web-0.0.1-SNAPSHOT.jar app.jar

# Expose PORT
EXPOSE 8443

# Start image
CMD ["java" ,"-jar"  ,"app.jar"]