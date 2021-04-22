FROM openjdk:8-jre-alpine
ENV APP_FILE customers-server-1.0.jar
ENV APP_HOME /usr/apps
ARG DB_URL
ENV DB_URL ${DB_URL}
ARG DB_USERNAME
ENV DB_USERNAME ${DB_USERNAME}
ARG DB_PASSWORD
ENV DB_PASSWORD ${DB_PASSWORD}
EXPOSE 8080
COPY target/$APP_FILE $APP_HOME/
WORKDIR $APP_HOME
ENTRYPOINT ["sh", "-c"]
CMD ["exec java -jar $APP_FILE --spring.datasource.url=$DB_URL --spring.datasource.username=$DB_USERNAME --spring.datasource.password=$DB_PASSWORD"]