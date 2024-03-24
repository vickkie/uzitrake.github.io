import { partytownSnippet } from "@builder.io/partytown/integration";
// main.js
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./offline-uzitrake.js")
      //  .then(reg=>
      //   // console.log('serviceWorker')
      //   )
      .catch((err) => console.log("Error:", err));
  });
}

const snippetText = partytownSnippet();
const el = document.createElement("script");
el.innerText = snippetText;
document.body.appendChild(el);

//Group 2: updaTE TIME

document.addEventListener("DOMContentLoaded", () => {
  let time = document.querySelector(".time");
  function updateTime() {
    var date = new Date();
    time.innerHTML = date.toTimeString().substr(0, 5);
  }
  updateTime();
  setInterval(() => {
    updateTime();
  }, 1000);
});
