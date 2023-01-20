# frontend

1. yarn build-prod
2. cd build
3. aws s3 sync . s3://cas-react-development

# backend

## run the following steps on local repo

1. "docker build -t <new-image-name> ."
2. docker compose up -d
3. docker login (if not logged in)
4. docker tag <your-local-image-tag>:<tagname>  <your-account-name>/<your-repo-name>:<tagname>
5. docker push <your-account-name>/<your-repo-name>:<tagname>

## run the following steps on vm

1. sudo usermod -aG docker ubuntu (if you don't want to type sudo every time before running docker commands)
2. scp docker-compose.yml ubuntu@<ip>:
3. docker login (if not logged in)
4. docker compose pull
5. docker compose up --env-file envfile up -d