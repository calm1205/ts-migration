FROM node:22-slim
RUN apt-get update
RUN apt-get install -y \
    git