# ========================
# 1. Build stage
# ========================
FROM amazoncorretto:21-alpine AS build

WORKDIR /app

COPY gradlew ./
COPY gradle ./gradle
COPY build.gradle settings.gradle ./

RUN ./gradlew dependencies --no-daemon || true

# Copiar el código fuente
COPY src ./src

# Construir el JAR (para Gradle)
RUN ./gradlew bootJar --no-daemon

# ========================
# 2. Run stage
# ========================
FROM amazoncorretto:21-alpine

RUN addgroup -S spring && adduser -S spring -G spring

WORKDIR /app
USER spring:spring

COPY --from=build /app/build/libs/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java","-jar","app.jar"]
