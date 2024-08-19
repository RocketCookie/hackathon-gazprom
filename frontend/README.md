# Проект ХАКАТОН+. Задача Газпром

---

## Команда

| команда           | роль     | telegram-аккаунт | Гугл почта                        | Часовой пояс |
|-------------------|----------|------------------|-----------------------------------|--------------|
| Дмитрий Бельков   | PM       | @Nifertum        | mailto:belkovdv1@gmail.com        | МСК          |
| Олег Чистов       | PdM      | @Oleg_Korolevsky | mailto:estyl85@gmail.com          | МСК          |
| Ульяна Вилкова    | Дизайнер | @uvilkova        | mailto:ylyankavilk@gmail.com      | -1 к МСК     |
| Максим Долгов     | Дизайнер | @dolgov_maksim   | mailto:maksim.dolgov.w@gmail.com  | +1 к МСК     |
| Ольга Литова      | Дизайнер | @LitovaOlga      | mailto:olgalit137@gmail.com       | МСК          |
| Дарья Никитина    | Дизайнер | @ndi2411         | mailto:ndi241195@gmail.com        | МСК          |
| Мария Перадзе     | Дизайнер | @mperadze        | mailto:mariaperadze@gmail.com     | МСК          |
| Елена Нестерова   | SA       | @nstelena        | mailto:elena.nest03@gmail.com     | МСК          |
| Александр Зеленин | SA       | @TheLenin81      | mailto:seleninav@gmail.com        | МСК          |
| Настя Гаврилова   | BA       | @Tarasovna       | mailto:anastasiapacisko@gmail.com | +2 к МСК     |
| Олеся Хлебникова  | BA       | @holesek         | mailto:ole.hlebn@gmail.com        | МСК          |
| Богдан Сутужко    | Фронт    | @julfy_bs        | mailto:julfy.web@gmail.com        | МСК          |
| Олег Гуров        | Бекендер | @rocket_cookie   | mailto:guroff.oleg@gmail.com      | МСК          |
| Вячеслав Ульянов  | QA       | @UlianovVS       | mailto:ulyanovvs@yandex.ru        | МСК          |
|                   |          |                  |                                   |              |
|                   |          |                  |                                   |              |
|                   |          |                  |                                   |              |

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
