import * as basicLightbox from 'basiclightbox';
// import 'basicLightbox/dist/basicLightbox.min.css';
import { galleryItems } from './gallery-items';

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
            <img src = "../../images/main_box.jpg"  width="50"/>
            <img src = "/images/main_box.jpg"  width="50"/>
            <img src = "./images/main_box.jpg"  width="50"/>
            <img src = "main_box.jpg"  width="50"/>
            <img src = "./main_box.jpg"  width="50"/>
            <img src = "../main_box.jpg"  width="50"/>
            <img src = "src/images/main_box.jpg"  width="50"/>
            <img src = "../src/images/main_box.jpg" width="100"/>
            <img src = "../../src/images/main_box.jpg" width="150"/>
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
