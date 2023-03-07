FROM openjdk

WORKDIR /usr/lib
ADD ./target/api-0.0.1-SNAPSHOT.jar /usr/lib/api-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","api-0.0.1-SNAPSHOT.jar"]