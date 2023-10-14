import { galleryItems } from './gallery-items.js';
// Change code below this line
// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні
// Для створення галереї використовуй масив об'єктів зображень.
// Для створення розмітки елемента галереї використовуй шаблонну строку і insertAdjacentHTML().

const galleryList = document.querySelector('.gallery');

galleryList.insertAdjacentHTML("beforeend", createMarkupList(galleryItems));
galleryList.addEventListener('click', handleClick);

function createMarkupList(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </li>
        `;
    }).join('');
}

console.log(galleryItems);
