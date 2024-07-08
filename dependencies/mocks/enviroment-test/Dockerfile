FROM node:14-alpine

RUN npm install -g @mockoon/cli@2.1.0
COPY mockoon-environmentproxied.json ./mockoon-environmentproxied.json

# Do not run as root.
RUN adduser --shell /bin/sh --disabled-password --gecos "" mockoon
RUN chown -R mockoon ./mockoon-environmentproxied.json
USER mockoon

EXPOSE 7000

ENTRYPOINT ["mockoon-cli", "start", "--hostname", "0.0.0.0", "--daemon-off", "--data", "mockoon-environmentproxied.json", "--container"]

# Usage: docker run -p <host_port>:<container_port> mockoon-test