const lerp=(e,o,n)=>(1-n)*e+n*o,getMousePos=e=>({x:e.clientX,y:e.clientY}),calcWinsize=()=>({width:window.innerWidth,height:window.innerHeight}),getRandomInteger=(e,o)=>Math.floor(Math.random()*(o-e+1)+e),preloadImages=(e="img")=>new Promise((o=>{imagesLoaded(document.querySelectorAll(e),{background:!0},o)}));export{lerp,getMousePos,calcWinsize,getRandomInteger,preloadImages};