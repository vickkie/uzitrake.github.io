import{preloadImages,preloadFonts}from"./utils.js";import GalleryController from"./galleryController.js";Promise.all([preloadImages(".gallery__item-imginner")]).then((()=>{document.body.classList.remove("loading"),new GalleryController(document.querySelector(".gallery")),[...document.querySelectorAll("a, .gallery__item-img")].forEach((e=>{}))}));