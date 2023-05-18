from mysql:5.7

ENV MYSQL_ROOT_PASSWORD=root

COPY ./init.sql /data/application/init.sql

CMD ["--init-file", "/data/application/init.sql"]

EXPOSE 3006

## docker run --network pfa-network -v $(pwd)/db:/var/lib/mysql -d -p 3006:3006 db