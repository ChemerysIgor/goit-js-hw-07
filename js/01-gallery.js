import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listObj = {images: document.querySelector(".gallery")};

// -----створюємо шаблон і рендеримо до галереї--
const newEl = galleryItems.reduce((acc, picture) => acc + `<div class="gallery__item">
<a class="gallery__link" href="${picture.original
}">
<img class="gallery__image" src="${picture.preview}"
data-source="${picture.original}"
alt="${picture.description}"/>
</a>
</div>`,``)
listObj.images.insertAdjacentHTML(`beforeend`, newEl);
 const arrGallery = document.querySelector(".gallery")
 console.log(arrGallery);
 arrGallery.addEventListener("click", showGallery);
 
function showGallery (evt){
const modalImg = evt.target;
evt.preventDefault();
if (modalImg === evt.currentTarget) return

const instance = basicLightbox.create(`   
    <img src="${modalImg.dataset.source}"/>
    `)
instance.show();

evt.currentTarget.addEventListener("keydown", event => {if (event.key === "Escape")
    {instance.close();

    } else {return}
  });
evt.currentTarget.removeEventListener("keydown", event => {if (event.key === "Escape")
    {instance.close();
     } else {return}
  });
  console.log(event.target)
}

