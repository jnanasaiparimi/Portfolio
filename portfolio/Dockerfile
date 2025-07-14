# ---------- Build Stage ----------
FROM maven:3.9.6-eclipse-temurin-21 AS build

# Set working directory inside the container
WORKDIR /app

# Copy the pom.xml and download dependencies first (leverages Docker layer cache)
COPY pom.xml .

# Download dependencies
RUN mvn dependency:go-offline -B

# Copy source files
COPY src ./src

# Build the application
RUN mvn clean package -DskipTests

# ---------- Runtime Stage ----------
FROM eclipse-temurin:21-jdk-alpine

# Set working directory
WORKDIR /app

# Expose the port (Render will inject this as an ENV)
EXPOSE 8080

# Copy the built jar from the build stage
COPY --from=build /app/target/portfolio-0.0.1-SNAPSHOT.jar app.jar

# Tell Spring Boot to use the port Render provides
ENV PORT=8080
ENV JAVA_OPTS=""

# Run the app
CMD ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]
