"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("offline-uzitrake.js").catch((r=>console.log("Error:",r)))}));