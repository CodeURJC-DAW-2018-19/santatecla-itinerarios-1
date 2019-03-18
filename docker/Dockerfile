# JAVA 8 as BASE
FROM openjdk:8-alpine

# Set the working directory to
WORKDIR ./

# Folder inside alpine
RUN apk add --no-cache bash
COPY ./app.jar ./wait-for-it.sh ./
RUN chmod +x ./wait-for-it.sh

# Make port 8443 available to the world outside this container
EXPOSE 8443

ENTRYPOINT ["./wait-for-it.sh", "db:3306", "--"]

# Start image
CMD ["java" , "-jar", "app.jar"]