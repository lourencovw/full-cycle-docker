# Run exercise 1
## cd exercisw1
## docker build -t exe1 .
## docker run -p 3000:3000 -d -v $(pwd):/usr/src/app exe1
## docker exec -it [container_id] node index.js