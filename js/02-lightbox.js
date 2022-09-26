import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const listObj = {images: document.querySelector(".gallery")};
const newEl = galleryItems.reduce((acc, picture) => acc + `
<a class="gallery__item" href="${picture.original}">
  <img class="gallery__image" src="${picture.preview}" alt="${picture.description}" title="${picture.description}"/>
</a>`,``)
listObj.images.insertAdjacentHTML(`beforeend`, newEl);
 const arrGallery = document.querySelector(".gallery")
 console.log(arrGallery);

 arrGallery.addEventListener("click", showGallery);
 function showGallery (evt){
   evt.preventDefault(); 

var lightbox = new SimpleLightbox('.gallery a', { captionsData : `alt`,
    captionPosition: `bottom`,
    captionDelay: 250,
    navText:['<','>'],
    close: false,
    animationSpeed: 300,
    })
   
}