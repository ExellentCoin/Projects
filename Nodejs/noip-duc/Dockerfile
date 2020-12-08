FROM node

ENV USERNAME=<USERNAME> \
    PASSWORD=<PASSWORD> \
    HOSTNAME=<HOSTNAME>

RUN mkdir /home/noip-duc

COPY ./app /home/noip-duc

CMD ["node", "/home/noip-duc/src/app.js"]