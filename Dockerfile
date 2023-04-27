## Backend
FROM node:16-bullseye

WORKDIR /home/node/app

RUN apt update && apt install -y gnupg && \
    curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
    gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
    --dearmor && \
    echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg] http://repo.mongodb.org/apt/debian bullseye/mongodb-org/6.0 main" | tee /etc/apt/sources.list.d/mongodb-org-6.0.list && \
    apt update && apt-get install -y mongodb-org

RUN mkdir /data && \
    mkdir /data/db && \
    mkdir /data/log && \
    chown -R node /data

COPY . .

RUN npm install

ENV NO_MONGO_AUTH=true

CMD mongod --fork --logpath /dev/null && npm run start
