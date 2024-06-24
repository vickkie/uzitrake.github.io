import { preloadImages } from "./utils.js";
import GalleryController from "./galleryController.js";

let animationLine = document.querySelector(".loader-line-mask");
let logoLoaded = document.querySelector(".loadedlogo");

// Preload images and fonts
preloadImages(".gallery__item-imginner")
  .then(() => {
    document.body.classList.remove("loading"); // Remove loading class
    animationLine.style.animationPlayState = "paused"; // Pause the animation

    // Initialize the GalleryController
    new GalleryController(document.querySelector(".gallery"));
  })

  .catch((error) => {
    console.error("An error occurred:", error);
  });
