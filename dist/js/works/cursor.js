import{lerp,getMousePos}from"./utils.js";let mouse={x:0,y:0};window.addEventListener("mousemove",(e=>mouse=getMousePos(e)));export class Cursor{constructor(e){this.DOM={el:e},this.DOM.el.style.opacity=0,this.bounds=this.DOM.el.getBoundingClientRect(),this.renderedStyles={tx:{previous:0,current:0,amt:.2},ty:{previous:0,current:0,amt:.2},scale:{previous:1,current:1,amt:.15}},this.onMouseMoveEv=()=>{this.renderedStyles.tx.previous=this.renderedStyles.tx.current=mouse.x-this.bounds.width/2,this.renderedStyles.ty.previous=this.renderedStyles.ty.previous=mouse.y-this.bounds.height/2,gsap.to(this.DOM.el,{duration:.9,ease:"Power3.easeOut",opacity:1}),requestAnimationFrame((()=>this.render())),window.removeEventListener("mousemove",this.onMouseMoveEv)},window.addEventListener("mousemove",this.onMouseMoveEv)}enter(){this.renderedStyles.scale.current=1.5}leave(){this.renderedStyles.scale.current=1}render(){this.renderedStyles.tx.current=mouse.x-this.bounds.width/2,this.renderedStyles.ty.current=mouse.y-this.bounds.height/2;for(const e in this.renderedStyles)this.renderedStyles[e].previous=lerp(this.renderedStyles[e].previous,this.renderedStyles[e].current,this.renderedStyles[e].amt);this.DOM.el.style.transform=`translateX(${this.renderedStyles.tx.previous}px) translateY(${this.renderedStyles.ty.previous}px) scale(${this.renderedStyles.scale.previous})`,requestAnimationFrame((()=>this.render()))}}