FROM maven:3.5.4-jdk-8-alpine AS builder
WORKDIR /app
ADD pom.xml .
RUN mvn verify clean --fail-never
COPY . .
RUN mvn clean install -DskipTests

FROM openjdk:8-alpine

EXPOSE 8080
COPY --from=builder /app/target/microservices-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]