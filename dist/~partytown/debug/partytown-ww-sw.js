(e=>{const t=Symbol(),n=Symbol(),r=Symbol(),i=Symbol(),s=Symbol(),o=Symbol(),a=Symbol(),c=Symbol(),l=new Map,$={},u=new WeakMap,d=[],p={},g={},h=new Map,f=new Map,m=e=>e.split(","),y=e=>{if(e=p.$libPath$+e,new URL(e).origin!=location.origin)throw"Invalid "+e;return e},w=m("clientWidth,clientHeight,clientTop,clientLeft,innerWidth,innerHeight,offsetWidth,offsetHeight,offsetTop,offsetLeft,outerWidth,outerHeight,pageXOffset,pageYOffset,scrollWidth,scrollHeight,scrollTop,scrollLeft"),v=m("childElementCount,children,firstElementChild,lastElementChild,nextElementSibling,previousElementSibling"),b=m("insertBefore,remove,removeChild,replaceChild"),S=m("className,width,height,hidden,innerHTML,innerText,textContent"),I=m("setAttribute,setAttributeNS,setProperty"),T=m("addEventListener,dispatchEvent,removeEventListener"),E=T.concat(I,m("add,observe,remove,unobserve")),x=/^[A-Z_]([A-Z0-9-]*[A-Z0-9])?$/,N=()=>{},M=e=>e.length,L=e=>{var t,n,r;try{const n=null===(t=null==e?void 0:e.constructor)||void 0===t?void 0:t.name;if(n)return n}catch(e){}try{const t=null===(r=null===(n=null==e?void 0:e.__zone_symbol__originalInstance)||void 0===n?void 0:n.constructor)||void 0===r?void 0:r.name;if(t)return t}catch(e){}return""},C=[],O=()=>Math.round(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),j=(e,t,n)=>Object.defineProperty(e,t,{...n,configurable:!0}),R=(e,t)=>j(e,"name",{value:t}),W=(e,t,n)=>j(e.prototype,t,n),k=(e,t)=>Object.defineProperties(e.prototype,t),A=(e,t,n)=>W(e,t,{value:n,writable:!0});function P(e,t){var n,r;return null!==(r=null===(n=e.loadScriptsOnMainThread)||void 0===n?void 0:n.map((([e,t])=>new RegExp("string"===e?t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):t))).some((e=>e.test(t))))&&void 0!==r&&r}Object.freeze((e=>{const t=new Set;let n=[];do{Object.getOwnPropertyNames(n).forEach((e=>{"function"==typeof n[e]&&t.add(e)}))}while((n=Object.getPrototypeOf(n))!==Object.prototype);return Array.from(t)})());const H=(e,t)=>t in e[o],D=(e,t)=>e[o][t],_=(e,t,n)=>e[o][t]=n,U=(e,t,n,r,i,s)=>{if(!(i=l.get(t))&&n&&g[e]){const o=l.get(s||"");i=g[e].$createNode$(n,t,r,o),l.set(t,i)}return i},B=(e,t)=>A(e,"nodeType",t),z=(e,t)=>t.map((t=>W(e,t,{get(){let e=F(this,t),n=f.get(e);return n||(n=me(this,[t]),f.set(e,n)),n}}))),F=(e,r,i)=>[e[t],e[n],r,...(i||C).map((e=>String(e&&e[t]?e[n]:e)))].join("."),G=(e,t)=>m(t).map((t=>W(e,t,{get(){return H(this,t)||_(this,t,me(this,[t])),D(this,t)},set(e){D(this,t)!==e&&ye(this,[t],e),_(this,t,e)}}))),q=e=>w.map((t=>W(e,t,{get(){const e=h.get(F(this,t));if("number"==typeof e)return e;const n=me(this,[t],w);return n&&"object"==typeof n?(Object.entries(n).map((([e,t])=>h.set(F(this,e),t))),n[t]):n}}))),J=(e,t)=>t.map((t=>{e.prototype[t]=function(...e){let n=F(this,t,e),r=h.get(n);return r||(r=we(this,[t],e),h.set(n,r)),r}})),V=(e,r,i,s,o)=>{return void 0!==i&&(o=typeof i)?"string"===o||"boolean"===o||"number"===o||null==i?[0,i]:"function"===o?[4,{$winId$:e,$instanceId$:r,$refId$:(a=i,(c=u.get(a))||(u.set(a,c=O()),$[c]=a),c)}]:(s=s||new Set)&&Array.isArray(i)?s.has(i)?[1,[]]:s.add(i)&&[1,i.map((t=>V(e,r,t,s)))]:"object"===o?i[n]?[3,[i[t],i[n]]]:i instanceof Event?[5,Z(e,r,i,!1,s)]:X&&i instanceof TrustedHTML?[0,i.toString()]:i instanceof ArrayBuffer?[8,i]:ArrayBuffer.isView(i)?[9,i.buffer,L(i)]:[2,Z(e,r,i,!0,s)]:void 0:i;var a,c},X="undefined"!=typeof TrustedHTML,Z=(e,t,n,r,i,s,o,a)=>{if(s={},!i.has(n))for(o in i.add(n),n)a=n[o],(r||"function"!=typeof a)&&(s[o]=V(e,t,a,i));return s},Y=(e,r)=>e?V(e[t],e[n],r):[0,r],K=(e,t,n,r,i,s,o,a)=>{if(r){if(i=r[0],s=r[1],0===i||11===i||12===i)return s;if(4===i)return ee(n,s);if(6===i)return e&&n.length>0?(...t)=>we(g[e].$window$,n,t,1):N;if(3===i)return Q(s);if(7===i)return new ne(s.map(Q));if(10===i)return new re(s);if(1===i)return s.map((r=>K(e,t,n,r)));if(14===i)return new te(s);for(a in o={},s)o[a]=K(e,t,[...n,a],s[a]);if(13===i)return new g[e].$window$.CSSStyleDeclaration(e,t,n,o);if(5===i){if("message"===o.type&&o.origin){let e,t=JSON.stringify(o.data),n=d.find((e=>e.$data$===t));n&&(e=g[n.$winId$],e&&(o.source=e.$window$,o.origin=e.$location$.origin))}return new Proxy(new Event(o.type,o),{get:(e,t)=>t in o?o[t]:"function"==typeof e[String(t)]?N:e[String(t)]})}if(2===i)return o}},Q=([e,t,n,r])=>t===e&&g[e]?g[e].$window$:U(e,t,n,void 0,void 0,r),ee=(e,{$winId$:t,$instanceId$:n,$nodeName$:r,$refId$:i})=>($[i]||u.set($[i]=function(...i){const s=U(t,n,r);return we(s,e,i)},i),$[i]);class te extends Error{constructor(e){super(e.message),this.name=e.name,this.message=e.message,this.stack=e.stack}}class ne{constructor(e){(this._=e).map(((e,t)=>this[t]=e))}entries(){return this._.entries()}forEach(e,t){this._.map(e,t)}item(e){return this[e]}keys(){return this._.keys()}get length(){return M(this._)}values(){return this._.values()}[Symbol.iterator](){return this._[Symbol.iterator]()}}const re=class{constructor(e){this.name=e[0],this.value=e[1]}get nodeName(){return this.name}get nodeType(){return 2}},ie=(e,t,n)=>console.warn(`Partytown unable to ${e} cross-origin ${t}: `+n.$location$),se=(t,n)=>{try{if(p.$config$.logStackTraces){const e=(new Error).stack.split("\n"),n=e.findIndex((e=>e.includes("logWorker")));t+="\n"+e.slice(n+1).join("\n")}let r,i;n?(r=`Worker (${ae(n)}) 🎉`,i=ce(n)):(r=e.name,i="#9844bf"),p.lastLog!==t&&(p.lastLog=t,console.debug.apply(console,[`%c${r}`,`background: ${i}; color: white; padding: 2px 3px; border-radius: 2px; font-size: 0.8em;`,t]))}catch(e){}},oe=[],ae=e=>(oe.includes(e)||oe.push(e),oe.indexOf(e)+1),ce=e=>{const t=["#00309e","#ea3655","#eea727"];return t[ae(e)-1]||t[t.length-1]},le=(e,t)=>{let n="";if(e){const t=L(e);if("Window"===t)n="";else if("string"==typeof e[r]){let t=e[r];n="#text"===t?"textNode.":"#comment"===t?"commentNode.":"#document"===t?"document.":"html"===t?"doctype.":t.toLowerCase()+"."}else n="nodeType"in e&&2===e.nodeType?"attributes.":"CanvasRenderingContext2D"===t?"context2D.":"CanvasRenderingContextWebGL"===t?"contextWebGL.":"CSSStyleDeclaration"===t?"style.":"MutationObserver"===t?"mutationObserver.":"NamedNodeMap"===t?"namedNodeMap.":"ResizeObserver"===t?"resizeObserver.":t.substring(0,1).toLowerCase()+t.substring(1)+".";e[s]&&e[s].length&&(n+=[...e[s]].join(".")+".")}if(t.length>1){const e=t.slice(0,t.length-1),r=t[t.length-1];if(!isNaN(r))return n+`${e.join(".")}[${r}]`}return n+t.join(".")},$e=(e,t)=>{const i=typeof t;if(void 0===t)return"undefined";if("boolean"===i||"number"===i||null==t)return JSON.stringify(t);if("string"===i)return e.includes("cookie")?JSON.stringify(t.slice(0,10)+"..."):JSON.stringify(t.length>50?t.slice(0,40)+"...":t);if(Array.isArray(t))return`[${t.map($e).join(", ")}]`;if("object"===i){const i=t[n],s=L(t);if("string"==typeof i){if("Window"===s)return"window";if("string"==typeof t[r]){if(1===t.nodeType)return`<${t[r].toLowerCase()}>`;if(10===t.nodeType)return`<!DOCTYPE ${t[r]}>`;if(t.nodeType<=11)return t[r]}return"¯\\_(ツ)_/¯ instance obj"}return t[Symbol.iterator]?`[${Array.from(t).map((t=>$e(e,t))).join(", ")}]`:"value"in t?"string"==typeof t.value?`"${t.value}"`:ue(t.value):ue(t)}return(e=>"object"==typeof e&&e&&e.then)(t)?"Promise":"function"===i?`ƒ() ${t.name||""}`.trim():`¯\\_(ツ)_/¯ ${String(t)}`.trim()},ue=e=>{const t=[];for(let n in e){const r=e[n],i=typeof r;"string"===i?t.push(`${n}: "${r}"`):"function"===i?t.push(`${n}: ƒ`):Array.isArray(i)?t.push(`${n}: [..]`):"object"===i&&r?t.push(`${n}: {..}`):t.push(`${n}: ${String(r)}`)}let n=t.join(", ");return n.length>200&&(n=n.substring(0,200)+".."),`{ ${n} }`},de=(e,n)=>{(p.$config$.logGetters||p.$config$.logSetters)&&se(`Dimension cache cleared from style.${n} setter`,e[t])},pe=(e,n)=>{(p.$config$.logGetters||p.$config$.logCalls)&&se(`Dimension cache cleared from method call ${n}()`,e[t])},ge=[],he=(e,r,i,o,a,c)=>{if(e[s]){if(ge.push({$winId$:e[t],$instanceId$:e[n],$applyPath$:[...e[s],...r],$assignInstanceId$:o,$groupedGetters$:a}),ge[M(ge)-1].$debug$=((e,t,n)=>{let r=le(e,t);return 1===n?r+=" (blocking)":2===n?r+=" (non-blocking)":3===n&&(r+=" (non-blocking, no-side-effect)"),r.trim()})(e,r,i),c&&3!==i&&console.error("buffer must be sent NonBlockingNoSideEffect"),3===i)p.$postMessage$([12,{$msgId$:O(),$tasks$:[...ge]}],c?[c instanceof ArrayBuffer?c:c.buffer]:void 0),ge.length=0;else if(1===i)return fe(!0);p.$asyncMsgTimer$=setTimeout(fe,20)}},fe=e=>{if(clearTimeout(p.$asyncMsgTimer$),M(ge)){p.$config$.logMainAccess&&se(`Main access, tasks sent: ${ge.length}`);const t=ge[M(ge)-1],n={$msgId$:O(),$tasks$:[...ge]};if(ge.length=0,e){const e=((e,t)=>{const n=new XMLHttpRequest;return n.open("POST",y("proxytown"),!1),n.send(JSON.stringify(t)),JSON.parse(n.responseText)})(0,n),r=e.$isPromise$,i=K(t.$winId$,t.$instanceId$,t.$applyPath$,e.$rtnValue$);if(e.$error$){if(r)return Promise.reject(e.$error$);throw new Error(e.$error$)}return r?Promise.resolve(i):i}p.$postMessage$([12,n])}},me=(e,n,r,i)=>(p.$config$.get&&(i=p.$config$.get(be(e,n)))!==a||((e,n,r,i=!1,s=!1)=>{if(p.$config$.logGetters)try{const o=`Get ${le(e,n)}, returned: ${$e(n,r)}${i?" (restricted to worker)":""}${s?" (grouped getter)":""}`;o.includes("Symbol(")||se(o,e[t])}catch(e){}})(e,n,i=he(e,n,1,void 0,r),!1,!!r),i),ye=(e,n,r,i)=>{if(p.$config$.set){if((i=p.$config$.set({value:r,prevent:c,...be(e,n)}))===c)return;i!==a&&(r=i)}var s,o;S.some((e=>n.includes(e)))&&(h.clear(),s=e,o=n[n.length-1],(p.$config$.logGetters||p.$config$.logSetters)&&se(`Dimension cache cleared from setter "${o}"`,s[t])),((e,n,r,i=!1)=>{if(p.$config$.logSetters)try{n=n.slice(0,n.length-2),se(`Set ${le(e,n)}, value: ${$e(n,r)}${i?" (restricted to worker)":""}`,e[t])}catch(e){}})(e,n=[...n,Y(e,r),0],r),he(e,n,2)},we=(e,n,r,i,s,o,c,l)=>(p.$config$.apply&&(c=p.$config$.apply({args:r,...be(e,n)}))!==a||(l=n[M(n)-1],n=[...n,Y(e,r)],i=i||(E.includes(l)?2:1),"setAttribute"===l&&H(e,r[0])?_(e,r[0],r[1]):b.includes(l)?(h.clear(),f.clear(),((e,n)=>{(p.$config$.logGetters||p.$config$.logCalls)&&se(`Dimension and DOM structure cache cleared from method call ${n}()`,e[t])})(e,l)):I.includes(l)&&(i=2,h.clear(),pe(e,l)),((e,n,r,i)=>{if(p.$config$.logCalls)try{n=n.slice(0,n.length-1),se(`Call ${le(e,n)}(${r.map((e=>$e(n,e))).join(", ")}), returned: ${$e(n,i)}`,e[t])}catch(e){}})(e,n,r,c=he(e,n,i,s,void 0,o))),c),ve=(e,n,r)=>{((e,n,r)=>{if(p.$config$.logCalls)try{se(`Construct new ${n}(${r.map((e=>$e([],e))).join(", ")})`,e[t])}catch(e){}})(e,n,r),he(e,[1,n,Y(e,r)],1)},be=(e,n)=>({name:n.join("."),continue:a,nodeName:e[r],constructor:L(e),instance:e,window:g[e[t]].$window$}),Se=(e,t,n,r)=>{let i={getItem(i){if(n)return we(e,[t,"getItem"],[i],1);ie("get",t,r)},setItem(i,s){n?we(e,[t,"setItem"],[i,s],1):ie("set",t,r)},removeItem(i){n?we(e,[t,"removeItem"],[i],1):ie("remove",t,r)},key(i){if(n)return we(e,[t,"key"],[i],1);ie("key",t,r)},clear(){n?we(e,[t,"clear"],C,1):ie("clear",t,r)},get length(){if(n)return me(e,[t,"length"]);ie("length",t,r)}};e[t]=new Proxy(i,{get:(e,t)=>Reflect.has(e,t)?Reflect.get(e,t):e.getItem(t),set:(e,t,n)=>(e.setItem(t,n),!0),has:(e,t)=>!!Reflect.has(e,t)||"string"==typeof t&&null!==e.getItem(t),deleteProperty:(e,t)=>(e.removeItem(t),!0)})},Ie=(e,t,n)=>{e[n]=R(class extends t{constructor(e,t,n,i){return super(e,t,n,i||{}),new Proxy(this,{get:(e,t)=>e[t]?e[t]:(e[t]||"string"!=typeof t||e[r][t]||(e[r][t]=me(e,[t])),e[r][t]),set:(e,t,n)=>(e[r][t]=n,ye(e,[t],n),de(e,t),h.clear(),!0)})}setProperty(...e){this[r][e[0]]=e[1],we(this,["setProperty"],e,2),de(this,e[0]),h.clear()}getPropertyValue(e){return this[e]}removeProperty(e){let t=this[r][e];return we(this,["removeProperty"],[e],2),de(this,e),h.clear(),this[r][e]=void 0,t}},n)},Te=(e,t)=>{e[t]=R(class{constructor(e){this.ownerNode=e}get cssRules(){const e=this.ownerNode;return new Proxy({},{get(t,n){const r=String(n);return"item"===r?t=>xe(e,t):"length"===r?Ee(e).length:isNaN(r)?t[n]:xe(e,r)}})}insertRule(e,t){const n=Ee(this.ownerNode);return(t=void 0===t?0:t)>=0&&t<=n.length&&(we(this.ownerNode,["sheet","insertRule"],[e,t],2),n.splice(t,0,0)),pe(this.ownerNode,"insertRule"),h.clear(),t}deleteRule(e){we(this.ownerNode,["sheet","deleteRule"],[e],2),Ee(this.ownerNode).splice(e,1),pe(this.ownerNode,"deleteRule"),h.clear()}get type(){return"text/css"}},t);const n={sheet:{get(){return new e[t](this)}}};k(e.HTMLStyleElement,n)},Ee=(e,t)=>((t=D(e,2))||(t=me(e,["sheet","cssRules"]),_(e,2,t)),t),xe=(e,t,n)=>(0===(n=Ee(e))[t]&&(n[t]=me(e,["sheet","cssRules",parseInt(t,10)])),n[t]),Ne=(e,t,n,r,i)=>{try{p.$config$.logScriptExecution&&se(`Execute script: ${n.substring(0,100).split("\n").map((e=>e.trim())).join(" ").trim().substring(0,60)}...`,r),e.$currentScriptId$=t,Me(e,n)}catch(e){console.error(n,e),i=String(e.stack||e)}return e.$currentScriptId$="",i},Me=(e,t,n)=>{e.$runWindowLoadEvent$=1;let r=((e,t)=>e.replace(/([a-zA-Z0-9_$\.\'\"\`])?(\.\.\.)?this(?![a-zA-Z0-9_$:])/g,((e,t,n)=>{const r=(t||"")+(n||"");return null!=t?r+"this":r+"(thi$(this)?window:this)"})))(t);t=`with(this){${r.replace(/\/\/# so/g,"//Xso")}\n;function thi$(t){return t===this}};${(p.$config$.globalFns||[]).filter((e=>/[a-zA-Z_$][0-9a-zA-Z_$]*/.test(e))).map((e=>`(typeof ${e}=='function'&&(this.${e}=${e}))`)).join(";")};`+(n?"\n//# sourceURL="+n:""),e.$isSameOrigin$||(t=t.replace(/.postMessage\(/g,`.postMessage('${e.$winId$}',`)),new Function(t).call(e.$window$),e.$runWindowLoadEvent$=0},Le=(e,t,n)=>{(n=D(e,t))&&setTimeout((()=>n.map((e=>e({type:t})))))},Ce=(e,t,n,r,i,s)=>{for(r=e.$location$;!r.host&&(r=(e=g[e.$parentWinId$]).$location$,e.$winId$!==e.$parentWinId$););return i=new URL(t||"",r),n&&p.$config$.resolveUrl&&(s=p.$config$.resolveUrl(i,r,n))?s:i},Oe=(e,t,n)=>Ce(e,t,n)+"",je=()=>`<script src="${y("partytown.js?v=0.9.2")}"><\/script>`,Re=e=>class{constructor(){this.s="",this.l=[],this.e=[],this.style={}}get src(){return this.s}set src(t){p.$config$.logImageRequests&&se(`Image() request: ${Oe(e,t,"image")}`,e.$winId$),this.s=t,fetch(Oe(e,t,"image"),{mode:"no-cors",credentials:"include",keepalive:!0}).then((e=>{e.ok||0===e.status?this.l.map((e=>e({type:"load"}))):this.e.map((e=>e({type:"error"})))}),(()=>this.e.forEach((e=>e({type:"error"})))))}addEventListener(e,t){"load"===e&&this.l.push(t),"error"===e&&this.e.push(t)}removeEventListener(e,t){"load"===e&&(this.l=this.l.filter((e=>e!==t))),"error"===e&&(this.e=this.e.filter((e=>e!==t)))}get onload(){return this.l[0]}set onload(e){this.l=[e]}get onerror(){return this.e[0]}set onerror(e){this.e=[e]}},We={addEventListener:{value(...e){const t=e[0],n=D(this,t)||[];n.push(e[1]),_(this,t,n)}},async:{get:N,set:N},defer:{get:N,set:N},onload:{get(){let e=D(this,"load");return e&&e[0]||null},set(e){_(this,"load",e?[e]:null)}},onerror:{get(){let e=D(this,"error");return e&&e[0]||null},set(e){_(this,"error",e?[e]:null)}},getAttribute:{value(e){return"src"===e?this.src:we(this,["getAttribute"],[e])}},setAttribute:{value(e,t){ke.includes(e)?this[e]=t:we(this,["setAttribute"],[e,t])}}},ke=m("src,type"),Ae=(e,t)=>{const n={innerHTML:Pe,innerText:Pe,src:{get(){return D(this,4)||""},set(e){const n=Oe(t,e,null),r=p.$config$;e=Oe(t,e,"script"),_(this,4,e),ye(this,["src"],e),n!==e&&ye(this,["dataset","ptsrc"],n),this.type&&P(r,e)&&ye(this,["type"],"text/javascript")}},textContent:Pe,type:{get(){return me(this,["type"])},set(e){He(e)||(_(this,5,e),ye(this,["type"],e))}},...We};k(e,n)},Pe={get(){const e=me(this,["type"]);return He(e)?D(this,3)||"":me(this,["innerHTML"])},set(e){_(this,3,e)}},He=e=>!e||"text/javascript"===e,De=(e,i,s)=>{const o=p.$config$,a=R(class extends s{appendChild(e){return this.insertBefore(e,null)}get href(){}set href(e){}insertBefore(e,s){const a=e[t]=this[t],c=e[n],l=e[r],$="SCRIPT"===l,u="IFRAME"===l;if($){const t=D(e,3),n=D(e,5);if(t){if(He(n)){const n=e.id;if(n&&P(o,n))ye(e,["type"],"text/javascript");else{const n=Ne(i,c,t,a,""),r=n?"pterror":"ptid",s=n||c;ye(e,["type"],"text/partytown-x"),ye(e,["dataset",r],s)}}ye(e,["innerHTML"],t)}}if(we(this,["insertBefore"],[e,s],2),u){const t=D(e,0);if(t&&t.startsWith("javascript:")){const e=t.split("javascript:")[1];Ne(i,c,e,a,"")}((e,t)=>{let n,r,i=0,s=()=>{g[e]&&g[e].$isInitialized$&&!g[e].$isLoading$?(n=D(t,1)?"error":"load",r=D(t,n),r&&r.map((e=>e({type:n})))):i++>2e3?(r=D(t,"error"),r&&r.map((e=>e({type:"error"})))):setTimeout(s,9)};s()})(c,e)}return $&&(fe(!0),p.$postMessage$([7,a])),e}get nodeName(){return"#s"===this[r]?"#document-fragment":this[r]}get nodeType(){return 3}get ownerDocument(){return i.$document$}},"Node");z(a,m("childNodes,firstChild,isConnected,lastChild,nextSibling,parentElement,parentNode,previousSibling")),e.Node=a},_e=m("AUDIO,CANVAS,VIDEO"),Ue=m("Audio,MediaSource"),Be=(e,n,r)=>{k(e,{body:{get:()=>n.$body$},cookie:{get(){return n.$isSameOrigin$?me(this,["cookie"]):(ie("get","cookie",n),"")},set(e){n.$isSameOrigin$?ye(this,["cookie"],e):ie("set","cookie",n)}},createElement:{value(e){if(e=e.toUpperCase(),!x.test(e))throw e+" not valid";const n="IFRAME"===e,r=this[t],i=(n?"f_":"")+O();we(this,["createElement"],[e],2,i);const s=U(r,i,e);if(n)rt({$winId$:i,$parentWinId$:r,$url$:"about:blank"},!0).$window$.fetch=fetch,ye(s,["srcdoc"],je());else if("SCRIPT"===e){const e=D(s,5);He(e)&&ye(s,["type"],"text/partytown")}return s}},createElementNS:{value(e,n){const r=O(),i=U(this[t],r,n,e);return we(this,["createElementNS"],[e,n],2,r),i}},createTextNode:{value(e){const n=this[t],r=O(),i=U(n,r,"#text");return we(this,["createTextNode"],[e],2,r),i}},createEvent:{value:e=>new Event(e)},currentScript:{get(){return n.$currentScriptId$?U(this[t],n.$currentScriptId$,"SCRIPT"):null}},defaultView:{get:()=>r?null:n.$window$},documentElement:{get:()=>n.$documentElement$},getElementsByTagName:{value(e){return"BODY"===(e=e.toUpperCase())?[n.$body$]:"HEAD"===e?[n.$head$]:we(this,["getElementsByTagName"],[e])}},head:{get:()=>n.$head$},images:{get(){return me(this,["images"])}},scripts:{get(){return me(this,["scripts"])}},implementation:{get(){return{hasFeature:()=>!0,createHTMLDocument:e=>{const t=O();return we(this,["implementation","createHTMLDocument"],[e],1,{$winId$:t}),rt({$winId$:t,$parentWinId$:t,$url$:n.$location$+"",$visibilityState$:"hidden"},!0,!0).$document$}}}},location:{get:()=>n.$location$,set(e){n.$location$.href=e+""}},nodeType:{value:9},parentNode:{value:null},parentElement:{value:null},readyState:{value:"complete"},visibilityState:{get:()=>n.$visibilityState$||"visible"}}),G(e,"compatMode,referrer,forms")},ze=(e,t)=>{k(e,{parentElement:{get(){return this.parentNode}},parentNode:{get:()=>t.$documentElement$}})},Fe=(e,t)=>{k(e,{localName:{get(){return this[r].toLowerCase()}},namespaceURI:{get(){return this[i]||"http://www.w3.org/1999/xhtml"}},nodeType:{value:1},tagName:{get(){return this[r]}}}),z(e,v),G(e,"id"),q(t),J(t,m("getClientRects,getBoundingClientRect"))},Ge=(e,t)=>{const n={};m("hash,host,hostname,href,origin,pathname,port,protocol,search").map((e=>{n[e]={get(){let n,r=D(this,4);if("string"!=typeof r){if(n=me(this,["href"]),""===n)return"protocol"===e?":":"";_(this,4,n),r=new URL(n)[e]}return Ce(t,r,null)[e]},set(n){let r;if("href"===e)if((e=>{try{return new URL(e),!0}catch(e){return!1}})(n))r=new URL(n);else{const e=t.$location$.href;r=Ce(t,e,null),r.href=new URL(n+"",r.href)}else r=Ce(t,this.href,null),r[e]=n;_(this,4,r.href),ye(this,["href"],r.href)}}})),k(e,n)},qe=(e,t)=>{const n={contentDocument:{get(){return Ze(this).$document$}},contentWindow:{get(){return Ze(this).$window$}},src:{get(){let e=D(this,0);return e&&e.startsWith("javascript:")?e:(e=Ze(this).$location$.href,e.startsWith("about:")?"":e)},set(e){if(e)if(e.startsWith("javascript:"))_(this,0,e);else if(!e.startsWith("about:")){let t,n=new XMLHttpRequest,r=Ze(this);r.$location$.href=e=Oe(r,e,"iframe"),r.$isLoading$=1,_(this,1,void 0),n.open("GET",e,!1),n.send(),t=n.status,t>199&&t<300?(ye(this,["srcdoc"],`<base href="${e}">`+n.responseText.replace(Ve,((e,t)=>{const n=[];let r,i=!1;for(;r=Xe.exec(t);){let[e]=r;e.startsWith("type=")&&(i=!0,e=e.replace(/(application|text)\/javascript/,"text/partytown")),n.push(e)}return i||n.push('type="text/partytown"'),`<script ${n.join(" ")}>`}))+je()),fe(!0),p.$postMessage$([7,r.$winId$])):(_(this,1,t),r.$isLoading$=0)}}},...We};k(e,n)},Je="((?:\\w|-)+(?:=(?:(?:\\w|-)+|'[^']*'|\"[^\"]*\")?)?)",Ve=new RegExp(`<script\\s*((${Je}\\s*)*)>`,"mg"),Xe=new RegExp(Je,"mg"),Ze=e=>{const r=e[n];return g[r]||rt({$winId$:r,$parentWinId$:e[t],$url$:me(e,["src"])||"about:blank"},!0),g[r]},Ye=e=>{const t=(e,t)=>{const{a:n,b:r,c:i,d:s,e:o,f:a}=we(e,[t],C);return new DOMMatrixReadOnly([n,r,i,s,o,a])},n={...e,getCTM:{value:function(){return t(this,"getCTM")}},getScreenCTM:{value:function(){return t(this,"getScreenCTM")}}};k(e,n)},Ke=(e,t)=>{e.NamedNodeMap=R(class extends t{constructor(e,t,n){return super(e,t,n),new Proxy(this,{get(e,t){const n=et[t];return n?n.bind(e,[t]):me(e,[t])},set(e,t,n){if(et[t])throw new Error("Can't set read-only property: "+String(t));return ye(e,[t],n),!0}})}},"NamedNodeMap")};function Qe(e,...t){return we(this,e,t,1)}const et={getNamedItem:Qe,getNamedItemNS:Qe,item:Qe,removeNamedItem:Qe,removeNamedItemNS:Qe,setNamedItem:Qe,setNamedItemNS:Qe},tt=(a,c,l,$,u,h)=>{let f,w,b,S;const I=class{constructor(e,c,l,$,u){this[t]=e||a,this[n]=c||f||O(),this[s]=l||[],this[r]=$||w,this[i]=u||b,this[o]=S&&S[o]||{},f=w=b=void 0}},E=new(R(class extends URL{assign(){se("location.assign(), noop")}reload(){se("location.reload(), noop")}replace(){se("location.replace(), noop")}},"Location"))(l),x=E.origin===p.$origin$||"about:blank"===E.origin,N=c===a,C={},P=()=>{let e,t,n=[];for(e in g)t=g[e],t.$parentWinId$!==a||t.$isTopWindow$||n.push(t);return n},F=R(class extends I{constructor(){super(a,a),this.addEventListener=(...e)=>{"load"===e[0]?C.$runWindowLoadEvent$&&setTimeout((()=>e[1]({type:"load"}))):we(this,["addEventListener"],e,2)};let r,i,o=this,l=0,d=()=>{l||((p.$initWindowMedia$||(e.$bridgeToMedia$=[me,ye,we,ve,k,O,t,n,s],p.$importScripts$(y("partytown-media.js?v=0.9.2")),p.$initWindowMedia$=e.$bridgeFromMedia$,delete e.$bridgeFromMedia$),p.$initWindowMedia$)(I,X,C,o,Ue),l=1)},g={},T=(e,t,n,r)=>{_e.includes(e)&&d();const i=g[e]?g[e]:e.includes("-")?g.UNKNOWN:g.I;return f=t,w=e,b=n,S=r,new i};var M,L;if(o.Window=F,o.name=name+`${ae(a)} (${a})`,De(o,C,I),(e=>{e.NodeList=R(ne,"NodeList")})(o),Ke(o,I),Ie(o,I,"CSSStyleDeclaration"),((e,t,n)=>{e[n]=R(class extends t{now(){return performance.now()}},n)})(o,I,"Performance"),((e,t)=>{const n=new Map;e.customElements={define(r,i,s){n.set(r,i),t[r.toUpperCase()]=i;const o=[i.name,i.observedAttributes];we(e,["customElements","define"],[r,o,s])},get:t=>n.get(t)||we(e,["customElements","get"],[t]),whenDefined:t=>n.has(t)?Promise.resolve():we(e,["customElements","whenDefined"],[t]),upgrade:t=>we(e,["customElements","upgrade"],[t])}})(o,g),p.$interfaces$.map((([e,t,r,i,c])=>{const l=nt[e]?V:"EventTarget"===t?X:"Object"===t?I:o[t],$=o[e]=R(12===i?class extends I{constructor(...t){super(),ve(this,e,t)}}:o[e]||class extends l{},e);c&&(g[c]=$),r.map((([e,t,r])=>{e in $.prototype||e in l.prototype||("string"==typeof t?W($,e,{get(){if(!H(this,e)){const r=this[n],i=[...this[s],e],c=o[t];c&&_(this,e,new c(a,r,i))}return D(this,e)},set(t){_(this,e,t)}}):5===t?A($,e,(function(...t){return we(this,[e],t)})):t>0&&(void 0!==r?A($,e,r):W($,e,{get(){return me(this,[e])},set(t){return ye(this,[e],t)}})))}))})),m("atob,btoa,crypto,indexedDB,setTimeout,setInterval,clearTimeout,clearInterval").map((t=>{delete F.prototype[t],t in o||(r=e[t],null!=r&&(o[t]="function"!=typeof r||r.toString().startsWith("class")?r:r.bind(e)))})),Object.getOwnPropertyNames(e).map((t=>{t in o||(o[t]=e[t])})),Ue.map((e=>j(o,e,{get:()=>(d(),o[e])}))),"trustedTypes"in e&&(o.trustedTypes=e.trustedTypes),Fe(o.Element,o.HTMLElement),Be(o.Document,C,h),M=o.DocumentFragment,B(M,11),z(M,v),Ge(o.HTMLAnchorElement,C),L=o.HTMLFormElement,k(L,{}),G(L,"elements"),qe(o.HTMLIFrameElement),Ae(o.HTMLScriptElement,C),Ye(o.SVGGraphicsElement),ze(o.HTMLHeadElement,C),ze(o.HTMLBodyElement,C),((e,t)=>{k(e,{parentElement:{value:null},parentNode:{get:()=>t.$document$}})})(o.HTMLHtmlElement,C),Te(o,"CSSStyleSheet"),B(o.Comment,8),B(o.DocumentType,10),Object.assign(C,{$winId$:a,$parentWinId$:c,$window$:new Proxy(o,{get:(e,t)=>{var n;if("string"!=typeof t||isNaN(t))return(null===(n=p.$config$.mainWindowAccessors)||void 0===n?void 0:n.includes(t))?me(this,[t]):e[t];{let e=P()[t];return e?e.$window$:void 0}},has:()=>!0}),$document$:T("#document",a+".d"),$documentElement$:T("HTML",a+".e"),$head$:T("HEAD",a+".h"),$body$:T("BODY",a+".b"),$location$:E,$visibilityState$:$,$isSameOrigin$:x,$isTopWindow$:N,$createNode$:T}),o.requestAnimationFrame=e=>setTimeout((()=>e(performance.now())),9),o.cancelAnimationFrame=e=>clearTimeout(e),o.requestIdleCallback=(e,t)=>(t=Date.now(),setTimeout((()=>e({didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))})),1)),o.cancelIdleCallback=e=>clearTimeout(e),Se(o,"localStorage",x,C),Se(o,"sessionStorage",x,C),x||(o.indexeddb=void 0),u)i={},o.history={pushState(e){i=e},replaceState(e){i=e},get state(){return i},length:0},o.indexeddb=void 0;else{const e=o.history.pushState.bind(o.history),t=o.history.replaceState.bind(o.history);o.history.pushState=(t,n,r)=>{!1!==C.$propagateHistoryChange$&&e(t,n,r)},o.history.replaceState=(e,n,r)=>{!1!==C.$propagateHistoryChange$&&t(e,n,r)}}o.Worker=void 0}get body(){return C.$body$}get document(){return C.$document$}get documentElement(){return C.$documentElement$}fetch(e,t){return e="string"==typeof e||e instanceof URL?String(e):e.url,fetch(Oe(C,e,"fetch"),t)}get frames(){return C.$window$}get frameElement(){return N?null:U(c,a,"IFRAME")}get globalThis(){return C.$window$}get head(){return C.$head$}get length(){return P().length}get location(){return E}set location(e){E.href=e+""}get Image(){return Re(C)}get navigator(){return(e=>{const t={sendBeacon:(t,n)=>{if(p.$config$.logSendBeaconRequests)try{se(`sendBeacon: ${Oe(e,t,null)}${n?", data: "+JSON.stringify(n):""}`)}catch(e){console.error(e)}try{return fetch(Oe(e,t,null),{method:"POST",body:n,mode:"no-cors",keepalive:!0}),!0}catch(e){return console.error(e),!1}}};for(let e in navigator)t[e]=navigator[e];return new Proxy(t,{set:(e,t,n)=>(navigator[t]=n,!0),get:(t,n)=>Object.prototype.hasOwnProperty.call(t,n)?t[n]:me(e.$window$,["navigator",n])})})(C)}get origin(){return E.origin}set origin(e){}get parent(){for(let e in g)if(g[e].$winId$===c)return g[e].$window$;return C.$window$}postMessage(...e){g[e[0]]&&(M(d)>50&&d.splice(0,5),d.push({$winId$:e[0],$data$:JSON.stringify(e[1])}),e=e.slice(1)),we(this,["postMessage"],e,3)}get self(){return C.$window$}get top(){for(let e in g)if(g[e].$isTopWindow$)return g[e].$window$;return C.$window$}get window(){return C.$window$}get XMLHttpRequest(){const e=XMLHttpRequest,t=String(e),n=R(class extends e{open(...e){e[1]=Oe(C,e[1],"xhr"),super.open(...e)}set withCredentials(e){}toString(){return t}},L(e));return n.prototype.constructor.toString=()=>t,n}},"Window"),V=class extends I{constructor(e,t,n,r){return super(e,t,n,r),new Proxy(this,{get:(e,t)=>me(e,[t]),set:(e,t,n)=>(ye(e,[t],n),!0)})}},X=class extends I{};return T.map((e=>X.prototype[e]=function(...t){return we(this,[e],t,2)})),G(F,"devicePixelRatio"),q(F),J(F,["getComputedStyle"]),new F,C},nt={DOMStringMap:1,NamedNodeMap:1},rt=({$winId$:e,$parentWinId$:t,$url$:n,$visibilityState$:r},i,s)=>(g[e]||(g[e]=tt(e,t,n,r,i,s),se(`Created ${e===t?"top":"iframe"} window ${ae(e)} environment`,e)),p.$postMessage$([7,e]),g[e]),it=[],st=t=>{const n=t.data,r=n[0],i=n[1];if(p.$isInitialized$)if(7===r)(async e=>{let t,n=e.$winId$,r=e.$instanceId$,i=U(n,r,"SCRIPT"),s=e.$content$,o=e.$url$,a=e.$orgUrl$,c="",l=g[n],$=["text/jscript","text/javascript","text/x-javascript","application/javascript","application/x-javascript","text/ecmascript","text/x-ecmascript","application/ecmascript"];if(o)try{if(o=Ce(l,o,"script")+"",_(i,4,o),p.$config$.logScriptExecution&&se(`Execute script src: ${a}`,n),t=await fetch(o),t.ok){let e=t.headers.get("content-type");$.some((t=>{var n,r,i;return null===(i=null===(n=null==e?void 0:e.toLowerCase)||void 0===n?void 0:(r=n.call(e)).includes)||void 0===i?void 0:i.call(r,t)}))&&(s=await t.text(),l.$currentScriptId$=r,Me(l,s,a||o)),Le(i,"load")}else c=t.statusText,Le(i,"error")}catch(e){console.error(e),c=String(e.stack||e),Le(i,"error")}else s&&(c=Ne(l,r,s,n,c));l.$currentScriptId$="",p.$postMessage$([6,n,r,c])})(i);else if(9===r)(({$winId$:e,$instanceId$:t,$refId$:n,$thisArg$:r,$args$:i})=>{if($[n])try{$[n].apply(K(e,t,[],r),K(e,t,[],i))}catch(e){console.error(e)}})(i);else if(10===r)(({$winId$:e,$forward$:t,$args$:n})=>{try{let r=g[e].$window$,i=0,s=M(t);for(;i<s;i++)i+1<s?r=r[t[i]]:r[t[i]].apply(r,K(null,e,[],n))}catch(e){console.error(e)}})(i);else if(5===r)rt(i);else if(8===r){if(1!==g[i].$isInitialized$){const e=i,t=g[e],n=t.$winId$===t.$parentWinId$?"top":"iframe";se(`Initialized ${n} window ${ae(e)} environment 🎉`,e)}g[i].$isInitialized$=1,g[i].$isLoading$=0}else if(14===r)g[i].$visibilityState$=n[2];else if(13===r){const e=i.$winId$,t=g[e];t.$location$.href=i.url,function(e,t,n){const r=t.$window$.history;switch(n.type){case 0:t.$propagateHistoryChange$=!1;try{r.pushState(n.state,"",n.newUrl)}catch(e){}t.$propagateHistoryChange$=!0;break;case 1:t.$propagateHistoryChange$=!1;try{r.replaceState(n.state,"",n.newUrl)}catch(e){}t.$propagateHistoryChange$=!0}}(i.$winId$,t,i)}else 15===r&&((e,t,n,r,i)=>{const s=U(t,n);s&&"function"==typeof s[r]&&s[r].apply(s,i)})(...n);else 1===r?((t=>{const n=p.$config$=JSON.parse(t.$config$),r=t.$origin$;p.$importScripts$=importScripts.bind(e),p.$interfaces$=t.$interfaces$,p.$libPath$=t.$libPath$,p.$origin$=r,p.$postMessage$=postMessage.bind(e),p.$sharedDataBuffer$=t.$sharedDataBuffer$,e.importScripts=void 0,delete e.postMessage,delete e.WorkerGlobalScope,m("resolveUrl,get,set,apply").map((e=>{n[e]&&(n[e]=new Function("return "+n[e])())}))})(i),p.$postMessage$([2])):3===r?(p.$interfaces$=[...p.$interfaces$,...i],p.$isInitialized$=1,se("Initialized web worker"),p.$postMessage$([4]),it.length&&se(`Queued ready messages: ${it.length}`),[...it].map(st),it.length=0):it.push(t)};e.onmessage=st,postMessage([0])})(self);