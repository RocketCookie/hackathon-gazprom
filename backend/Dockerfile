FROM python:3.12-slim

RUN apt-get update &&\
    apt-get upgrade -y &&\
    apt-get clean &&\
    apt-get autoremove -y &&\
    rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY requirements-docker.txt .

RUN pip install -U pip &&\
    pip install --no-cache-dir -r requirements-docker.txt

COPY . .
