# Проект Хакатона для Газпрома

## Команда

| Команда           | Роль     |
|-------------------|----------|
| Дмитрий Бельков   | PM       |
| Олег Чистов       | PdM      |
| Ульяна Вилкова    | Дизайнер |
| Максим Долгов     | Дизайнер |
| Ольга Литова      | Дизайнер |
| Дарья Никитина    | Дизайнер |
| Мария Перадзе     | Дизайнер |
| Елена Нестерова   | SA       |
| Александр Зеленин | SA       |
| Настя Гаврилова   | BA       |
| Олеся Хлебникова  | BA       |
| Богдан Сутужко    | Фронт    |
| Олег Гуров        | Бекендер |
| Вячеслав Ульянов  | QA       |

## Технологический стек

### Используемые технологии

- [Python 3.12](https://docs.python.org/3.12/)
- [Django 5.1](https://docs.djangoproject.com/en/5.1/)
- [Django REST Framework 3.15.2](https://www.django-rest-framework.org/)
- [PostgreSQL 16](https://www.postgresql.org/docs/16/)
- [Docker](https://docs.docker.com/)
- [Swagger](http://localhost:8000/swagger/)

## Установка и запуск проекта локально

Чтобы развернуть проект локально, необходимо выполнить следующие шаги:

1. Установить [Docker](https://docs.docker.com/get-docker/) и [Docker Compose](https://docs.docker.com/compose/install/).

2. Склонировать репозиторий:

   ```bash
   git clone git@github.com:RocketCookie/hackathon-gazprom.git
   ```

3. Перейти в папку backend:

    ```bash
    cd backend
    ```

4. Создать файл .env на основе .env.example и заполнить его валидными данными.

5. Запустить приложение с помощью команды:

    ```bash
    make run_app
    ```

## Миграция и статика

Выполните миграции и сбор статических файлов:

  ```bash
  make migration_and_static
  ```

## Swagger

Swagger UI доступен после запуска проекта:

- [Swagger UI](http://localhost:8000/swagger/)

## Что реализовано?
  * Доступ к общим API:
    * Платформы
    * Продукты
    * Сервисы
    * Команды
