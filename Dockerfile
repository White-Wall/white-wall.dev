FROM node:alpine

RUN apk --no-cache add unzip bzip2 curl && \
    curl -L -o /tmp/master.zip https://github.com/White-Wall/white-wall.dev/archive/master.zip && \
    unzip /tmp/master.zip -d /tmp && \
    rm /tmp/master.zip && \
    mv tmp/white-wall.dev-master /var/factor && \
    cd /var/factor && \
    yarn install && \
    yarn factor build && \
    chown -R node:node /var/factor

USER node
WORKDIR /var/factor

EXPOSE 3000
CMD ["yarn", "factor", "serve"]
