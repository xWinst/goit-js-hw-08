// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/dist/basicLightbox.min.css';

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

// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
//   captionPosition: 'bottom',
// });

//console.log(galleryItems);

function selectImage(event) {
  event.preventDefault();
  // let ar = new URL();
  // console.log(ar);
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  // let lib = require("./images/main_box.jpg");
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
      onShow: () => window.addEventListener('keydown', clickEsc), // Это доп задание, для проверки работоспособности можно
      onClose: () => window.removeEventListener('keydown', clickEsc), //                                         и без него
    }
  );
  console.log('jjj00');
  instance.show();
}

function clickEsc(event) {
  // Это тоже относится к доп
  if (event.key === 'Escape') {
    instance.close();
  }
}
