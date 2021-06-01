# base image
FROM python:3.8.0-alpine

# new
# install dependencies
RUN apk update && \
    apk add --virtual build-deps gcc g++ python-dev musl-dev && \
    apk add postgresql-dev && \
    apk add netcat-openbsd

# set working directory
WORKDIR /app

# add and install requirements
RUN pip install --upgrade pip
COPY ./requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

# add app
COPY . /app

# add entrypoint.sh
COPY ./entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh


# run server
CMD ["/app/entrypoint.sh"]