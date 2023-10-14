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

function handleClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    };

    const clickedImageSource = event.target.dataset.source;
    const galleryItem = galleryItems.find(({ original }) => original === clickedImageSource);

    if (galleryItem) {
        const instance = basicLightbox.create(`
            <div>
                <img src="${galleryItem.original}" alt="${galleryItem.description}" />
            </div>
        `,
        {onClose: (instance) => {
        window.removeEventListener('keydown', onCloseHandler)
        }});

        window.addEventListener('keydown', onCloseHandler);
        
        function onCloseHandler(event) {
            if (event.key === 'Escape') {
                instance.close();
            }};
        
        instance.show();
    }
};

console.log(galleryItems);
