document.addEventListener("DOMContentLoaded",(function(){setTimeout((()=>{let e=document.querySelector(".time");function t(){var t=new Date;e.innerHTML=t.toTimeString().substr(0,5)}t(),setInterval((()=>{t()}),1e3);let o=document.querySelector(".button-menu"),r=document.querySelector(".button-close"),n=document.querySelectorAll(".menu-will-open"),i=document.querySelector(".mf-cursor");function a(){if(innerWidth>767){const e=new Lenis({duration:3,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),direction:"vertical",gestureDirection:"vertical",smooth:!0,smoothTouch:!1,touchMultiplier:2,infinite:!1,autoResize:!0});requestAnimationFrame((function t(o){e.raf(o),requestAnimationFrame(t)}))}}if(n.forEach((e=>{o.addEventListener("click",(()=>{setTimeout((()=>{e.classList.add("menu-is-open"),i&&(i.style.display="none")}),1e3)})),r.addEventListener("click",(()=>{setTimeout((()=>{e.classList.remove("menu-is-open"),i&&(i.style.display="block")}),1e3)}))})),a(),window.addEventListener("resize",a),gsap.registerPlugin(ScrollTrigger),innerWidth>767&&(document.querySelectorAll("[line-triggerX]").forEach((function(e){const t=e.getAttribute("line-triggerX"),o=function(e){const t=gsap.timeline({defaults:{duration:2,ease:"power2.out"}});return t.fromTo(e,{scaleX:1,opacity:1,transformOrigin:"center center"},{scaleX:0,opacity:0}),t}(e);ScrollTrigger.create({trigger:t,start:"top 80%",animation:o,onEnter:()=>o.play()})})),document.querySelectorAll("[line-triggerY]").forEach((function(e){const t=e.getAttribute("line-triggerY"),o=function(e){const t=gsap.timeline({defaults:{duration:2,ease:"power2.out",delay:1.2}});return t.fromTo(e,{scaleY:1,opacity:1,transformOrigin:"bottom"},{scaleY:0,opacity:0}),t}(e);ScrollTrigger.create({trigger:t,start:"top 80%",animation:o,toggleActions:"play none none none"})}))),innerWidth>767){function l(){gsap.registerPlugin(ScrollTrigger),gsap.timeline({scrollTrigger:{trigger:".empty",start:"top bottom",end:"bottom 60%",scrub:!0}}).to(".empty",{y:"-40vh",ease:"expo.out"})}l(),window.addEventListener("resize",l)}const c=[...document.querySelectorAll("[data-splitting][data-effect28]")];c&&(gsap.registerPlugin(ScrollTrigger),gsap.registerPlugin(SplitText),new SplitText("[data-splitting][data-effect28]",{type:"words,lines,chars",wordsClass:"content__title word",charsClass:"char",linesClass:"lines"}),c.forEach((e=>{const t=[...e.querySelectorAll(".word")];for(const e of t){const t=e.querySelectorAll(".char"),o=t.length;gsap.fromTo(t,{"will-change":"transform, filter",transformOrigin:"50% 100%",scale:e=>{const t=e<Math.ceil(o/2)?e:Math.ceil(o/2)-Math.abs(Math.floor(o/2)-e)-1;return gsap.utils.mapRange(0,Math.ceil(o/2),.5,2.1,t)},y:e=>{const t=e<Math.ceil(o/2)?e:Math.ceil(o/2)-Math.abs(Math.floor(o/2)-e)-1;return gsap.utils.mapRange(0,Math.ceil(o/2),0,60,t)},rotation:e=>{const t=e<Math.ceil(o/2)?e:Math.ceil(o/2)-Math.abs(Math.floor(o/2)-e)-1;return e<o/2?gsap.utils.mapRange(0,Math.ceil(o/2),-4,0,t):gsap.utils.mapRange(0,Math.ceil(o/2),0,4,t)},filter:"blur(12px) opacity(0)"},{ease:"power2.inOut",y:0,rotation:0,scale:1,filter:"blur(0px) opacity(1)",scrollTrigger:{trigger:e,start:"top bottom+=40%",end:"top top+=15%",scrub:!0},stagger:{amount:.15,from:"center"}})}})));let s=document.querySelector(".menu-gallery"),u=document.querySelector(".menu-work"),d=s.querySelectorAll(".gallery__item-imginner");u.addEventListener("mouseenter",(()=>{d.forEach((function(e,t){e.getAttribute("data-image"),gsap.timeline().addLabel("rotate,+=0").to(e,{transform:"rotate3d(0, 1, 0, 180deg)",perspective:"1000px",duration:1.2,ease:"power2.in",id:t+1},"rotate").add((()=>{e.classList.add(`menu-image${t}`)}))}))}));let g=document.querySelector(".knob"),m=document.querySelector(".dark-toggle"),p=document.querySelector("body"),y=document.querySelector(".mf-cursor"),f=!1;if(m.addEventListener("click",(()=>{f=!f,gsap.timeline().to(g,{x:()=>f?18:0,duration:.4,ease:"expo.in"}),document.querySelectorAll(".portfolio-map a").forEach((e=>{gsap.set(e,{color:f?"#fff":"#000"})})),p.classList.toggle("dark-mode"),y.classList.add("-exclusion")})),innerWidth>767&&new MouseFollower,document.querySelector(".mf-cursor")){function h(){innerWidth<768&&(document.querySelector(".mf-cursor").style.display="none")}h()}window.addEventListener("resize",h),document.querySelectorAll(".magnetic").forEach((e=>{e.addEventListener("mouseenter",(()=>{console.log("magnettt")})),new Magnetic(e,{y:.4,x:.4,s:.2,rs:.7})})),$("[data-magnetic]").each((function(){new Magnetic(this)})),gsap.registerPlugin(ScrollToPlugin);let w=document.querySelector(".tocontact"),S=document.querySelector(".toworks"),T=document.querySelector(".tohero"),b=document.querySelector(".toabout");w.addEventListener("click",(()=>{gsap.to(window,{duration:3,scrollTo:".free-time",ease:"expo.out"})})),S.addEventListener("click",(()=>{gsap.to(window,{duration:3,scrollTo:{y:".works",offsetY:50},ease:e=>Math.min(1,1.001-Math.pow(2,-10*e))})})),T.addEventListener("click",(()=>{gsap.to(window,{duration:3,scrollTo:{y:".content-hero"},ease:e=>Math.min(1,1.001-Math.pow(2,-10*e))})})),b.addEventListener("click",(()=>{gsap.to(window,{duration:3,scrollTo:{y:".intro-port",offsetY:10},ease:e=>Math.min(1,1.001-Math.pow(2,-10*e))})}));let q=document.querySelectorAll(".portfolio-map a"),M=document.querySelector("body"),E=getComputedStyle(M).backgroundColor,v=getComputedStyle(M).color,L=gsap.timeline({paused:!0,scrollTrigger:{trigger:".free-time",start:"top center",markers:!1,onEnter:()=>{L.play()},onLeaveBack:()=>{L.reverse()}}});gsap.to(window,{scrollTrigger:{trigger:"body",start:"top top",onEnter:()=>{L.reverse()}}}),q.forEach((e=>{L.fromTo(e,{color:v},{color:E,duration:.4,ease:"power1.out"})}))}),0)}));const words=["Hello","Hola","Bonjour","Salut","Chao"];let currentIndex=0;function changeWord(){const e=document.getElementById("changehello");currentIndex=(currentIndex+1)%words.length,e.innerHTML=words[currentIndex]}function copyToClipboard(e){innerWidth>767&&document.hasFocus()&&(navigator.clipboard.writeText(e),document.querySelectorAll(".copy").forEach((e=>{e.innerHTML="Copied",setTimeout((()=>{e.innerHTML="Copy!"}),4e3)})))}setInterval(changeWord,1e4);const text3d=()=>{innerWidth>767&&(gsap.registerPlugin(ScrollTrigger),[...document.querySelectorAll("[data-splitting][data-effect19]")].forEach((e=>{const t=e.querySelectorAll(".char");t.forEach((e=>gsap.set(e.parentNode,{perspective:1e3}))),gsap.fromTo(t,{"will-change":"opacity, transform",transformOrigin:"50% 0%",opacity:0,rotationX:-90,z:-200},{ease:"power1",opacity:1,stagger:.05,rotationX:0,z:0,scrollTrigger:{trigger:e,start:"center bottom",end:"bottom top+=40%",scrub:!0}})})))};let resizeTimer;text3d(),window.addEventListener("resize",(()=>{clearTimeout(resizeTimer),resizeTimer=setTimeout((()=>{text3d(),copyToClipboard()}),250)})),innerWidth>767&&gsap.timeline({scrollTrigger:{trigger:".wiggle",start:"top 90%",end:"top 30%",scrub:1}}).fromTo("#logo-36",{scale:.3,y:"-200px",rotate:0},{scale:1,y:0,rotate:360});let chars=[...document.querySelectorAll(".rotate-i .char")];const lettertl=gsap.timeline({repeat:-1,duration:2,delay:3,yoyo:!0});lettertl.to(chars[6],{rotation:360}),lettertl.to(chars[11],{rotation:360});let emailbox=document.querySelector(".email-box");