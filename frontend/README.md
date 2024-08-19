# Проект ХАКАТОН+. Задача Газпром

---

[Ссылка на задеплоенный Frontend](https://rocketcookie.github.io/hackathon-gazprom/)

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

## Как запустить проект?

- Клонировать репозиторий - `git clone git@github.com:RocketCookie/hackathon-gazprom.git`
- Перейти в папку `frontend` - `cd frontend`
- Установить зависимости - `npm install`
- Развернуть проект в режиме разработки - `npm run dev`

## Как сбилдить проект?

- Клонировать репозиторий - `git clone git@github.com:RocketCookie/hackathon-gazprom.git`
- Перейти в папку `frontend` - `cd frontend`
- Установить зависимости - `npm install`
- Сбилдить проект - `npm run build`

## Что реализовано?

- Экраны:
    - логина
    - регистрации
    - платформы
    - детальная страница платформы
    - продуктов
    - сервисов
    - команд
    - сотрудников

Весь фронт использует mock'овые данные. Связь с бэкендом не реализована.

## Роуты готовых экранов

- [Страница логина](http://localhost:5173/login)
- [Страница регистрации](http://localhost:5173/register)
- [Страница платформ](http://localhost:5173/platforms)
- [Страница детального просмотра платформы](http://localhost:5173/register/1)
- [Страница продуктов](http://localhost:5173/products)
- [Страница сервисов](http://localhost:5173/services)
- [Страница команд](http://localhost:5173/teams)
- [Страница сотрудников](http://localhost:5173/employees)

## Стек

- [HTML5][tech-html]
- [CSS3][tech-css]
- [JavaScript][tech-js]
- [TypeScript][tech-ts]
- [React][tech-react]
- [React router][tech-react-router]
- [Библиотека компонентов Ant design][tech-antd]
- [Библиотека для работы с формами Formik][tech-formik]
- [Библиотека для работы с валидацией Yup][tech-yup]
- [Сборщик проекта - Vite][tech-vite]

&copy; Автор - [Сутужко Богдан][author-github]

[//]: # 'Общие переменные автора'

[author-github]: https://github.com/julfy-bs

[//]: # 'Переменные используемых технологий'

[tech-html]: https://html5.org/

[tech-css]: https://www.w3.org/Style/CSS/Overview.en.html

[tech-js]: https://www.javascript.com/

[tech-ts]: https://www.typescriptlang.org/

[tech-react]: https://react.dev/

[tech-react-router]: https://reactrouter.com/en/main

[tech-antd]: https://ant.design/

[tech-formik]: https://formik.org/

[tech-yup]: https://yup-docs.vercel.app/

[tech-vite]: https://vitejs.dev/
