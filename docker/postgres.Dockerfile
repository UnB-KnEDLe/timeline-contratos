# base image
FROM postgres:11.2-alpine

# Set Workdir
WORKDIR /db

# Copy database files
COPY . /db