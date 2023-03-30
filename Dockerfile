FROM openjdk:17-jdk-slim
COPY build/libs/demo-0.1.0.jar /app/demo-0.1.0.jar
WORKDIR /app
EXPOSE 8080
CMD ["java", "-jar", "demo-0.1.0.jar"]