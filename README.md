
# Full Cycle Docker 📝  
This repository is a summary of the docker course made by Full Cycle.

PS: in order do exit with "ctrl+c" you have to run "docker run" command with "--init -it"

PS2: Docker version 3 does not require anymore "network" statements, but you can set internal networks to connect to external docker-compose. Example:


```
services:
    nginx:
        blablabla:
            blablabla

        networks:
            - external-network-name
```