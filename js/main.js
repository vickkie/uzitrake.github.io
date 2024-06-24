let select=e=>document.querySelector(e),selectAll=e=>document.querySelectorAll(e);"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("./offline-uzitrake.js").catch((e=>console.log("Error:",e)))}));let emailButtons=selectAll(".emailme");emailButtons.forEach((e=>{e.addEventListener("click",(function(){window.open("mailto:vickkietrake@gmail.com")}))})),gsap.registerPlugin(SplitText);const splitchars=document.querySelectorAll(".split-char");splitchars.forEach((e=>{new SplitText(e,{type:"chars,words",charsClass:"char",wordsClass:"word"})})),document.addEventListener("DOMContentLoaded",(function(){setTimeout((()=>{let e=select(".time");function t(){var t=new Date;e.innerHTML=t.toTimeString().substr(0,5)}t(),setInterval((()=>{t()}),1e3);let r=select(".button-menu"),o=select(".button-close"),l=selectAll(".menu-will-open"),i=select(".mf-cursor");function n(){if(innerWidth>767){const e=new Lenis({duration:3,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),direction:"vertical",gestureDirection:"vertical",smooth:!0,smoothTouch:!1,touchMultiplier:2,infinite:!1,autoResize:!0});requestAnimationFrame((function t(r){e.raf(r),requestAnimationFrame(t)}))}}if(l.forEach((e=>{r.addEventListener("click",(()=>{setTimeout((()=>{e.classList.add("menu-is-open"),i&&(i.style.display="none")}),1e3)})),o.addEventListener("click",(()=>{setTimeout((()=>{e.classList.remove("menu-is-open"),i&&(i.style.display="block")}),1e3)}))})),n(),window.addEventListener("resize",n),gsap.registerPlugin(ScrollTrigger),innerWidth>767){selectAll("[line-triggerX]").forEach((function(e){const t=e.getAttribute("line-triggerX"),r=function(e){const t=gsap.timeline({defaults:{duration:2,ease:"power2.out"}});return t.fromTo(e,{scaleX:1,opacity:1,transformOrigin:"center center"},{scaleX:0,opacity:0}),t}(e);ScrollTrigger.create({trigger:t,start:"top 80%",animation:r,onEnter:()=>r.play()})})),selectAll("[line-triggerY]").forEach((function(e){const t=e.getAttribute("line-triggerY"),r=function(e){const t=gsap.timeline({defaults:{duration:2,ease:"power2.out",delay:1.2}});return t.fromTo(e,{scaleY:1,opacity:1,transformOrigin:"bottom"},{scaleY:0,opacity:0}),t}(e);ScrollTrigger.create({trigger:t,start:"top 80%",animation:r,toggleActions:"play none none none"})}))}if(innerWidth>767){let S=select(".empty");function a(){gsap.registerPlugin(ScrollTrigger),gsap.timeline({scrollTrigger:{trigger:S,start:"top bottom",end:"bottom 60%",scrub:!0}}).to(S,{y:"-40vh",ease:"expo.out"})}a(),window.addEventListener("resize",a)}const s=[...selectAll("[data-effect28]")];if(s){gsap.registerPlugin(ScrollTrigger),gsap.registerPlugin(SplitText);new SplitText("[data-effect28]",{type:"words,lines,chars",wordsClass:"content__title word",charsClass:"char",linesClass:"lines"});s.forEach((e=>{const t=[...e.querySelectorAll(".word")];for(const e of t){const t=e.querySelectorAll(".char"),r=t.length;gsap.fromTo(t,{"will-change":"transform, filter",transformOrigin:"50% 100%",scale:e=>{const t=e<Math.ceil(r/2)?e:Math.ceil(r/2)-Math.abs(Math.floor(r/2)-e)-1;return gsap.utils.mapRange(0,Math.ceil(r/2),.5,2.1,t)},y:e=>{const t=e<Math.ceil(r/2)?e:Math.ceil(r/2)-Math.abs(Math.floor(r/2)-e)-1;return gsap.utils.mapRange(0,Math.ceil(r/2),0,60,t)},rotation:e=>{const t=e<Math.ceil(r/2)?e:Math.ceil(r/2)-Math.abs(Math.floor(r/2)-e)-1;return e<r/2?gsap.utils.mapRange(0,Math.ceil(r/2),-4,0,t):gsap.utils.mapRange(0,Math.ceil(r/2),0,4,t)},filter:"blur(12px) opacity(0)"},{ease:"power2.inOut",y:0,rotation:0,scale:1,filter:"blur(0px) opacity(1)",scrollTrigger:{trigger:e,start:"top bottom+=40%",end:"top top+=15%",scrub:!0},stagger:{amount:.15,from:"center"}})}}))}let c=select(".menu-gallery"),g=select(".menu-work"),p=c.querySelectorAll(".gallery__item-imginner");g.addEventListener("mouseenter",(()=>{p.forEach((function(e,t){e.getAttribute("data-image"),gsap.timeline().addLabel("rotate,+=0").to(e,{transform:"rotate3d(0, 1, 0, 180deg)",perspective:"1000px",duration:1.2,ease:"power2.in",id:t+1},"rotate").add((()=>{e.classList.add(`menu-image${t}`)}))}))}));let d=select(".knob"),u=select(".dark-toggle"),m=select("body"),f=select(".mf-cursor"),h=!1;if(u.addEventListener("click",(()=>{h=!h,gsap.timeline().to(d,{x:()=>h?18:0,duration:.4,ease:"expo.in"}),selectAll(".portfolio-map a").forEach((e=>{gsap.set(e,{color:h?"#fff":"#000"})})),m.classList.toggle("dark-mode"),f.classList.add("-exclusion")})),innerWidth>767){new MouseFollower}if(select(".mf-cursor")){function w(){innerWidth<768&&(select(".mf-cursor").style.display="none")}w()}window.addEventListener("resize",w),gsap.registerPlugin(ScrollToPlugin);let y=select(".tocontact"),T=select(".toworks"),v=select(".tohero"),x=select(".toabout");y.addEventListener("click",(()=>{gsap.to(window,{duration:3,scrollTo:".free-time",ease:"expo.out"})})),T.addEventListener("click",(()=>{gsap.to(window,{duration:3,scrollTo:{y:".works",offsetY:50},ease:e=>Math.min(1,1.001-Math.pow(2,-10*e))})})),v.addEventListener("click",(()=>{gsap.to(window,{duration:3,scrollTo:{y:".content-hero"},ease:e=>Math.min(1,1.001-Math.pow(2,-10*e))})})),x.addEventListener("click",(()=>{gsap.to(window,{duration:3,scrollTo:{y:".intro-port",offsetY:10},ease:e=>Math.min(1,1.001-Math.pow(2,-10*e))})}));let E=selectAll(".portfolio-map a"),b=select("body"),L=getComputedStyle(b).backgroundColor,M=getComputedStyle(b).color,k=gsap.timeline({paused:!0,scrollTrigger:{trigger:".free-time",start:"top center",markers:!1,onEnter:()=>{k.play()},onLeaveBack:()=>{k.reverse()}}});gsap.to(window,{scrollTrigger:{trigger:"body",start:"top top",onEnter:()=>{k.reverse()}}}),E.forEach((e=>{k.fromTo(e,{color:M},{color:L,duration:.4,ease:"power1.out"})}))}),0)}));let emailbox=select(".email-box"),explorer=select(".in-world-btn-wrap"),explorerLine=select(".meeting-content-bottom"),exploTl=gsap.timeline({});exploTl.to(explorer,{scaleY:0,scaleX:0}),exploTl.fromTo(explorerLine,{scaleX:1,opacity:1,transformOrigin:"center center"},{scaleX:0,opacity:0}),ScrollTrigger.create({trigger:explorer,start:"top 80%",animation:exploTl,onEnter:()=>exploTl.play(),onLeaveBack:()=>exploTl.reverse()});let expoHoverTl=gsap.timeline();expoHoverTl.to(explorer,{duration:.9,transform:"scale(1,1.25)"}),explorer.addEventListener("mouseenter",(()=>{expoHoverTl.play()})),explorer.addEventListener("mouseleave",(()=>{expoHoverTl.reverse()}));