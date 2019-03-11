# JAVA 8 as BASE
FROM openjdk:8-jdk-alpine

# Working directory for docker image
WORKDIR /webapp

# Folder inside alpine
COPY ./app.jar app.jar

# Expose PORT
EXPOSE 443

# Start image
CMD ["java" ,"-jar"  ,"app.jar"]