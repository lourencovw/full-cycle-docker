# Run exercise 1
## cd exercise1
## docker build -t exe1 .
## docker run -p 3000:3000 -d -v $(pwd):/usr/src/app exe1 node .