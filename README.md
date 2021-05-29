# node-passporjs

## Use Redis Docker Image

- Install docker and docker compose
- Start redis by command `docker-compose up -d`
- Stop redis by command `docker-compose down`

## Start project
- Copy file `.env.example` to `.env`
- Update value for `FACEBOOK_APP_ID` and `FACBOOK_SECRET_KEY`
- Update value for `REDIS_HOST`, `REDIS_PORT` and `REDIS_PASSWORD` if you not use Redis Docker Image in `docker-compose.yml`

## Urls
- Login facebook with link `http://localhost:8888/auth/facebook`
- Login success with link `http://localhost:8888/success#_=`
- Login fail with link `http://localhost:8888/fail`
- Get profile with link `http://localhost:8888/profile`