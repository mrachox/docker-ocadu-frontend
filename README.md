# docker-ocadu-frontend

## Requirements + Installation 

#### Requirements
- Docker Desktop <= 4.32.0 - Mac [[https://docs.docker.com/get-started/get-docker/]]
- Docker Compose [[https://docs.docker.com/compose/]]
- Command line tools to speed things up

1. Make sure Docker Desktop is running
2. Clone the repo: [[https://github.com/mrachox/docker-ocadu-frontend]]
3. Within root directory, run on docker-commpose.yml:

```
docker-compose up
``` 

This will generate the endpoints to the `/dist` folder within the `/frontend` directory; each time this process will rebuild the static site. 

4. After `nuxt generate` runs, the `frontend` container will exit but `web` will persist (this is the nginx server), go to Docker Desktop and restart the container or open a new command and run:
```
docker-ocadu-frontend-web-1 
```
5. Navigate to: http://localhost/ and view the archived site