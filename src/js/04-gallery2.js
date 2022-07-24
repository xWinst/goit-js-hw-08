import * as basicLightbox from 'basiclightbox';
// import 'basicLightbox/dist/basicLightbox.min.css';
import { galleryItems } from './gallery-items';
import imageURL from '../images/main_box.jpg';
import svg from '../images/logo.svg';
import fs from 'fs';
const buffer = fs.readFileSync(__dirname + '/images/main_box.jpg');

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', selectImage);

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

function selectImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `<div>
            <h2>llsdflskd</h2>
            <img class="logo_i" src="${svg}" alt="logo" />
            <svg class="logo_i" width="24" height="24">
              <use class="logo_i" href="${svg}"></use>
            </svg>

            <img src = "${buffer}" width="100"/>
            <img src = "${imageURL}" width="150"/>
        </div>`,

    {
      onShow: () => window.addEventListener('keydown', clickEsc),
      onClose: () => window.removeEventListener('keydown', clickEsc),
    }
  );
  console.log('jjj00');
  instance.show();
}

function clickEsc(event) {
  if (event.key === 'Escape') {
    instance.close();
  }
}
