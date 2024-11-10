# Usa una imagen base de Java de AdoptOpenJDK
FROM eclipse-temurin:17-jdk AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo pom.xml, mvnw y el directorio .mvn
COPY pom.xml .
COPY mvnw .
COPY .mvn .mvn
COPY src ./src

# Asegúrate de que mvnw tenga permisos de ejecución
RUN chmod +x mvnw

# Descarga las dependencias y construye el proyecto
RUN ./mvnw clean package -DskipTests

# Usa una imagen base de Java para la ejecución
FROM eclipse-temurin:17-jdk

# Copia el archivo JAR generado desde la etapa de construcción
COPY --from=build /app/target/*.jar app.jar

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 8080

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "/app.jar"]