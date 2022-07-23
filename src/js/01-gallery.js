import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

let markup = '';

galleryItems.forEach(
  picture =>
    (markup += `<a class="gallery__item" href="${picture.original}">
        <img
            class="gallery__image"
            src="${picture.preview}"
            data-source="${picture.original}"
            alt="${picture.description}"
        />
        </a>`)
);

gallery.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

console.log(galleryItems);
