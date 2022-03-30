# search_books

Один из проектов созданных по заданию HR-менеджера(запрашивал тестовые задания на HeadHunter для повышения собственных навыков разработки).
Проект был написан с нуля с использованием **API Google Books**

Функционал приложения можно понять прочитав задание на разработку:

## Задание

Необходимо разработать React-приложение поиска книг с помощью Google Books API. Документация: https://developers.google.com/books/docs/v1/using. Для авторизации запросов к API выбрать способ с предоставлением API key (https://developers.google.com/books/docs/v1/using#APIKey).

__Функционал__

- Должны быть текстовое поле и кнопка поиска. По введенной пользователем подстроке производится поиск книг. Триггером к поиску является либо нажатие Enter (когда текстовое поле в фокусе), либо нажатие кнопки поиска.
- Фильтрация по категориям. Ниже текстового поля располагается селект с категориями: all, art, biography, computers, history, medical, poetry. Если выбрано "all" (выбрано изначально), то поиск производится по всем категориям.
- Сортировка. Рядом с селектом категорий находится селект с вариантами сортировки: relevance (выбран изначально), newest. 
- Найденные книги отображаются карточками, каждая из которых состоит из изображения обложки книги, названия книги, названия категории и имен авторов. Если для книги приходит несколько категорий, то отображается только первая. Авторы отображаются все. Если не приходит какой-либо части данных, то вместо нее просто пустое место.
- Над блоком с карточками отображается количество найденных по запросу книг.
- Пагинация реализована по принципу 'load more'. Ниже блока с карточками находится кнопка 'Load more', по клику на нее к уже загруженным книгам подгружаются еще. Шаг пагинации - 30.
- При клике на карточку происходит переход на детальную страницу книги, на которой выводятся ее данные: изображение обложки, название, все категории, все авторы, описание.

__Замечания__

- __Обязательно__ использование Redux.
- __Желательно__ Typescript
- Во время загрузки книг стоит показать какой-то индикатор
- Верстка может быть самая простая, однако она не должна ломаться при разрешениях от 320px до 1920px.

## Результат

Задание было выполнено в полном объёме. В ближайшее время возможно будет доработан внешний вид приложения.

# Start
```bash
npm start
```
# Interface
<p align="center"><img src="https://i.ibb.co/QfXnYqn/preview-project.gif" alt="ReviewProject" border="0"></p>

<div align="right">
  <a href="https://reactjs.org/">
    <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
  </a>
  <a href="https://redux.js.org/">
    <img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" title="Redux" alt="Redux " width="40" height="40"/>&nbsp;
  </a>
   <a href="https://www.typescriptlang.org/">    
    <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-plain.svg" title="TypeScript" alt="TypeScript" width="40" height="40"/>&nbsp;
  </a>
  <a href="https://www.w3.org/Style/CSS/">
    <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
  </a>
  <a href="https://html.spec.whatwg.org/">    
    <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
  </a>
</div>
