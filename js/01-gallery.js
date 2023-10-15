import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryElement = document.querySelector(".gallery");

function createGalleryItem(item) {
  return `<li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
            </a>
        </li>`;
}

galleryElement.innerHTML = galleryItems
  .map((item) => createGalleryItem(item))
  .join("");

galleryElement.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName === "IMG") {
    const largeImageURL = event.target.parentElement.getAttribute("href");

    const instance = basicLightbox.create(`<img src="${largeImageURL}"  />`);
    instance.show();
  }
});
