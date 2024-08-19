# Проект Хакатона для Газпрома

## Технологический стек

* Python 3.12
* Django 5.1
* Django REST Framework 3.15.2
* PostgreSQL 16
* Docker

## Установка и запуск проекта локально

Чтобы развернуть проект локально необходимо выполнить следующие шаги:

Установить [Docker](https://docs.docker.com/get-docker/) и [Docker Compose](https://docs.docker.com/compose/install/).

Склонировать репозиторий:

```
git clone git@github.com:RocketCookie/hackathon-gazprom.git
```

* Перейти в папку `backend` - `cd backend`

* Создать файл `.env` на основе `.env.example` и заполнить его валидными данными.

Запустить приложение с помощью команды:

```
make run_app
```

## Миграция и статика

Выполните миграции и сбор статических файлов:

```
make migration_and_static
```

## Что реализовано?

* Доступ к общим API:
  * Платформы
  * Продукты
  * Сервисы
  * Команды
