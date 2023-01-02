FROM alpine:3.15 AS alpine-npm

WORKDIR /var/www/

# Arguments
ARG user=lucas
ARG uid=1000

RUN apk --update-cache add \
    bash \
    npm \
    nodejs; \
    set -x && \
    adduser -D -u 1000 -s /bin/bash ${user} -G www-data && \
    chown -R ${user}:www-data . && \
    mkdir -p /var/www/html && chown ${user}:www-data /var/www/html && \
    find . -type f | xargs -I{} chmod -v 644 {} && \
    find . -type d | xargs -I{} chmod -v 755 {};

STOPSIGNAL SIGQUIT

#ENTRYPOINT [ "npm", "install" ]

FROM alpine-npm

WORKDIR /var/www/

#CMD ["npm","run", "dev"]

USER ${user}
