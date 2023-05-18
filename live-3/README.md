# Exercise 3

## 1 - Introduction
This exercise runs mysql, nginx and node without docker-compose, only using docker commands

### 1.1 Create network
`docker network create pfa-network`

### 1.2 Run MySQL
`docker build live-3/exercise-3/mysql -t pfa-mysql`
`docker run -d --network pfa-network --name pfa-mysql -v $(pwd)/db:/var/lib/mysql pfa-mysql`

### 1.3 Run Node
`docker build live-3/exercise-3/node -t pfa-node`
`docker run -d --network pfa-network --name pfa-node pfa-node`

### 1.3 Run Node
`docker build live-3/exercise-3/nginx -t pfa-nginx`
`docker run -d -p 8080:80 --network pfa-network --name pfa-nginx pfa-nginx`

### 1.4 Result
 On http://localhost:8080 URL will retrieve "Hello world"