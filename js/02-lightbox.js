import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

renderGalleryItems(galleryItems);
const gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});

galleryList.addEventListener('click', onGalleryListClick)
function onGalleryListClick(event) {
    event.preventDefault();
};

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
            </a>
        </li>
    `).join('')
}


function renderGalleryItems(galleryItems) {
    galleryList.innerHTML = createGalleryItemsMarkup(galleryItems);
}