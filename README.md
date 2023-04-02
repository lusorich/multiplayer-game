# Описание игры

Наша игра основана на настольной игре от издательства Hobby World под названием [«Лига детективов»](https://hobbygames.ru/liga-detektivov). 
>В воздухе повисла гнетущая атмосфера недосказанности. Сидящие в комнате с недоверием вглядываются друг в друга, жадно ловя каждое слово и рассматривая каждую деталь гардероба... Что же здесь происходит? Конечно же, партия в "Лигу детективов"! Кто лучше других разгадает чужие тайны? Кто не выдаст свои собственные секреты, запутав всех уверенным блефом? Пять вопросов, пять ответов и напряжённая работа ума – вот испытания, которые ждут каждого игрока.

В игре могут участвовать от 3 до 6 игроков по выбору создателя комнаты. Также создатель комнаты определяет, сколько раундов будет длиться игра (от 1 до 5).

Существует два способа коммуникации между игроками: первый – модальные окна с ответами всех участников, второй – непосредственная коммуникация вне игры (например, на сервере в Discord).

# Механика игры

Механика данной игры базируется на непосредственном взаимодействии между людьми с использованием карт. Цель игры – набрать большее количество победных очков, чем остальные игроки.

Все действия (кроме наблюдений) записываются непосредственно в блокнот игрока автоматически, в том числе подсчет победных очков.

### Подготовка к игре

1.	У каждого игрока есть разворот подсказок и блокнот, в котором автоматически записываются призовые очки и наблюдения (остальные игроки не видят этого).
2.	Все участники голосуют за антураж, всего их в игре три: «Викторианская Англия», «Современность» или «Фэнтези». Каждый игрок после голосования получает памятку-подсказку со списком всех профессий и тайн в выбранном антураже.
3.	На общем поле появляются карты профессий и тайн в выбранном антураже (две стопки карт лицевой стороной вниз).
4.	На общем поле появляются карты общих вопросов и карты вопросов выбранного антуража. Они разделены на две стопки: внешность и разные вопросы.

### Ход игры

1.	Всем игрокам автоматически раздается две профессии и две тайны (остальные игроки не видят, какие именно). Каждый игрок выбирает одну профессию и тайну. В блокнот автоматически записывается информации о том, что он выбрал в соответствующую ячейку. Названия карт, которые он не выбрал записываются также в соответствующую ячейку (для того, чтобы при угадывании персонажей других игроков исключить эти карты).
2.	После того, как все игроки выбрали профессии и тайны на общем поле появляются 2 карты вопросов из колоды внешности и 3 карты вопросов из категории разные. Карты раскладываются автоматически лицевой стороной вниз в таком порядке: внешность-разные-внешность- разные- разные.
3.	По очереди вскрываются карты с вопросами ко всем участникам, на ответ отводится 30 секунд (этого хватит, чтобы обдумать вопрос и описать своего персонажа 1-2 предложениями). Далее всем игрокам показывается, как ответили на вопрос другие персонажи и игрок самостоятельно вписывает в блокнот свои наблюдения (кто персонаж по профессии или какая у него тайна).

### Подсчет очков

Подсчет очков происходит автоматически (чтобы никто не жульничал).

1.	За каждую правильно названную другими игроками профессию или тайну игрок получает по 1 очку, но, если угадали все – 0 очков.
2.	Если никто не отгадал профессию или тайну игрока, то 1 очко получают все за неправильную профессию/тайну.
3.	Если игроку удалось отгадать профессию или тайну, то он получает 1 очко за каждое соответственно.


### Как запускать?

1. Убедитесь что у вас установлен `node` и `docker`
2. Выполните команду `yarn bootstrap` - это обязательный шаг, без него ничего работать не будет :)
3. Выполните команду `yarn dev`
4. Выполните команду `yarn dev --scope=client` чтобы запустить только клиент
5. Выполните команду `yarn dev --scope=server` чтобы запустить только server

### Как добавить зависимости?

В этом проекте используется `monorepo` на основе [`lerna`](https://github.com/lerna/lerna)

Чтобы добавить зависимость для клиента
`yarn lerna add {your_dep} --scope client`

Для сервера
`yarn lerna add {your_dep} --scope server`

И для клиента и для сервера
`yarn lerna add {your_dep}`

Если вы хотите добавить dev зависимость, проделайте то же самое, но с флагом `dev`
`yarn lerna add {your_dep} --dev --scope server`

### Тесты

Для клиента используется [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro/)

`yarn test`

### Линтинг

`yarn lint`

### Форматирование prettier

`yarn format`

### Production build

`yarn build`

И чтобы посмотреть что получилось

`yarn preview --scope client`
`yarn preview --scope server`

## Хуки

В проекте используется [lefthook](https://github.com/evilmartians/lefthook)
Если очень-очень нужно пропустить проверки, используйте `--no-verify` (но не злоупотребляйте :)

## Ой, ничего не работает :(

Откройте issue, я приду :)

## Автодеплой статики на vercel

Зарегистрируйте аккаунт на [vercel](https://vercel.com/)
Следуйте [инструкции](https://vitejs.dev/guide/static-deploy.html#vercel-for-git)
В качестве `root directory` укажите `packages/client`

Все ваши PR будут автоматически деплоиться на vercel. URL вам предоставит деплоящий бот

## Production окружение в докере

Перед первым запуском выполните `node init.js`

`docker compose up` - запустит три сервиса

1. nginx, раздающий клиентскую статику (client)
2. node, ваш сервер (server)
3. postgres, вашу базу данных (postgres)

Если вам понадобится только один сервис, просто уточните какой в команде
`docker compose up {sevice_name}`, например `docker compose up server`
