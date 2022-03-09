var Rr=Object.defineProperty,Or=Object.defineProperties;var Ar=Object.getOwnPropertyDescriptors;var Me=Object.getOwnPropertySymbols;var bn=Object.prototype.hasOwnProperty,vn=Object.prototype.propertyIsEnumerable;var mn=(t,e,n)=>e in t?Rr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,mt=(t,e)=>{for(var n in e||(e={}))bn.call(e,n)&&mn(t,n,e[n]);if(Me)for(var n of Me(e))vn.call(e,n)&&mn(t,n,e[n]);return t},bt=(t,e)=>Or(t,Ar(e));var yn=(t,e)=>{var n={};for(var i in t)bn.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&Me)for(var i of Me(t))e.indexOf(i)<0&&vn.call(t,i)&&(n[i]=t[i]);return n};function K(){}function Z(t,e){for(const n in e)t[n]=e[n];return t}function ui(t){return t()}function _n(){return Object.create(null)}function fe(t){t.forEach(ui)}function di(t){return typeof t=="function"}function ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let De;function Ol(t,e){return De||(De=document.createElement("a")),De.href=e,t===De.href}function xr(t){return Object.keys(t).length===0}function hi(t,...e){if(t==null)return K;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function X(t,e,n){t.$$.on_destroy.push(hi(e,n))}function Wt(t,e,n,i){if(t){const r=fi(t,e,n,i);return t[0](r)}}function fi(t,e,n,i){return t[1]&&i?Z(n.ctx.slice(),t[1](i(e))):n.ctx}function Vt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(e.dirty.length,r.length);for(let a=0;a<s;a+=1)o[a]=e.dirty[a]|r[a];return o}return e.dirty|r}return e.dirty}function qt(t,e,n,i,r,o){if(r){const s=fi(e,n,i,o);t.p(s,r)}}function Kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function St(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function wn(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Al(t,e){t.appendChild(e)}function st(t,e,n){t.insertBefore(e,n||null)}function $e(t){t.parentNode.removeChild(t)}function Cr(t){return document.createElement(t)}function pi(t){return document.createTextNode(t)}function xl(){return pi(" ")}function Gt(){return pi("")}function Pr(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Nr(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function kn(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:Nr(t,i,e[i])}function Lr(t){return Array.from(t.childNodes)}function Cl(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Mr(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}let we;function ye(t){we=t}function Se(){if(!we)throw new Error("Function called outside component initialization");return we}function Dr(t){Se().$$.on_mount.push(t)}function Ur(t){Se().$$.on_destroy.push(t)}function Br(){const t=Se();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const r=Mr(e,n);i.slice().forEach(o=>{o.call(t,r)})}}}function In(t,e){Se().$$.context.set(t,e)}function he(t){return Se().$$.context.get(t)}const be=[],Tn=[],Fe=[],En=[],Fr=Promise.resolve();let Rt=!1;function zr(){Rt||(Rt=!0,Fr.then(gi))}function Ot(t){Fe.push(t)}const vt=new Set;let Ue=0;function gi(){const t=we;do{for(;Ue<be.length;){const e=be[Ue];Ue++,ye(e),Hr(e.$$)}for(ye(null),be.length=0,Ue=0;Tn.length;)Tn.pop()();for(let e=0;e<Fe.length;e+=1){const n=Fe[e];vt.has(n)||(vt.add(n),n())}Fe.length=0}while(be.length);for(;En.length;)En.pop()();Rt=!1,vt.clear(),ye(t)}function Hr(t){if(t.fragment!==null){t.update(),fe(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ot)}}const ze=new Set;let Y;function Jt(){Y={r:0,c:[],p:Y}}function Yt(){Y.r||fe(Y.c),Y=Y.p}function P(t,e){t&&t.i&&(ze.delete(t),t.i(e))}function B(t,e,n,i){if(t&&t.o){if(ze.has(t))return;ze.add(t),Y.c.push(()=>{ze.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function mi(t,e){const n={},i={},r={$$scope:1};let o=t.length;for(;o--;){const s=t[o],a=e[o];if(a){for(const c in s)c in a||(i[c]=1);for(const c in a)r[c]||(n[c]=a[c],r[c]=1);t[o]=a}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function $n(t){return typeof t=="object"&&t!==null?t:{}}function Sn(t){t&&t.c()}function At(t,e,n,i){const{fragment:r,on_mount:o,on_destroy:s,after_update:a}=t.$$;r&&r.m(e,n),i||Ot(()=>{const c=o.map(ui).filter(di);s?s.push(...c):fe(c),t.$$.on_mount=[]}),a.forEach(Ot)}function xt(t,e){const n=t.$$;n.fragment!==null&&(fe(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function jr(t,e){t.$$.dirty[0]===-1&&(be.push(t),zr(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Xt(t,e,n,i,r,o,s,a=[-1]){const c=we;ye(t);const l=t.$$={fragment:null,ctx:null,props:o,update:K,not_equal:r,bound:_n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:_n(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};s&&s(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(d,h,...f)=>{const b=f.length?f[0]:h;return l.ctx&&r(l.ctx[d],l.ctx[d]=b)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](b),u&&jr(t,d)),h}):[],l.update(),u=!0,fe(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){const d=Lr(e.target);l.fragment&&l.fragment.l(d),d.forEach($e)}else l.fragment&&l.fragment.c();e.intro&&P(t.$$.fragment),At(t,e.target,e.anchor,e.customElement),gi()}ye(c)}class Qt{$destroy(){xt(this,1),this.$destroy=K}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!xr(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const w={allRenderFn:!1,cmpDidLoad:!0,cmpDidUnload:!1,cmpDidUpdate:!0,cmpDidRender:!0,cmpWillLoad:!0,cmpWillUpdate:!0,cmpWillRender:!0,connectedCallback:!0,disconnectedCallback:!0,element:!0,event:!0,hasRenderFn:!0,lifecycle:!0,hostListener:!0,hostListenerTargetWindow:!0,hostListenerTargetDocument:!0,hostListenerTargetBody:!0,hostListenerTargetParent:!1,hostListenerTarget:!0,member:!0,method:!0,mode:!0,observeAttribute:!0,prop:!0,propMutable:!0,reflect:!0,scoped:!0,shadowDom:!0,slot:!0,cssAnnotations:!0,state:!0,style:!0,svg:!0,updatable:!0,vdomAttribute:!0,vdomXlink:!0,vdomClass:!0,vdomFunctional:!0,vdomKey:!0,vdomListener:!0,vdomRef:!0,vdomPropOrAttr:!0,vdomRender:!0,vdomStyle:!0,vdomText:!0,watchCallback:!0,taskQueue:!0,hotModuleReplacement:!1,isDebug:!1,isDev:!1,isTesting:!1,hydrateServerSide:!1,hydrateClientSide:!1,lifecycleDOMEvents:!1,lazyLoad:!1,profile:!1,slotRelocation:!0,appendChildSlotFix:!1,cloneNodeFix:!1,hydratedAttribute:!1,hydratedClass:!0,safari10:!1,scriptDataOpts:!1,scopedSlotTextContentFix:!1,shadowDomShim:!1,slotChildNodesFix:!1,invisiblePrehydration:!0,propBoolean:!0,propNumber:!0,propString:!0,cssVarShim:!1,constructableCSS:!0,cmpShouldUpdate:!0,devTools:!1,dynamicImportShim:!1,shadowDelegatesFocus:!0,initializeNextTick:!1,asyncLoading:!1,asyncQueue:!1,transformTagName:!1,attachStyles:!0};let re,bi,at,vi=!1,Ve=!1,Zt=!1,A=!1,Rn=null,Ct=!1;const Re=typeof window!="undefined"?window:{};w.cssVarShim&&Re.CSS;const N=Re.document||{head:{}},en=Re.HTMLElement||class{},$={$flags$:0,$resourcesUrl$:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,i)=>t.addEventListener(e,n,i),rel:(t,e,n,i)=>t.removeEventListener(e,n,i),ce:(t,e)=>new CustomEvent(t,e)},Wr=t=>{Object.assign($,t)},qe=w.shadowDomShim&&w.shadowDom?(()=>(N.head.attachShadow+"").indexOf("[native")>-1)():!0,Vr=(()=>{let t=!1;try{N.addEventListener("e",null,Object.defineProperty({},"passive",{get(){t=!0}}))}catch{}return t})(),qr=t=>Promise.resolve(t),Kr=w.constructableCSS?(()=>{try{return new CSSStyleSheet,typeof new CSSStyleSheet().replace=="function"}catch{}return!1})():!1,Gr={},yi=(t,e,n,i)=>{n&&n.map(([r,o,s])=>{const a=Yr(t,r),c=Jr(e,s),l=Xr(r);$.ael(a,o,c,l),(e.$rmListeners$=e.$rmListeners$||[]).push(()=>$.rel(a,o,c,l))})},Jr=(t,e)=>n=>{try{w.lazyLoad||t.$hostElement$[e](n)}catch(i){Oe(i)}},Yr=(t,e)=>e&4?N:e&8?Re:e&16?N.body:t,Xr=t=>Vr?{passive:(t&1)!==0,capture:(t&2)!==0}:(t&2)!==0,On="http://www.w3.org/1999/xlink",ee=(t,e="")=>()=>{},An=new WeakMap,Qr=(t,e,n)=>{let i=Je.get(t);Kr&&n?(i=i||new CSSStyleSheet,i.replace(e)):i=e,Je.set(t,i)},Zr=(t,e,n,i)=>{let r=_i(e,n),o=Je.get(r);if(t=t.nodeType===11?t:N,o)if(typeof o=="string"){t=t.head||t;let s=An.get(t),a;s||An.set(t,s=new Set),s.has(r)||(a=N.createElement("style"),a.innerHTML=o,t.insertBefore(a,t.querySelector("link")),s&&s.add(r))}else t.adoptedStyleSheets.includes(o)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,o]);return r},eo=t=>{const e=t.$cmpMeta$,n=t.$hostElement$,i=e.$flags$,r=ee("attachStyles",e.$tagName$),o=Zr(qe&&n.shadowRoot?n.shadowRoot:n.getRootNode(),e,t.$modeName$);i&10&&(n["s-sc"]=o,n.classList.add(o+"-h"),i&2&&n.classList.add(o+"-s")),r()},_i=(t,e)=>"sc-"+(e&&t.$flags$&32?t.$tagName$+"-"+e:t.$tagName$),to=t=>Pi.map(e=>e(t)).find(e=>!!e),no=t=>Pi.push(t),io=t=>pe(t).$modeName$,xn={},ro="http://www.w3.org/2000/svg",oo="http://www.w3.org/1999/xhtml",so=t=>t!=null,tn=t=>(t=typeof t,t==="object"||t==="function"),R=(t,e,...n)=>{let i=null,r=null,o=null,s=!1,a=!1,c=[];const l=d=>{for(let h=0;h<d.length;h++)i=d[h],Array.isArray(i)?l(i):i!=null&&typeof i!="boolean"&&((s=typeof t!="function"&&!tn(i))&&(i=String(i)),s&&a?c[c.length-1].$text$+=i:c.push(s?Ke(null,i):i),a=s)};if(l(n),e&&(w.isDev&&t==="input"&&lo(e),w.vdomKey&&e.key&&(r=e.key),w.slotRelocation&&e.name&&(o=e.name),w.vdomClass)){const d=e.className||e.class;d&&(e.class=typeof d!="object"?d:Object.keys(d).filter(h=>d[h]).join(" "))}if(w.isDev&&c.some(wi)&&xo(`The <Host> must be the single root component. Make sure:
- You are NOT using hostData() and <Host> in the same component.
- <Host> is used once, and it's the single root component of the render() function.`),w.vdomFunctional&&typeof t=="function")return t(e===null?{}:e,c,ao);const u=Ke(t,null);return u.$attrs$=e,c.length>0&&(u.$children$=c),w.vdomKey&&(u.$key$=r),w.slotRelocation&&(u.$name$=o),u},Ke=(t,e)=>{const n={$flags$:0,$tag$:t,$text$:e,$elm$:null,$children$:null};return w.vdomAttribute&&(n.$attrs$=null),w.vdomKey&&(n.$key$=null),w.slotRelocation&&(n.$name$=null),n},ct={},wi=t=>t&&t.$tag$===ct,ao={forEach:(t,e)=>t.map(Cn).forEach(e),map:(t,e)=>t.map(Cn).map(e).map(co)},Cn=t=>({vattrs:t.$attrs$,vchildren:t.$children$,vkey:t.$key$,vname:t.$name$,vtag:t.$tag$,vtext:t.$text$}),co=t=>{if(typeof t.vtag=="function"){const n=Object.assign({},t.vattrs);return t.vkey&&(n.key=t.vkey),t.vname&&(n.name=t.vname),R(t.vtag,n,...t.vchildren||[])}const e=Ke(t.vtag,t.vtext);return e.$attrs$=t.vattrs,e.$children$=t.vchildren,e.$key$=t.vkey,e.$name$=t.vname,e},lo=t=>{const e=Object.keys(t),n=e.indexOf("value");if(n===-1)return;const i=e.indexOf("type"),r=e.indexOf("min"),o=e.indexOf("max"),s=e.indexOf("step");(n<i||n<r||n<o||n<s)&&Ci('The "value" prop of <input> should be set after "min", "max", "type" and "step"')},Pn=(t,e,n,i,r,o)=>{if(n!==i){let s=Dn(t,e),a=e.toLowerCase();if(e==="class"){const c=t.classList,l=Nn(n),u=Nn(i);c.remove(...l.filter(d=>d&&!u.includes(d))),c.add(...u.filter(d=>d&&!l.includes(d)))}else if(e==="style"){for(const c in n)(!i||i[c]==null)&&(c.includes("-")?t.style.removeProperty(c):t.style[c]="");for(const c in i)(!n||i[c]!==n[c])&&(c.includes("-")?t.style.setProperty(c,i[c]):t.style[c]=i[c])}else if(e!=="key")if(e==="ref")i&&i(t);else if(!t.__lookupSetter__(e)&&e[0]==="o"&&e[1]==="n")e[2]==="-"?e=e.slice(3):Dn(Re,a)?e=a.slice(2):e=a[2]+e.slice(3),n&&$.rel(t,e,n,!1),i&&$.ael(t,e,i,!1);else{const c=tn(i);if((s||c&&i!==null)&&!r)try{if(t.tagName.includes("-"))t[e]=i;else{let u=i==null?"":i;e==="list"?s=!1:(n==null||t[e]!=u)&&(t[e]=u)}}catch{}let l=!1;a!==(a=a.replace(/^xlink\:?/,""))&&(e=a,l=!0),i==null||i===!1?(i!==!1||t.getAttribute(e)==="")&&(l?t.removeAttributeNS(On,e):t.removeAttribute(e)):(!s||o&4||r)&&!c&&(i=i===!0?"":i,l?t.setAttributeNS(On,e,i):t.setAttribute(e,i))}}},uo=/\s/,Nn=t=>t?t.split(uo):[],ki=(t,e,n,i)=>{const r=e.$elm$.nodeType===11&&e.$elm$.host?e.$elm$.host:e.$elm$,o=t&&t.$attrs$||xn,s=e.$attrs$||xn;for(i in o)i in s||Pn(r,i,o[i],void 0,n,e.$flags$);for(i in s)Pn(r,i,o[i],s[i],n,e.$flags$)},Ge=(t,e,n,i)=>{let r=e.$children$[n],o=0,s,a,c;if(vi||(Zt=!0,r.$tag$==="slot"&&(re&&i.classList.add(re+"-s"),r.$flags$|=r.$children$?2:1)),r.$text$!==null)s=r.$elm$=N.createTextNode(r.$text$);else if(r.$flags$&1)s=r.$elm$=N.createTextNode("");else{if(A||(A=r.$tag$==="svg"),s=r.$elm$=N.createElementNS(A?ro:oo,r.$flags$&2?"slot-fb":r.$tag$),A&&r.$tag$==="foreignObject"&&(A=!1),ki(null,r,A),so(re)&&s["s-si"]!==re&&s.classList.add(s["s-si"]=re),r.$children$)for(o=0;o<r.$children$.length;++o)a=Ge(t,r,o,s),a&&s.appendChild(a);r.$tag$==="svg"?A=!1:s.tagName==="foreignObject"&&(A=!0)}return s["s-hn"]=at,r.$flags$&3&&(s["s-sr"]=!0,s["s-cr"]=bi,s["s-sn"]=r.$name$||"",c=t&&t.$children$&&t.$children$[n],c&&c.$tag$===r.$tag$&&t.$elm$&&ke(t.$elm$,!1)),s},ke=(t,e)=>{$.$flags$|=1;const n=t.childNodes;for(let i=n.length-1;i>=0;i--){const r=n[i];r["s-hn"]!==at&&r["s-ol"]&&(Ei(r).insertBefore(r,nn(r)),r["s-ol"].remove(),r["s-ol"]=void 0,Zt=!0),e&&ke(r,e)}$.$flags$&=-2},Ii=(t,e,n,i,r,o)=>{let s=t["s-cr"]&&t["s-cr"].parentNode||t,a;for(s.shadowRoot&&s.tagName===at&&(s=s.shadowRoot);r<=o;++r)i[r]&&(a=Ge(null,n,r,t),a&&(i[r].$elm$=a,s.insertBefore(a,nn(e))))},Ti=(t,e,n,i,r)=>{for(;e<=n;++e)(i=t[e])&&(r=i.$elm$,Ri(i),Ve=!0,r["s-ol"]?r["s-ol"].remove():ke(r,!0),r.remove())},ho=(t,e,n,i)=>{let r=0,o=0,s=0,a=0,c=e.length-1,l=e[0],u=e[c],d=i.length-1,h=i[0],f=i[d],b,y;for(;r<=c&&o<=d;)if(l==null)l=e[++r];else if(u==null)u=e[--c];else if(h==null)h=i[++o];else if(f==null)f=i[--d];else if(Be(l,h))oe(l,h),l=e[++r],h=i[++o];else if(Be(u,f))oe(u,f),u=e[--c],f=i[--d];else if(Be(l,f))(l.$tag$==="slot"||f.$tag$==="slot")&&ke(l.$elm$.parentNode,!1),oe(l,f),t.insertBefore(l.$elm$,u.$elm$.nextSibling),l=e[++r],f=i[--d];else if(Be(u,h))(l.$tag$==="slot"||f.$tag$==="slot")&&ke(u.$elm$.parentNode,!1),oe(u,h),t.insertBefore(u.$elm$,l.$elm$),u=e[--c],h=i[++o];else{for(s=-1,a=r;a<=c;++a)if(e[a]&&e[a].$key$!==null&&e[a].$key$===h.$key$){s=a;break}s>=0?(y=e[s],y.$tag$!==h.$tag$?b=Ge(e&&e[o],n,s,t):(oe(y,h),e[s]=void 0,b=y.$elm$),h=i[++o]):(b=Ge(e&&e[o],n,o,t),h=i[++o]),b&&Ei(l.$elm$).insertBefore(b,nn(l.$elm$))}r>c?Ii(t,i[d+1]==null?null:i[d+1].$elm$,n,i,o,d):o>d&&Ti(e,r,c)},Be=(t,e)=>t.$tag$===e.$tag$?t.$tag$==="slot"?t.$name$===e.$name$:t.$key$===e.$key$:!1,nn=t=>t&&t["s-ol"]||t,Ei=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,oe=(t,e)=>{const n=e.$elm$=t.$elm$,i=t.$children$,r=e.$children$,o=e.$tag$,s=e.$text$;let a;s===null?(A=o==="svg"?!0:o==="foreignObject"?!1:A,o==="slot"||ki(t,e,A),i!==null&&r!==null?ho(n,i,e,r):r!==null?(t.$text$!==null&&(n.textContent=""),Ii(n,null,e,r,0,r.length-1)):i!==null&&Ti(i,0,i.length-1),A&&o==="svg"&&(A=!1)):(a=n["s-cr"])?a.parentNode.textContent=s:t.$text$!==s&&(n.data=s)},$i=t=>{let e=t.childNodes,n,i,r,o,s,a;for(i=0,r=e.length;i<r;i++)if(n=e[i],n.nodeType===1){if(n["s-sr"]){for(s=n["s-sn"],n.hidden=!1,o=0;o<r;o++)if(a=e[o].nodeType,e[o]["s-hn"]!==n["s-hn"]||s!==""){if(a===1&&s===e[o].getAttribute("slot")){n.hidden=!0;break}}else if(a===1||a===3&&e[o].textContent.trim()!==""){n.hidden=!0;break}}$i(n)}},C=[],Si=t=>{let e,n,i,r,o,s,a=0,c=t.childNodes,l=c.length;for(;a<l;a++){if(e=c[a],e["s-sr"]&&(n=e["s-cr"])&&n.parentNode)for(i=n.parentNode.childNodes,r=e["s-sn"],s=i.length-1;s>=0;s--)n=i[s],!n["s-cn"]&&!n["s-nr"]&&n["s-hn"]!==e["s-hn"]&&(Ln(n,r)?(o=C.find(u=>u.$nodeToRelocate$===n),Ve=!0,n["s-sn"]=n["s-sn"]||r,o?o.$slotRefNode$=e:C.push({$slotRefNode$:e,$nodeToRelocate$:n}),n["s-sr"]&&C.map(u=>{Ln(u.$nodeToRelocate$,n["s-sn"])&&(o=C.find(d=>d.$nodeToRelocate$===n),o&&!u.$slotRefNode$&&(u.$slotRefNode$=o.$slotRefNode$))})):C.some(u=>u.$nodeToRelocate$===n)||C.push({$nodeToRelocate$:n}));e.nodeType===1&&Si(e)}},Ln=(t,e)=>t.nodeType===1?t.getAttribute("slot")===null&&e===""||t.getAttribute("slot")===e:t["s-sn"]===e?!0:e==="",Ri=t=>{t.$attrs$&&t.$attrs$.ref&&t.$attrs$.ref(null),t.$children$&&t.$children$.map(Ri)},fo=(t,e)=>{const n=t.$hostElement$,i=t.$cmpMeta$,r=t.$vnode$||Ke(null,null),o=wi(e)?e:R(null,null,e);at=n.tagName,i.$attrsToReflect$&&(o.$attrs$=o.$attrs$||{},i.$attrsToReflect$.map(([s,a])=>o.$attrs$[a]=n[s])),o.$tag$=null,o.$flags$|=4,t.$vnode$=o,o.$elm$=r.$elm$=n.shadowRoot||n,re=n["s-sc"],bi=n["s-cr"],vi=qe&&(i.$flags$&1)!==0,Ve=!1,oe(r,o);{if($.$flags$|=1,Zt){Si(o.$elm$);let s,a,c,l,u,d,h=0;for(;h<C.length;h++)s=C[h],a=s.$nodeToRelocate$,a["s-ol"]||(c=N.createTextNode(""),c["s-nr"]=a,a.parentNode.insertBefore(a["s-ol"]=c,a));for(h=0;h<C.length;h++)if(s=C[h],a=s.$nodeToRelocate$,s.$slotRefNode$){for(l=s.$slotRefNode$.parentNode,u=s.$slotRefNode$.nextSibling,c=a["s-ol"];c=c.previousSibling;)if(d=c["s-nr"],d&&d["s-sn"]===a["s-sn"]&&l===d.parentNode&&(d=d.nextSibling,!d||!d["s-nr"])){u=d;break}(!u&&l!==a.parentNode||a.nextSibling!==u)&&a!==u&&(!a["s-hn"]&&a["s-ol"]&&(a["s-hn"]=a["s-ol"].parentNode.nodeName),l.insertBefore(a,u))}else a.nodeType===1&&(a.hidden=!0)}Ve&&$i(o.$elm$),$.$flags$&=-2,C.length=0}},po=t=>w.lazyLoad?pe(t).$hostElement$:t,J=(t,e,n)=>{const i=po(t);return{emit:r=>(w.isDev&&!i.isConnected&&Ci(`The "${e}" event was emitted, but the dispatcher node is no longer connected to the dom.`),go(i,e,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:r}))}},go=(t,e,n)=>{const i=$.ce(e,n);return t.dispatchEvent(i),i},mo=(t,e)=>{},Oi=(t,e)=>(t.$flags$|=16,mo(t,t.$ancestorComponent$),Po(()=>bo(t,e))),bo=(t,e)=>{const n=t.$hostElement$,i=ee("scheduleUpdate",t.$cmpMeta$.$tagName$),r=n;let o;return e?o=ce(r,"componentWillLoad"):o=ce(r,"componentWillUpdate"),o=Mn(o,()=>ce(r,"componentWillRender")),i(),Mn(o,()=>vo(t,r,e))},vo=async(t,e,n)=>{const i=t.$hostElement$,r=ee("update",t.$cmpMeta$.$tagName$);i["s-rc"],n&&eo(t);const o=ee("render",t.$cmpMeta$.$tagName$);yo(t,e,i),o(),r(),_o(t)},yo=(t,e,n)=>{try{Rn=e,e=e.render&&e.render(),t.$flags$&=-17,t.$flags$|=2,(w.hasRenderFn||w.reflect)&&(w.vdomRender||w.reflect)&&(w.hydrateServerSide||fo(t,e))}catch(a){Oe(a,t.$hostElement$)}return Rn=null,null},_o=t=>{const e=t.$cmpMeta$.$tagName$,n=t.$hostElement$,i=ee("postUpdate",e),r=n;t.$ancestorComponent$,ce(r,"componentDidRender"),t.$flags$&64?(ce(r,"componentDidUpdate"),i()):(t.$flags$|=64,ce(r,"componentDidLoad"),i())},ce=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(i){Oe(i)}},Mn=(t,e)=>t&&t.then?t.then(e):e(),wo=(t,e)=>t!=null&&!tn(t)?e&4?t==="false"?!1:t===""||!!t:e&2?parseFloat(t):e&1?String(t):t:t,ko=(t,e)=>pe(t).$instanceValues$.get(e),Io=(t,e,n,i)=>{const r=pe(t),o=t,s=r.$instanceValues$.get(e),a=r.$flags$,c=o;if(n=wo(n,i.$members$[e][0]),n!==s){r.$instanceValues$.set(e,n);{if(i.$watchers$&&a&128){const l=i.$watchers$[e];l&&l.map(u=>{try{c[u](n,s,e)}catch(d){Oe(d,o)}})}if((a&18)===2){if(c.componentShouldUpdate&&c.componentShouldUpdate(n,s,e)===!1)return;Oi(r,!1)}}}},To=(t,e,n)=>{if(e.$members$){t.watchers&&(e.$watchers$=t.watchers);const i=Object.entries(e.$members$),r=t.prototype;i.map(([o,[s]])=>{(s&31||s&32)&&Object.defineProperty(r,o,{get(){return ko(this,o)},set(a){Io(this,o,a,e)},configurable:!0,enumerable:!0})});{const o=new Map;r.attributeChangedCallback=function(s,a,c){$.jmp(()=>{const l=o.get(s);if(this.hasOwnProperty(l))c=this[l],delete this[l];else if(r.hasOwnProperty(l)&&typeof this[l]=="number"&&this[l]==c)return;this[l]=c===null&&typeof this[l]=="boolean"?!1:c})},t.observedAttributes=i.filter(([s,a])=>a[0]&15).map(([s,a])=>{const c=a[1]||s;return o.set(c,s),a[0]&512&&e.$attrsToReflect$.push([s,c]),c})}}return t},Eo=async(t,e,n,i,r)=>{if((e.$flags$&32)===0&&(r=t.constructor,e.$flags$|=32,customElements.whenDefined(n.$tagName$).then(()=>e.$flags$|=128),r.style)){let s=r.style;typeof s!="string"&&(s=s[e.$modeName$=to(t)]);const a=_i(n,e.$modeName$);if(!Je.has(a)){const c=ee("registerStyles",n.$tagName$);Qr(a,s,!!(n.$flags$&1)),c()}}e.$ancestorComponent$,(()=>Oi(e,!0))()},$o=t=>{},So=t=>{if(($.$flags$&1)===0){const e=pe(t),n=e.$cmpMeta$,i=ee("connectedCallback",n.$tagName$);e.$flags$&1?(yi(t,e,n.$listeners$),$o(e.$lazyInstance$)):(e.$flags$|=1,n.$flags$&12&&Ro(t),n.$members$&&Object.entries(n.$members$).map(([r,[o]])=>{if(o&31&&t.hasOwnProperty(r)){const s=t[r];delete t[r],t[r]=s}}),Eo(t,e,n)),i()}},Ro=t=>{const e=t["s-cr"]=N.createComment("");e["s-cn"]=!0,t.insertBefore(e,t.firstChild)},Oo=t=>{if(($.$flags$&1)===0){const e=pe(t);e.$rmListeners$&&(e.$rmListeners$.map(n=>n()),e.$rmListeners$=void 0)}},rn=(t,e)=>{const n={$flags$:e[0],$tagName$:e[1]};n.$members$=e[2],n.$listeners$=e[3],n.$watchers$=t.$watchers$,n.$attrsToReflect$=[],!qe&&n.$flags$&1&&(n.$flags$|=8);const i=t.prototype.connectedCallback,r=t.prototype.disconnectedCallback;return Object.assign(t.prototype,{__registerHost(){Ao(this,n)},connectedCallback(){So(this),i&&i.call(this)},disconnectedCallback(){Oo(this),r&&r.call(this)},__attachShadow(){qe?this.attachShadow({mode:"open",delegatesFocus:!!(n.$flags$&16)}):this.shadowRoot=this}}),t.is=n.$tagName$,To(t,n)},Ai=new WeakMap,pe=t=>Ai.get(t),Ao=(t,e)=>{const n={$flags$:0,$hostElement$:t,$cmpMeta$:e,$instanceValues$:new Map};return yi(t,n,e.$listeners$),Ai.set(t,n)},Dn=(t,e)=>e in t,Oe=(t,e)=>(0,console.error)(t,e),xi=w.isTesting?["STENCIL:"]:["%cstencil","color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px"],xo=(...t)=>console.error(...xi,...t),Ci=(...t)=>console.warn(...xi,...t),Je=new Map,Pi=[],Pt=[],Ni=[],Li=(t,e)=>n=>{t.push(n),Ct||(Ct=!0,e&&$.$flags$&4?Co(Nt):$.raf(Nt))},Un=t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(n){Oe(n)}t.length=0},Nt=()=>{Un(Pt),Un(Ni),(Ct=Pt.length>0)&&$.raf(Nt)},Co=t=>qr().then(t),Pl=Li(Pt,!1),Po=Li(Ni,!0),Lt={isDev:!!w.isDev,isBrowser:!0,isServer:!1,isTesting:!!w.isTesting};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const Nl=(t,e)=>{t.componentOnReady?t.componentOnReady().then(n=>e(n)):No(()=>e(t))},Mi=(t,e=[])=>{const n={};return e.forEach(i=>{t.hasAttribute(i)&&(t.getAttribute(i)!==null&&(n[i]=t.getAttribute(i)),t.removeAttribute(i))}),n},Ll=(t,e,n,i)=>{if(typeof window!="undefined"){const r=window,o=r&&r.Ionic&&r.Ionic.config;if(o){const s=o.get("_ael");if(s)return s(t,e,n,i);if(o._ael)return o._ael(t,e,n,i)}}return t.addEventListener(e,n,i)},Ml=(t,e,n,i)=>{if(typeof window!="undefined"){const r=window,o=r&&r.Ionic&&r.Ionic.config;if(o){const s=o.get("_rel");if(s)return s(t,e,n,i);if(o._rel)return o._rel(t,e,n,i)}}return t.removeEventListener(e,n,i)},No=t=>typeof __zone_symbol__requestAnimationFrame=="function"?__zone_symbol__requestAnimationFrame(t):typeof requestAnimationFrame=="function"?requestAnimationFrame(t):setTimeout(t),Lo=t=>!!t.shadowRoot&&!!t.attachShadow,Mo=t=>{const e=t.closest("ion-item");return e?e.querySelector("ion-label"):null},Dl=t=>t.timeStamp||Date.now(),Ul=t=>{if(t){const e=t.changedTouches;if(e&&e.length>0){const n=e[0];return{x:n.clientX,y:n.clientY}}if(t.pageX!==void 0)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},Do=(t,e)=>{const n=t._original||t;return{_original:t,emit:Uo(n.emit.bind(n),e)}},Uo=(t,e=0)=>{let n;return(...i)=>{clearTimeout(n),n=setTimeout(t,e,...i)}};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */class Bo{constructor(){this.m=new Map}reset(e){this.m=new Map(Object.entries(e))}get(e,n){const i=this.m.get(e);return i!==void 0?i:n}getBoolean(e,n=!1){const i=this.m.get(e);return i===void 0?n:typeof i=="string"?i==="true":!!i}getNumber(e,n){const i=parseFloat(this.m.get(e));return isNaN(i)?n!==void 0?n:NaN:i}set(e,n){this.m.set(e,n)}}const E=new Bo,Fo=t=>{try{const e=t.sessionStorage.getItem(Di);return e!==null?JSON.parse(e):{}}catch{return{}}},zo=(t,e)=>{try{t.sessionStorage.setItem(Di,JSON.stringify(e))}catch{return}},Ho=t=>{const e={};return t.location.search.slice(1).split("&").map(n=>n.split("=")).map(([n,i])=>[decodeURIComponent(n),decodeURIComponent(i)]).filter(([n])=>jo(n,Bn)).map(([n,i])=>[n.slice(Bn.length),i]).forEach(([n,i])=>{e[n]=i}),e},jo=(t,e)=>t.substr(0,e.length)===e,Bn="ionic:",Di="ionic-persist-config",Wo=t=>Ui(t),Ye=(t,e)=>(typeof t=="string"&&(e=t,t=void 0),Wo(t).includes(e)),Ui=(t=window)=>{if(typeof t=="undefined")return[];t.Ionic=t.Ionic||{};let e=t.Ionic.platforms;return e==null&&(e=t.Ionic.platforms=Vo(t),e.forEach(n=>t.document.documentElement.classList.add(`plt-${n}`))),e},Vo=t=>{const e=E.get("platform");return Object.keys(Fn).filter(n=>{const i=e&&e[n];return typeof i=="function"?i(t):Fn[n](t)})},qo=t=>lt(t)&&!Fi(t),on=t=>!!(te(t,/iPad/i)||te(t,/Macintosh/i)&&lt(t)),Ko=t=>te(t,/iPhone/i),Go=t=>te(t,/iPhone|iPod/i)||on(t),Bi=t=>te(t,/android|sink/i),Jo=t=>Bi(t)&&!te(t,/mobile/i),Yo=t=>{const e=t.innerWidth,n=t.innerHeight,i=Math.min(e,n),r=Math.max(e,n);return i>390&&i<520&&r>620&&r<800},Xo=t=>{const e=t.innerWidth,n=t.innerHeight,i=Math.min(e,n),r=Math.max(e,n);return on(t)||Jo(t)||i>460&&i<820&&r>780&&r<1400},lt=t=>ts(t,"(any-pointer:coarse)"),Qo=t=>!lt(t),Fi=t=>zi(t)||Hi(t),zi=t=>!!(t.cordova||t.phonegap||t.PhoneGap),Hi=t=>{const e=t.Capacitor;return!!(e&&e.isNative)},Zo=t=>te(t,/electron/i),es=t=>!!(t.matchMedia&&t.matchMedia("(display-mode: standalone)").matches||t.navigator.standalone),te=(t,e)=>e.test(t.navigator.userAgent),ts=(t,e)=>t.matchMedia&&t.matchMedia(e).matches,Fn={ipad:on,iphone:Ko,ios:Go,android:Bi,phablet:Yo,tablet:Xo,cordova:zi,capacitor:Hi,electron:Zo,pwa:es,mobile:lt,mobileweb:qo,desktop:Qo,hybrid:Fi};let se;const sn=t=>t&&io(t)||se,Bl=(t={})=>{if(typeof window=="undefined")return;const e=window.document,n=window;Gr.config=E;const i=n.Ionic=n.Ionic||{},r={};t._ael&&(r.ael=t._ael),t._rel&&(r.rel=t._rel),t._ce&&(r.ce=t._ce),Wr(r);const o=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Fo(n)),{persistConfig:!1}),i.config),Ho(n)),t);E.reset(o),E.getBoolean("persistConfig")&&zo(n,o),Ui(n),i.config=E,i.mode=se=E.get("mode",e.documentElement.getAttribute("mode")||(Ye(n,"ios")?"ios":"md")),E.set("mode",se),e.documentElement.setAttribute("mode",se),e.documentElement.classList.add(se),E.getBoolean("_testing")&&E.set("animated",!1);const s=c=>c.tagName&&c.tagName.startsWith("ION-"),a=c=>["ios","md"].includes(c);no(c=>{for(;c;){const l=c.mode||c.getAttribute("mode");if(l){if(a(l))return l;s(c)&&console.warn('Invalid ionic mode: "'+l+'", expected: "ios" or "md"')}c=c.parentElement}return se})};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const ns=()=>{document.addEventListener("backbutton",()=>{})},is=()=>{const t=document;let e=!1;t.addEventListener("backbutton",()=>{if(e)return;let n=0,i=[];const r=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(a,c){i.push({priority:a,handler:c,id:n++})}}});t.dispatchEvent(r);const o=async a=>{try{if(a&&a.handler){const c=a.handler(s);c!=null&&await c}}catch(c){console.error(c)}},s=()=>{if(i.length>0){let a={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};i.forEach(c=>{c.priority>=a.priority&&(a=c)}),e=!0,i=i.filter(c=>c.id!==a.id),o(a).then(()=>e=!1)}};s()})},rs=100,os=99;var ss=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",MENU_BACK_BUTTON_PRIORITY:os,OVERLAY_BACK_BUTTON_PRIORITY:rs,blockHardwareBackButton:ns,startHardwareBackButton:is});const ie=[];function as(t,e){return{subscribe:ve(t,e).subscribe}}function ve(t,e=K){let n;const i=new Set;function r(a){if(ot(t,a)&&(t=a,n)){const c=!ie.length;for(const l of i)l[1](),ie.push(l,t);if(c){for(let l=0;l<ie.length;l+=2)ie[l][0](ie[l+1]);ie.length=0}}}function o(a){r(a(t))}function s(a,c=K){const l=[a,c];return i.add(l),i.size===1&&(n=e(r)||K),a(t),()=>{i.delete(l),i.size===0&&(n(),n=null)}}return{set:r,update:o,subscribe:s}}function cs(t,e,n){const i=!Array.isArray(t),r=i?[t]:t,o=e.length<2;return as(n,s=>{let a=!1;const c=[];let l=0,u=K;const d=()=>{if(l)return;u();const f=e(i?c[0]:c,s);o?s(f):u=di(f)?f:K},h=r.map((f,b)=>hi(f,y=>{c[b]=y,l&=~(1<<b),a&&d()},()=>{l|=1<<b}));return a=!0,d(),function(){fe(h),u()}})}const Xe={},Qe={};function yt(t){return bt(mt({},t.location),{state:t.history.state,key:t.history.state&&t.history.state.key||"initial"})}function ls(t,e){const n=[];let i=yt(t);return{get location(){return i},listen(r){n.push(r);const o=()=>{i=yt(t),r({location:i,action:"POP"})};return t.addEventListener("popstate",o),()=>{t.removeEventListener("popstate",o);const s=n.indexOf(r);n.splice(s,1)}},navigate(r,{state:o,replace:s=!1}={}){o=bt(mt({},o),{key:Date.now()+""});try{s?t.history.replaceState(o,null,r):t.history.pushState(o,null,r)}catch{t.location[s?"replace":"assign"](r)}i=yt(t),n.forEach(a=>a({location:i,action:"PUSH"}))}}}function us(t="/"){let e=0;const n=[{pathname:t,search:""}],i=[];return{get location(){return n[e]},addEventListener(r,o){},removeEventListener(r,o){},history:{get entries(){return n},get index(){return e},get state(){return i[e]},pushState(r,o,s){const[a,c=""]=s.split("?");e++,n.push({pathname:a,search:c}),i.push(r)},replaceState(r,o,s){const[a,c=""]=s.split("?");n[e]={pathname:a,search:c},i[e]=r}}}}const ds=Boolean(typeof window!="undefined"&&window.document&&window.document.createElement),Mt=ls(ds?window:us()),{navigate:hs}=Mt,ji=/^:(.+)/,zn=4,fs=3,ps=2,gs=1,ms=1;function Dt(t,e){return t.substr(0,e.length)===e}function bs(t){return t===""}function vs(t){return ji.test(t)}function Wi(t){return t[0]==="*"}function Ie(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function _t(t){return t.replace(/(^\/+|\/+$)/g,"")}function ys(t,e){const n=t.default?0:Ie(t.path).reduce((i,r)=>(i+=zn,bs(r)?i+=ms:vs(r)?i+=ps:Wi(r)?i-=zn+gs:i+=fs,i),0);return{route:t,score:n,index:e}}function _s(t){return t.map(ys).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}function Vi(t,e){let n,i;const[r]=e.split("?"),o=Ie(r),s=o[0]==="",a=_s(t);for(let c=0,l=a.length;c<l;c++){const u=a[c].route;let d=!1;if(u.default){i={route:u,params:{},uri:e};continue}const h=Ie(u.path),f={},b=Math.max(o.length,h.length);let y=0;for(;y<b;y++){const g=h[y],k=o[y];if(g!==void 0&&Wi(g)){const T=g==="*"?"*":g.slice(1);f[T]=o.slice(y).map(decodeURIComponent).join("/");break}if(k===void 0){d=!0;break}let x=ji.exec(g);if(x&&!s){const T=decodeURIComponent(k);f[x[1]]=T}else if(g!==k){d=!0;break}}if(!d){n={route:u,params:f,uri:"/"+o.slice(0,y).join("/")};break}}return n||i||null}function ws(t,e){return Vi([t],e)}function wt(t,e){return t+(e?`?${e}`:"")}function ks(t,e){if(Dt(t,"/"))return t;const[n,i]=t.split("?"),[r]=e.split("?"),o=Ie(n),s=Ie(r);if(o[0]==="")return wt(r,i);if(!Dt(o[0],".")){const l=s.concat(o).join("/");return wt((r==="/"?"":"/")+l,i)}const a=s.concat(o),c=[];return a.forEach(l=>{l===".."?c.pop():l!=="."&&c.push(l)}),wt("/"+c.join("/"),i)}function Hn(t,e){return`${_t(e==="/"?t:`${_t(t)}/${_t(e)}`)}/`}function Is(t){return!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Ts(t){let e;const n=t[9].default,i=Wt(n,t,t[8],null);return{c(){i&&i.c()},m(r,o){i&&i.m(r,o),e=!0},p(r,[o]){i&&i.p&&(!e||o&256)&&qt(i,n,r,r[8],e?Vt(n,r[8],o,null):Kt(r[8]),null)},i(r){e||(P(i,r),e=!0)},o(r){B(i,r),e=!1},d(r){i&&i.d(r)}}}function Es(t,e,n){let i,r,o,{$$slots:s={},$$scope:a}=e,{basepath:c="/"}=e,{url:l=null}=e;const u=he(Xe),d=he(Qe),h=ve([]);X(t,h,m=>n(6,r=m));const f=ve(null);let b=!1;const y=u||ve(l?{pathname:l}:Mt.location);X(t,y,m=>n(5,i=m));const g=d?d.routerBase:ve({path:c,uri:c});X(t,g,m=>n(7,o=m));const k=cs([g,f],([m,I])=>{if(I===null)return m;const{path:v}=m,{route:O,uri:gt}=I;return{path:O.default?v:O.path.replace(/\*.*$/,""),uri:gt}});function x(m){const{path:I}=o;let{path:v}=m;if(m._path=v,m.path=Hn(I,v),typeof window=="undefined"){if(b)return;const O=ws(m,i.pathname);O&&(f.set(O),b=!0)}else h.update(O=>(O.push(m),O))}function T(m){h.update(I=>{const v=I.indexOf(m);return I.splice(v,1),I})}return u||(Dr(()=>Mt.listen(I=>{y.set(I.location)})),In(Xe,y)),In(Qe,{activeRoute:f,base:g,routerBase:k,registerRoute:x,unregisterRoute:T}),t.$$set=m=>{"basepath"in m&&n(3,c=m.basepath),"url"in m&&n(4,l=m.url),"$$scope"in m&&n(8,a=m.$$scope)},t.$$.update=()=>{if(t.$$.dirty&128){const{path:m}=o;h.update(I=>(I.forEach(v=>v.path=Hn(m,v._path)),I))}if(t.$$.dirty&96){const m=Vi(r,i.pathname);f.set(m)}},[h,y,g,c,l,i,r,o,a,s]}class Fl extends Qt{constructor(e){super();Xt(this,e,Es,Ts,ot,{basepath:3,url:4})}}const $s=t=>({params:t&4,location:t&16}),jn=t=>({params:t[2],location:t[4]});function Wn(t){let e,n,i,r;const o=[Rs,Ss],s=[];function a(c,l){return c[0]!==null?0:1}return e=a(t),n=s[e]=o[e](t),{c(){n.c(),i=Gt()},m(c,l){s[e].m(c,l),st(c,i,l),r=!0},p(c,l){let u=e;e=a(c),e===u?s[e].p(c,l):(Jt(),B(s[u],1,1,()=>{s[u]=null}),Yt(),n=s[e],n?n.p(c,l):(n=s[e]=o[e](c),n.c()),P(n,1),n.m(i.parentNode,i))},i(c){r||(P(n),r=!0)},o(c){B(n),r=!1},d(c){s[e].d(c),c&&$e(i)}}}function Ss(t){let e;const n=t[10].default,i=Wt(n,t,t[9],jn);return{c(){i&&i.c()},m(r,o){i&&i.m(r,o),e=!0},p(r,o){i&&i.p&&(!e||o&532)&&qt(i,n,r,r[9],e?Vt(n,r[9],o,$s):Kt(r[9]),jn)},i(r){e||(P(i,r),e=!0)},o(r){B(i,r),e=!1},d(r){i&&i.d(r)}}}function Rs(t){let e,n,i;const r=[{location:t[4]},t[2],t[3]];var o=t[0];function s(a){let c={};for(let l=0;l<r.length;l+=1)c=Z(c,r[l]);return{props:c}}return o&&(e=new o(s())),{c(){e&&Sn(e.$$.fragment),n=Gt()},m(a,c){e&&At(e,a,c),st(a,n,c),i=!0},p(a,c){const l=c&28?mi(r,[c&16&&{location:a[4]},c&4&&$n(a[2]),c&8&&$n(a[3])]):{};if(o!==(o=a[0])){if(e){Jt();const u=e;B(u.$$.fragment,1,0,()=>{xt(u,1)}),Yt()}o?(e=new o(s()),Sn(e.$$.fragment),P(e.$$.fragment,1),At(e,n.parentNode,n)):e=null}else o&&e.$set(l)},i(a){i||(e&&P(e.$$.fragment,a),i=!0)},o(a){e&&B(e.$$.fragment,a),i=!1},d(a){a&&$e(n),e&&xt(e,a)}}}function Os(t){let e,n,i=t[1]!==null&&t[1].route===t[7]&&Wn(t);return{c(){i&&i.c(),e=Gt()},m(r,o){i&&i.m(r,o),st(r,e,o),n=!0},p(r,[o]){r[1]!==null&&r[1].route===r[7]?i?(i.p(r,o),o&2&&P(i,1)):(i=Wn(r),i.c(),P(i,1),i.m(e.parentNode,e)):i&&(Jt(),B(i,1,1,()=>{i=null}),Yt())},i(r){n||(P(i),n=!0)},o(r){B(i),n=!1},d(r){i&&i.d(r),r&&$e(e)}}}function As(t,e,n){let i,r,{$$slots:o={},$$scope:s}=e,{path:a=""}=e,{component:c=null}=e;const{registerRoute:l,unregisterRoute:u,activeRoute:d}=he(Qe);X(t,d,g=>n(1,i=g));const h=he(Xe);X(t,h,g=>n(4,r=g));const f={path:a,default:a===""};let b={},y={};return l(f),typeof window!="undefined"&&Ur(()=>{u(f)}),t.$$set=g=>{n(13,e=Z(Z({},e),St(g))),"path"in g&&n(8,a=g.path),"component"in g&&n(0,c=g.component),"$$scope"in g&&n(9,s=g.$$scope)},t.$$.update=()=>{t.$$.dirty&2&&i&&i.route===f&&n(2,b=i.params);{const g=e,{path:k,component:x}=g,T=yn(g,["path","component"]);n(3,y=T)}},e=St(e),[c,i,b,y,r,d,h,f,a,s,o]}class zl extends Qt{constructor(e){super();Xt(this,e,As,Os,ot,{path:8,component:0})}}function xs(t){let e,n,i,r;const o=t[16].default,s=Wt(o,t,t[15],null);let a=[{href:t[0]},{"aria-current":t[2]},t[1],t[6]],c={};for(let l=0;l<a.length;l+=1)c=Z(c,a[l]);return{c(){e=Cr("a"),s&&s.c(),kn(e,c)},m(l,u){st(l,e,u),s&&s.m(e,null),n=!0,i||(r=Pr(e,"click",t[5]),i=!0)},p(l,[u]){s&&s.p&&(!n||u&32768)&&qt(s,o,l,l[15],n?Vt(o,l[15],u,null):Kt(l[15]),null),kn(e,c=mi(a,[(!n||u&1)&&{href:l[0]},(!n||u&4)&&{"aria-current":l[2]},u&2&&l[1],u&64&&l[6]]))},i(l){n||(P(s,l),n=!0)},o(l){B(s,l),n=!1},d(l){l&&$e(e),s&&s.d(l),i=!1,r()}}}function Cs(t,e,n){let i;const r=["to","replace","state","getProps"];let o=wn(e,r),s,a,{$$slots:c={},$$scope:l}=e,{to:u="#"}=e,{replace:d=!1}=e,{state:h={}}=e,{getProps:f=()=>({})}=e;const{base:b}=he(Qe);X(t,b,v=>n(14,a=v));const y=he(Xe);X(t,y,v=>n(13,s=v));const g=Br();let k,x,T,m;function I(v){if(g("click",v),Is(v)){v.preventDefault();const O=s.pathname===k||d;hs(k,{state:h,replace:O})}}return t.$$set=v=>{e=Z(Z({},e),St(v)),n(6,o=wn(e,r)),"to"in v&&n(7,u=v.to),"replace"in v&&n(8,d=v.replace),"state"in v&&n(9,h=v.state),"getProps"in v&&n(10,f=v.getProps),"$$scope"in v&&n(15,l=v.$$scope)},t.$$.update=()=>{t.$$.dirty&16512&&n(0,k=u==="/"?a.uri:ks(u,a.uri)),t.$$.dirty&8193&&n(11,x=Dt(s.pathname,k)),t.$$.dirty&8193&&n(12,T=k===s.pathname),t.$$.dirty&4096&&n(2,i=T?"page":void 0),t.$$.dirty&15361&&n(1,m=f({location:s,href:k,isPartiallyCurrent:x,isCurrent:T}))},[k,m,i,b,y,I,o,u,d,h,f,x,T,s,a,l,c]}class Hl extends Qt{constructor(e){super();Xt(this,e,Cs,xs,ot,{to:7,replace:8,state:9,getProps:10})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Ns=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=t[n++];e[i++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=t[n++],s=t[n++],a=t[n++],c=((r&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const o=t[n++],s=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(o&63)<<6|s&63)}}return e.join("")},Ls={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const o=t[r],s=r+1<t.length,a=s?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=o>>2,d=(o&3)<<4|a>>4;let h=(a&15)<<2|l>>6,f=l&63;c||(f=64,s||(h=64)),i.push(n[u],n[d],n[h],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ps(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ns(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const o=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,o==null||a==null||l==null||d==null)throw Error();const h=o<<2|a>>4;if(i.push(h),l!==64){const f=a<<4&240|l>>2;if(i.push(f),d!==64){const b=l<<6&192|d;i.push(b)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Ms=function(t){try{return Ls.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ds(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(S())}function Us(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Bs(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fs(){const t=S();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs="FirebaseError";class ge extends Error{constructor(e,n,i){super(n);this.code=e,this.customData=i,this.name=zs,Object.setPrototypeOf(this,ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ae.prototype.create)}}class Ae{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,o=this.errors[e],s=o?Hs(o,i):"Error",a=`${this.serviceName}: ${s} (${r}).`;return new ge(r,a,i)}}function Hs(t,e){return t.replace(js,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const js=/\{\$([^}]+)}/g;function Ws(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qi(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const o=t[r],s=e[r];if(Vn(o)&&Vn(s)){if(!qi(o,s))return!1}else if(o!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Vn(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Vs(t,e){const n=new qs(t,e);return n.subscribe.bind(n)}class qs{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Ks(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=kt),r.error===void 0&&(r.error=kt),r.complete===void 0&&(r.complete=kt);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ks(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kt(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t){return t&&t._delegate?t._delegate:t}class Ze{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_||(_={}));const Gs={debug:_.DEBUG,verbose:_.VERBOSE,info:_.INFO,warn:_.WARN,error:_.ERROR,silent:_.SILENT},Js=_.INFO,Ys={[_.DEBUG]:"log",[_.VERBOSE]:"log",[_.INFO]:"info",[_.WARN]:"warn",[_.ERROR]:"error"},Xs=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=Ys[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ki{constructor(e){this.name=e,this._logLevel=Js,this._logHandler=Xs,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gs[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_.DEBUG,...e),this._logHandler(this,_.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_.VERBOSE,...e),this._logHandler(this,_.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_.INFO,...e),this._logHandler(this,_.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_.WARN,...e),this._logHandler(this,_.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_.ERROR,...e),this._logHandler(this,_.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zs(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Zs(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ut="@firebase/app",qn="0.7.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new Ki("@firebase/app"),ea="@firebase/app-compat",ta="@firebase/analytics-compat",na="@firebase/analytics",ia="@firebase/app-check-compat",ra="@firebase/app-check",oa="@firebase/auth",sa="@firebase/auth-compat",aa="@firebase/database",ca="@firebase/database-compat",la="@firebase/functions",ua="@firebase/functions-compat",da="@firebase/installations",ha="@firebase/installations-compat",fa="@firebase/messaging",pa="@firebase/messaging-compat",ga="@firebase/performance",ma="@firebase/performance-compat",ba="@firebase/remote-config",va="@firebase/remote-config-compat",ya="@firebase/storage",_a="@firebase/storage-compat",wa="@firebase/firestore",ka="@firebase/firestore-compat",Ia="firebase",Ta="9.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="[DEFAULT]",$a={[Ut]:"fire-core",[ea]:"fire-core-compat",[na]:"fire-analytics",[ta]:"fire-analytics-compat",[ra]:"fire-app-check",[ia]:"fire-app-check-compat",[oa]:"fire-auth",[sa]:"fire-auth-compat",[aa]:"fire-rtdb",[ca]:"fire-rtdb-compat",[la]:"fire-fn",[ua]:"fire-fn-compat",[da]:"fire-iid",[ha]:"fire-iid-compat",[fa]:"fire-fcm",[pa]:"fire-fcm-compat",[ga]:"fire-perf",[ma]:"fire-perf-compat",[ba]:"fire-rc",[va]:"fire-rc-compat",[ya]:"fire-gcs",[_a]:"fire-gcs-compat",[wa]:"fire-fst",[ka]:"fire-fst-compat","fire-js":"fire-js",[Ia]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new Map,Kn=new Map;function Sa(t,e){try{t.container.addComponent(e)}catch(n){an.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function et(t){const e=t.name;if(Kn.has(e))return an.debug(`There were multiple attempts to register component ${e}.`),!1;Kn.set(e,t);for(const n of Gi.values())Sa(n,t);return!0}function Ji(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Oa=new Ae("app","Firebase",Ra);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=Ta;function Aa(t=Ea){const e=Gi.get(t);if(!e)throw Oa.create("no-app",{appName:t});return e}function le(t,e,n){var i;let r=(i=$a[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const o=r.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${r}" with version "${e}":`];o&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),an.warn(a.join(" "));return}et(new Ze(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t){et(new Ze("platform-logger",e=>new Qs(e),"PRIVATE")),le(Ut,qn,t),le(Ut,qn,"esm2017"),le("fire-js","")}xa("");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function cn(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function Yi(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ca=Yi,Xi=new Ae("auth","Firebase",Yi());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=new Ki("@firebase/auth");function He(t,...e){Gn.logLevel<=_.ERROR&&Gn.error(`Auth (${ut}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t,...e){throw ln(t,...e)}function L(t,...e){return ln(t,...e)}function Pa(t,e,n){const i=Object.assign(Object.assign({},Ca()),{[e]:n});return new Ae("auth","Firebase",i).create(e,{appName:t.name})}function ln(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Xi.create(t,...e)}function p(t,e,...n){if(!t)throw ln(e,...n)}function D(t){const e="INTERNAL ASSERTION FAILED: "+t;throw He(e),new Error(e)}function z(t,e){t||D(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new Map;function U(t){z(t instanceof Function,"Expected a class definition");let e=Jn.get(t);return e?(z(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jn.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(t,e){const n=Ji(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),o=n.getOptions();if(qi(o,e!=null?e:{}))return r;F(r,"already-initialized")}return n.initialize({options:e})}function La(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(U);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ma(){return Yn()==="http:"||Yn()==="https:"}function Yn(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ma()||Us()||"connection"in navigator)?navigator.onLine:!0}function Ua(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.shortDelay=e,this.longDelay=n,z(n>e,"Short delay should be less than long delay!"),this.isMobile=Ds()||Bs()}get(){return Da()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t,e){z(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;D("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;D("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;D("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=new Ce(3e4,6e4);function Zi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function dt(t,e,n,i,r={}){return er(t,r,async()=>{let o={},s={};i&&(e==="GET"?s=i:o={body:JSON.stringify(i)});const a=xe(Object.assign({key:t.config.apiKey},s)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Qi.fetch()(nr(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},o))})}async function er(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Ba),e);try{const r=new za(t),o=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw It(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw It(t,"credential-already-in-use",s);if(c==="EMAIL_EXISTS")throw It(t,"email-already-in-use",s);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Pa(t,u,l);F(t,u)}}catch(r){if(r instanceof ge)throw r;F(t,"network-request-failed")}}async function tr(t,e,n,i,r={}){const o=await dt(t,e,n,i,r);return"mfaPendingCredential"in o&&F(t,"multi-factor-auth-required",{_serverResponse:o}),o}function nr(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?un(t.config,r):`${t.config.apiScheme}://${r}`}class za{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(L(this.auth,"network-request-failed")),Fa.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function It(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=L(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(t,e){return dt(t,"POST","/v1/accounts:delete",e)}async function ja(t,e){return dt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wa(t,e=!1){const n=me(t),i=await n.getIdToken(e),r=dn(i);p(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o=typeof r.firebase=="object"?r.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:r,token:i,authTime:_e(Tt(r.auth_time)),issuedAtTime:_e(Tt(r.iat)),expirationTime:_e(Tt(r.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Tt(t){return Number(t)*1e3}function dn(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return He("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ms(n);return r?JSON.parse(r):(He("Failed to decode base64 JWT payload"),null)}catch(r){return He("Caught error parsing JWT payload as JSON",r),null}}function Va(t){const e=dn(t);return p(e,"internal-error"),p(typeof e.exp!="undefined","internal-error"),p(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Te(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof ge&&qa(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function qa({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_e(this.lastLoginAt),this.creationTime=_e(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Te(t,ja(n,{idToken:i}));p(r==null?void 0:r.users.length,n,"internal-error");const o=r.users[0];t._notifyReloadListener(o);const s=((e=o.providerUserInfo)===null||e===void 0?void 0:e.length)?Ya(o.providerUserInfo):[],a=Ja(t.providerData,s),c=t.isAnonymous,l=!(t.email&&o.passwordHash)&&!(a==null?void 0:a.length),u=c?l:!1,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new ir(o.createdAt,o.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Ga(t){const e=me(t);await tt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ja(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Ya(t){return t.map(e=>{var{providerId:n}=e,i=cn(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xa(t,e){const n=await er(t,{},async()=>{const i=xe({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=t.config,s=nr(t,r,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qi.fetch()(s,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){p(e.idToken,"internal-error"),p(typeof e.idToken!="undefined","internal-error"),p(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Va(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return p(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:o}=await Xa(e,n);this.updateTokensAndExpiration(i,r,Number(o))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:o}=n,s=new Ee;return i&&(p(typeof i=="string","internal-error",{appName:e}),s.refreshToken=i),r&&(p(typeof r=="string","internal-error",{appName:e}),s.accessToken=r),o&&(p(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ee,this.toJSON())}_performRefresh(){return D("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t,e){p(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Q{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,o=cn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ka(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ir(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Te(this,this.stsTokenManager.getToken(this.auth,e));return p(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Wa(this,e)}reload(){return Ga(this)}_assign(e){this!==e&&(p(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Q(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){p(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await tt(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Te(this,Ha(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,o,s,a,c,l,u;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,f=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,b=(s=n.photoURL)!==null&&s!==void 0?s:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,g=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:m,isAnonymous:I,providerData:v,stsTokenManager:O}=n;p(T&&O,e,"internal-error");const gt=Ee.fromJSON(this.name,O);p(typeof T=="string",e,"internal-error"),H(d,e.name),H(h,e.name),p(typeof m=="boolean",e,"internal-error"),p(typeof I=="boolean",e,"internal-error"),H(f,e.name),H(b,e.name),H(y,e.name),H(g,e.name),H(k,e.name),H(x,e.name);const Le=new Q({uid:T,auth:e,email:h,emailVerified:m,displayName:d,isAnonymous:I,photoURL:b,phoneNumber:f,tenantId:y,stsTokenManager:gt,createdAt:k,lastLoginAt:x});return v&&Array.isArray(v)&&(Le.providerData=v.map(Sr=>Object.assign({},Sr))),g&&(Le._redirectEventId=g),Le}static async _fromIdTokenResponse(e,n,i=!1){const r=new Ee;r.updateFromServerResponse(n);const o=new Q({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await tt(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rr.type="NONE";const Xn=rr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t,e,n){return`firebase:${t}:${e}:${n}`}class ue{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:o}=this.auth;this.fullUserKey=je(this.userKey,r.apiKey,o),this.fullPersistenceKey=je("persistence",r.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Q._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new ue(U(Xn),e,i);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let o=r[0]||U(Xn);const s=je(i,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(s);if(u){const d=Q._fromJSON(e,u);l!==o&&(a=d),o=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!o._shouldAllowMigration||!c.length?new ue(o,e,i):(o=c[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==o)try{await l._remove(s)}catch{}})),new ue(o,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ar(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(or(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lr(e))return"Blackberry";if(ur(e))return"Webos";if(hn(e))return"Safari";if((e.includes("chrome/")||sr(e))&&!e.includes("edge/"))return"Chrome";if(cr(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function or(t=S()){return/firefox\//i.test(t)}function hn(t=S()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sr(t=S()){return/crios\//i.test(t)}function ar(t=S()){return/iemobile/i.test(t)}function cr(t=S()){return/android/i.test(t)}function lr(t=S()){return/blackberry/i.test(t)}function ur(t=S()){return/webos/i.test(t)}function ht(t=S()){return/iphone|ipad|ipod/i.test(t)}function Qa(t=S()){var e;return ht(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function Za(){return Fs()&&document.documentMode===10}function dr(t=S()){return ht(t)||cr(t)||ur(t)||lr(t)||/windows phone/i.test(t)||ar(t)}function ec(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t,e=[]){let n;switch(t){case"Browser":n=Qn(S());break;case"Worker":n=`${Qn(S())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ut}/${i}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zn(this),this.idTokenSubscription=new Zn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xi,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=U(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if((i=this._popupRedirectResolver)===null||i===void 0?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=i==null?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(e);(!r||r===o)&&(s==null?void 0:s.user)&&(i=s.user)}return i?i._redirectEventId?(p(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await tt(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ua()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?me(e):null;return n&&p(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&p(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(U(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ae("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&U(e)||this._popupRedirectResolver;p(n,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[U(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return p(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return p(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function fn(t){return me(t)}class Zn{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vs(n=>this.observer=n)}get next(){return p(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return D("not implemented")}_getIdTokenResponse(e){return D("not implemented")}_linkToIdToken(e,n){return D("not implemented")}_getReauthenticationResolver(e){return D("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function de(t,e){return tr(t,"POST","/v1/accounts:signInWithIdp",Zi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="http://localhost";class ne extends fr{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new ne(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):F("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,o=cn(n,["providerId","signInMethod"]);if(!i||!r)return null;const s=new ne(i,r);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return de(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,de(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,de(e,n)}buildRequest(){const e={requestUri:nc,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xe(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends pr{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j extends Pe{constructor(){super("facebook.com")}static credential(e){return ne._fromParams({providerId:j.PROVIDER_ID,signInMethod:j.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return j.credentialFromTaggedObject(e)}static credentialFromError(e){return j.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return j.credential(e.oauthAccessToken)}catch{return null}}}j.FACEBOOK_SIGN_IN_METHOD="facebook.com";j.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W extends Pe{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return ne._fromParams({providerId:W.PROVIDER_ID,signInMethod:W.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return W.credentialFromTaggedObject(e)}static credentialFromError(e){return W.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return W.credential(n,i)}catch{return null}}}W.GOOGLE_SIGN_IN_METHOD="google.com";W.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V extends Pe{constructor(){super("github.com")}static credential(e){return ne._fromParams({providerId:V.PROVIDER_ID,signInMethod:V.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return V.credentialFromTaggedObject(e)}static credentialFromError(e){return V.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return V.credential(e.oauthAccessToken)}catch{return null}}}V.GITHUB_SIGN_IN_METHOD="github.com";V.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q extends Pe{constructor(){super("twitter.com")}static credential(e,n){return ne._fromParams({providerId:q.PROVIDER_ID,signInMethod:q.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return q.credentialFromTaggedObject(e)}static credentialFromError(e){return q.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return q.credential(n,i)}catch{return null}}}q.TWITTER_SIGN_IN_METHOD="twitter.com";q.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ic(t,e){return tr(t,"POST","/v1/accounts:signUp",Zi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const o=await Q._fromIdTokenResponse(e,i,r),s=ei(i);return new G({user:o,providerId:s,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=ei(i);return new G({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function ei(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jl(t){var e;const n=fn(t);if(await n._initializationPromise,(e=n.currentUser)===null||e===void 0?void 0:e.isAnonymous)return new G({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await ic(n,{returnSecureToken:!0}),r=await G._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends ge{constructor(e,n,i,r){var o;super(n.code,n.message);this.operationType=i,this.user=r,Object.setPrototypeOf(this,nt.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new nt(e,n,i,r)}}function gr(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?nt._fromErrorAndOperation(t,o,e,i):o})}async function rc(t,e,n=!1){const i=await Te(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return G._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oc(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const o=await Te(t,gr(i,r,e,t),n);p(o.idToken,i,"internal-error");const s=dn(o.idToken);p(s,i,"internal-error");const{sub:a}=s;return p(t.uid===a,i,"user-mismatch"),G._forOperation(t,r,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&F(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sc(t,e,n=!1){const i="signIn",r=await gr(t,i,e),o=await G._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(o.user),o}function Wl(t,e,n,i){return me(t).onAuthStateChanged(e,n,i)}function Vl(t){return me(t).signOut()}const it="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(it,"1"),this.storage.removeItem(it),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(){const t=S();return hn(t)||ht(t)}const cc=1e3,lc=10;class br extends mr{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ac()&&ec(),this.fallbackToPolling=dr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,c)=>{this.notifyListeners(s,c)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(i);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const s=this.storage.getItem(i);!n&&this.localCache[i]===s||this.notifyListeners(i,s)},o=this.storage.getItem(i);Za()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,lc):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},cc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}br.type="LOCAL";const uc=br;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends mr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vr.type="SESSION";const yr=vr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new ft(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:o}=n.data,s=this.handlersMap[r];if(!(s==null?void 0:s.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(s).map(async l=>l(n.origin,o)),c=await dc(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ft.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,s;return new Promise((a,c)=>{const l=pn("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);s={messageChannel:r,onMessage(d){const h=d;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),o=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(h.data.response);break;default:clearTimeout(u),clearTimeout(o),c(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(){return window}function fc(t){M().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(){return typeof M().WorkerGlobalScope!="undefined"&&typeof M().importScripts=="function"}async function pc(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gc(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mc(){return _r()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="firebaseLocalStorageDb",bc=1,rt="firebaseLocalStorage",kr="fbase_key";class Ne{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pt(t,e){return t.transaction([rt],e?"readwrite":"readonly").objectStore(rt)}function vc(){const t=indexedDB.deleteDatabase(wr);return new Ne(t).toPromise()}function Ft(){const t=indexedDB.open(wr,bc);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(rt,{keyPath:kr})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(rt)?e(i):(i.close(),await vc(),e(await Ft()))})})}async function ti(t,e,n){const i=pt(t,!0).put({[kr]:e,value:n});return new Ne(i).toPromise()}async function yc(t,e){const n=pt(t,!1).get(e),i=await new Ne(n).toPromise();return i===void 0?null:i.value}function ni(t,e){const n=pt(t,!0).delete(e);return new Ne(n).toPromise()}const _c=800,wc=3;class Ir{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ft(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>wc)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _r()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ft._getInstance(mc()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pc(),!this.activeServiceWorker)return;this.sender=new hc(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ft();return await ti(e,it,"1"),await ni(e,it),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>ti(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>yc(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ni(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const o=pt(r,!1).getAll();return new Ne(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:o}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_c)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ir.type="LOCAL";const kc=Ir;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Tc(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const o=L("internal-error");o.customData=r,n(o)},i.type="text/javascript",i.charset="UTF-8",Ic().appendChild(i)})}function Ec(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ce(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(t,e){return e?U(e):(p(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends fr{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return de(e,this._buildIdpRequest())}_linkToIdToken(e,n){return de(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return de(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Sc(t){return sc(t.auth,new gn(t),t.bypassAuthState)}function Rc(t){const{auth:e,user:n}=t;return p(n,e,"internal-error"),oc(n,new gn(t),t.bypassAuthState)}async function Oc(t){const{auth:e,user:n}=t;return p(n,e,"internal-error"),rc(n,new gn(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,i,r,o=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sc;case"linkViaPopup":case"linkViaRedirect":return Oc;case"reauthViaPopup":case"reauthViaRedirect":return Rc;default:F(this.auth,"internal-error")}}resolve(e){z(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){z(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=new Ce(2e3,1e4);class ae extends Tr{constructor(e,n,i,r,o){super(e,n,r,o);this.provider=i,this.authWindow=null,this.pollId=null,ae.currentPopupAction&&ae.currentPopupAction.cancel(),ae.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return p(e,this.auth,"internal-error"),e}async onExecution(){z(this.filter.length===1,"Popup operations only handle one event");const e=pn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(L(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(L(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ae.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(L(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Ac.get())};e()}}ae.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="pendingRedirect",Et=new Map;class Cc extends Tr{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i);this.eventId=null}async execute(){let e=Et.get(this.auth._key());if(!e){try{const i=await Pc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Et.set(this.auth._key(),e)}return this.bypassAuthState||Et.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Pc(t,e){const n=Lc(e),i=Nc(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function Nc(t){return U(t._redirectPersistence)}function Lc(t){return je(xc,t.config.apiKey,t.name)}async function Mc(t,e,n=!1){const i=fn(t),r=$c(i,e),s=await new Cc(i,r,n).execute();return s&&!n&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc=10*60*1e3;class Uc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bc(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Er(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(L(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Dc&&this.cachedEventUids.clear(),this.cachedEventUids.has(ii(e))}saveEventToCache(e){this.cachedEventUids.add(ii(e)),this.lastProcessedEventTime=Date.now()}}function ii(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Er({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Bc(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Er(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fc(t,e={}){return dt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hc=/^https?/;async function jc(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Fc(t);for(const n of e)try{if(Wc(n))return}catch{}F(t,"unauthorized-domain")}function Wc(t){const e=Bt(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===i}if(!Hc.test(n))return!1;if(zc.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=new Ce(3e4,6e4);function ri(){const t=M().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qc(t){return new Promise((e,n)=>{var i,r,o;function s(){ri(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ri(),n(L(t,"network-request-failed"))},timeout:Vc.get()})}if((r=(i=M().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0?void 0:r.Iframe)e(gapi.iframes.getContext());else if((o=M().gapi)===null||o===void 0?void 0:o.load)s();else{const a=Ec("iframefcb");return M()[a]=()=>{gapi.load?s():n(L(t,"network-request-failed"))},Tc(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw We=null,e})}let We=null;function Kc(t){return We=We||qc(t),We}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc=new Ce(5e3,15e3),Jc="__/auth/iframe",Yc="emulator/auth/iframe",Xc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zc(t){const e=t.config;p(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?un(e,Yc):`https://${t.config.authDomain}/${Jc}`,i={apiKey:e.apiKey,appName:t.name,v:ut},r=Qc.get(t.config.apiHost);r&&(i.eid=r);const o=t._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${xe(i).slice(1)}`}async function el(t){const e=await Kc(t),n=M().gapi;return p(n,t,"internal-error"),e.open({where:document.body,url:Zc(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xc,dontclear:!0},i=>new Promise(async(r,o)=>{await i.restyle({setHideOnLeave:!1});const s=L(t,"network-request-failed"),a=M().setTimeout(()=>{o(s)},Gc.get());function c(){M().clearTimeout(a),r(i)}i.ping(c).then(c,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nl=500,il=600,rl="_blank",ol="http://localhost";class oi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sl(t,e,n,i=nl,r=il){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},tl),{width:i.toString(),height:r.toString(),top:o,left:s}),l=S().toLowerCase();n&&(a=sr(l)?rl:n),or(l)&&(e=e||ol,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[f,b])=>`${h}${f}=${b},`,"");if(Qa(l)&&a!=="_self")return al(e||"",a),new oi(null);const d=window.open(e||"",a,u);p(d,t,"popup-blocked");try{d.focus()}catch{}return new oi(d)}function al(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl="__/auth/handler",ll="emulator/auth/handler";function si(t,e,n,i,r,o){p(t.config.authDomain,t,"auth-domain-config-required"),p(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:ut,eventId:r};if(e instanceof pr){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",Ws(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(o||{}))s[c]=l}if(e instanceof Pe){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(s.scopes=c.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${ul(t)}?${xe(a).slice(1)}`}function ul({config:t}){return t.emulator?un(t,ll):`https://${t.authDomain}/${cl}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="webStorageSupport";class dl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yr,this._completeRedirectFn=Mc}async _openPopup(e,n,i,r){var o;z((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=si(e,n,i,Bt(),r);return sl(e,s,pn())}async _openRedirect(e,n,i,r){return await this._originValidation(e),fc(si(e,n,i,Bt(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:o}=this.eventManagers[n];return r?Promise.resolve(r):(z(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await el(e),i=new Uc(e);return n.register("authEvent",r=>(p(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($t,{type:$t},r=>{var o;const s=(o=r==null?void 0:r[0])===null||o===void 0?void 0:o[$t];s!==void 0&&n(!!s),F(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jc(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dr()||hn()||ht()}}const hl=dl;var ai="@firebase/auth",ci="0.19.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var r;e(((r=i)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){p(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gl(t){et(new Ze("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:o}=i.options;return(s=>{p(r&&!r.includes(":"),"invalid-api-key",{appName:s.name}),p(!(o==null?void 0:o.includes(":")),"argument-error",{appName:s.name});const a={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hr(t)},c=new tc(s,a);return La(c,n),c})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),et(new Ze("auth-internal",e=>{const n=fn(e.getProvider("auth").getImmediate());return(i=>new fl(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),le(ai,ci,pl(t)),le(ai,ci,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(t=Aa()){const e=Ji(t,"auth");return e.isInitialized()?e.getImmediate():Na(t,{popupRedirectResolver:hl,persistence:[kc,uc,yr]})}gl("Browser");var ml="firebase",bl="9.6.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */le(ml,bl,"app");/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const vl="html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}html.plt-mobile ion-app [contenteditable]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";let zt=class extends en{constructor(){super();this.__registerHost()}componentDidLoad(){Lt.isBrowser&&_l(async()=>{const t=Ye(window,"hybrid");E.getBoolean("_testing")||import("./tap-click.d7597553.js").then(n=>n.startTapClick(E)),E.getBoolean("statusTap",t)&&import("./status-tap.739ee457.js").then(n=>n.startStatusTap()),E.getBoolean("inputShims",yl())&&import("./input-shims.cc86f37e.js").then(n=>n.startInputShims(E));const e=await Promise.resolve().then(function(){return ss});E.getBoolean("hardwareBackButton",t)?e.startHardwareBackButton():e.blockHardwareBackButton(),typeof window!="undefined"&&import("./keyboard.39e4bf75.js").then(n=>n.startKeyboardAssist(window)),import("./focus-visible.e7105791.js").then(n=>this.focusVisible=n.startFocusVisible())})}async setFocus(t){this.focusVisible&&this.focusVisible.setFocus(t)}render(){const t=sn(this);return R(ct,{class:{[t]:!0,"ion-page":!0,"force-statusbar-padding":E.getBoolean("_forceStatusbarPadding")}})}get el(){return this}static get style(){return vl}};const yl=()=>Ye(window,"ios")&&Ye(window,"mobile"),_l=t=>{"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)};zt=rn(zt,[0,"ion-app",{setFocus:[64]}]);const Kl=zt;/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const li=(t,e)=>e.closest(t)!==null,$r=(t,e)=>typeof t=="string"&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,wl=/^[a-z][a-z0-9+\-.]*:/,kl=async(t,e,n,i)=>{if(t!=null&&t[0]!=="#"&&!wl.test(t)){const r=document.querySelector("ion-router");if(r)return e!=null&&e.preventDefault(),r.push(t,n,i)}return!1};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const Il=':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-0.3em;margin-right:0.3em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}::slotted(ion-icon[slot=end]){margin-left:0.3em;margin-right:-0.2em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:10px;--padding-top:0;--padding-bottom:0;--padding-start:1em;--padding-end:1em;--transition:background-color, opacity 100ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:2.8em;font-size:16px;font-weight:500;letter-spacing:-0.03em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:var(--ion-color-primary-shade, #3171e0);--background-focused:var(--ion-color-primary-shade, #3171e0);--background-hover:var(--ion-color-primary-tint, #4c8dff);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1}:host(.button-outline){--border-radius:10px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary, #3880ff);--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;--color-activated:var(--ion-color-primary-contrast, #fff)}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;font-size:17px;font-weight:normal;letter-spacing:0}:host(.button-large){--border-radius:12px;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--border-radius:6px;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}:host(.button-clear.ion-activated){opacity:0.4}:host(.button-outline.ion-activated.ion-color) .button-native{color:var(--ion-color-contrast)}:host(.button-outline.ion-activated.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}:host(.button-outline.ion-focused.ion-color) .button-native,:host(.button-clear.ion-focused.ion-color) .button-native{color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native::after,:host(.button-clear.ion-focused.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.button-clear:hover),:host(.button-outline:hover){opacity:0.6}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:transparent}:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}:host(:hover.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native::after{background:#fff;opacity:0.1}}',Tl=`:host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-0.3em;margin-right:0.3em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}::slotted(ion-icon[slot=end]){margin-left:0.3em;margin-right:-0.2em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:4px;--padding-top:0;--padding-bottom:0;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1),
                background-color 15ms linear,
                color 15ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:36px;font-size:14px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:transparent;--background-hover:var(--ion-color-primary-contrast, #fff);--background-focused:var(--ion-color-primary-contrast, #fff);--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.button-solid.ion-activated){--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host(.button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-outline.ion-activated.ion-color) .button-native{background:transparent}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-strong){font-weight:bold}::slotted(ion-icon[slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color.ion-focused) .button-native::after,:host(.button-outline.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}`;let Ht=class extends en{constructor(){super();this.__registerHost(),this.__attachShadow(),this.ionFocus=J(this,"ionFocus",7),this.ionBlur=J(this,"ionBlur",7),this.inItem=!1,this.inListHeader=!1,this.inToolbar=!1,this.inheritedAttributes={},this.buttonType="button",this.disabled=!1,this.routerDirection="forward",this.strong=!1,this.type="button",this.handleClick=t=>{if(this.type==="button")kl(this.href,t,this.routerDirection,this.routerAnimation);else if(Lo(this.el)){const e=this.el.closest("form");if(e){t.preventDefault();const n=document.createElement("button");n.type=this.type,n.style.display="none",e.appendChild(n),n.click(),n.remove()}}},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()}}componentWillLoad(){this.inToolbar=!!this.el.closest("ion-buttons"),this.inListHeader=!!this.el.closest("ion-list-header"),this.inItem=!!this.el.closest("ion-item")||!!this.el.closest("ion-item-divider"),this.inheritedAttributes=Mi(this.el,["aria-label"])}get hasIconOnly(){return!!this.el.querySelector('[slot="icon-only"]')}get rippleType(){return(this.fill===void 0||this.fill==="clear")&&this.hasIconOnly&&this.inToolbar?"unbounded":"bounded"}render(){const t=sn(this),{buttonType:e,type:n,disabled:i,rel:r,target:o,size:s,href:a,color:c,expand:l,hasIconOnly:u,shape:d,strong:h,inheritedAttributes:f}=this,b=s===void 0&&this.inItem?"small":s,y=a===void 0?"button":"a",g=y==="button"?{type:n}:{download:this.download,href:a,rel:r,target:o};let k=this.fill;return k===void 0&&(k=this.inToolbar||this.inListHeader?"clear":"solid"),R(ct,{onClick:this.handleClick,"aria-disabled":i?"true":null,class:$r(c,{[t]:!0,[e]:!0,[`${e}-${l}`]:l!==void 0,[`${e}-${b}`]:b!==void 0,[`${e}-${d}`]:d!==void 0,[`${e}-${k}`]:!0,[`${e}-strong`]:h,"in-toolbar":li("ion-toolbar",this.el),"in-toolbar-color":li("ion-toolbar[color]",this.el),"button-has-icon-only":u,"button-disabled":i,"ion-activatable":!0,"ion-focusable":!0})},R(y,Object.assign({},g,{class:"button-native",part:"native",disabled:i,onFocus:this.onFocus,onBlur:this.onBlur},f),R("span",{class:"button-inner"},R("slot",{name:"icon-only"}),R("slot",{name:"start"}),R("slot",null),R("slot",{name:"end"})),t==="md"&&R("ion-ripple-effect",{type:this.rippleType})))}get el(){return this}static get style(){return{ios:Il,md:Tl}}};Ht=rn(Ht,[33,"ion-button",{color:[513],buttonType:[1025,"button-type"],disabled:[516],expand:[513],fill:[1537],routerDirection:[1,"router-direction"],routerAnimation:[16],download:[1],href:[1],rel:[1],shape:[513],size:[513],strong:[4],target:[1],type:[1]}]);/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const Gl=Ht;/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const El=`.sc-ion-input-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--background:transparent;--color:initial;display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:100%;padding:0 !important;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);z-index:2}ion-item.sc-ion-input-ios-h:not(.item-label),ion-item:not(.item-label) .sc-ion-input-ios-h{--padding-start:0}.ion-color.sc-ion-input-ios-h{color:var(--ion-color-base)}.native-input.sc-ion-input-ios{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-input.sc-ion-input-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-input.sc-ion-input-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-ios:invalid{-webkit-box-shadow:none;box-shadow:none}.native-input.sc-ion-input-ios::-ms-clear{display:none}.native-input[disabled].sc-ion-input-ios{opacity:0.4}.cloned-input.sc-ion-input-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-input-ios .cloned-input.sc-ion-input-ios,[dir=rtl].sc-ion-input-ios-h .cloned-input.sc-ion-input-ios,[dir=rtl] .sc-ion-input-ios-h .cloned-input.sc-ion-input-ios{left:unset;right:unset;right:0}.input-clear-icon.sc-ion-input-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:center;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.input-clear-icon.sc-ion-input-ios:focus{opacity:0.5}.has-value.sc-ion-input-ios-h .input-clear-icon.sc-ion-input-ios{visibility:visible}.has-focus.sc-ion-input-ios-h{pointer-events:none}.has-focus.sc-ion-input-ios-h input.sc-ion-input-ios,.has-focus.sc-ion-input-ios-h a.sc-ion-input-ios,.has-focus.sc-ion-input-ios-h button.sc-ion-input-ios{pointer-events:auto}.item-label-floating.item-has-placeholder.sc-ion-input-ios-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-input-ios-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-input-ios-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-input-ios-h{-webkit-transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.sc-ion-input-ios-h{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-stacked.sc-ion-input-ios-h,.item-label-stacked .sc-ion-input-ios-h,.item-label-floating.sc-ion-input-ios-h,.item-label-floating .sc-ion-input-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}.input-clear-icon.sc-ion-input-ios{background-image:url("data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-step-600,%20%23666666)'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>");width:30px;height:30px;background-size:18px}`,$l=`.sc-ion-input-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--background:transparent;--color:initial;display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:100%;padding:0 !important;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);z-index:2}ion-item.sc-ion-input-md-h:not(.item-label),ion-item:not(.item-label) .sc-ion-input-md-h{--padding-start:0}.ion-color.sc-ion-input-md-h{color:var(--ion-color-base)}.native-input.sc-ion-input-md{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-input.sc-ion-input-md{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-input.sc-ion-input-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-md:invalid{-webkit-box-shadow:none;box-shadow:none}.native-input.sc-ion-input-md::-ms-clear{display:none}.native-input[disabled].sc-ion-input-md{opacity:0.4}.cloned-input.sc-ion-input-md{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-input-md .cloned-input.sc-ion-input-md,[dir=rtl].sc-ion-input-md-h .cloned-input.sc-ion-input-md,[dir=rtl] .sc-ion-input-md-h .cloned-input.sc-ion-input-md{left:unset;right:unset;right:0}.input-clear-icon.sc-ion-input-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:center;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.input-clear-icon.sc-ion-input-md:focus{opacity:0.5}.has-value.sc-ion-input-md-h .input-clear-icon.sc-ion-input-md{visibility:visible}.has-focus.sc-ion-input-md-h{pointer-events:none}.has-focus.sc-ion-input-md-h input.sc-ion-input-md,.has-focus.sc-ion-input-md-h a.sc-ion-input-md,.has-focus.sc-ion-input-md-h button.sc-ion-input-md{pointer-events:auto}.item-label-floating.item-has-placeholder.sc-ion-input-md-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-input-md-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-input-md-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-input-md-h{-webkit-transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.sc-ion-input-md-h{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:8px;font-size:inherit}.item-label-stacked.sc-ion-input-md-h,.item-label-stacked .sc-ion-input-md-h,.item-label-floating.sc-ion-input-md-h,.item-label-floating .sc-ion-input-md-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0}.input-clear-icon.sc-ion-input-md{background-image:url("data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><polygon%20fill='var(--ion-color-step-600,%20%23666666)'%20points='405,136.798%20375.202,107%20256,226.202%20136.798,107%20107,136.798%20226.202,256%20107,375.202%20136.798,405%20256,285.798%20375.202,405%20405,375.202%20285.798,256'/></svg>");width:30px;height:30px;background-size:22px}`;let jt=class extends en{constructor(){super();this.__registerHost(),this.ionInput=J(this,"ionInput",7),this.ionChange=J(this,"ionChange",7),this.ionBlur=J(this,"ionBlur",7),this.ionFocus=J(this,"ionFocus",7),this.ionStyle=J(this,"ionStyle",7),this.inputId=`ion-input-${Sl++}`,this.didBlurAfterEdit=!1,this.inheritedAttributes={},this.isComposing=!1,this.fireFocusEvents=!0,this.hasFocus=!1,this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.autofocus=!1,this.clearInput=!1,this.debounce=0,this.disabled=!1,this.name=this.inputId,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.type="text",this.value="",this.onInput=t=>{const e=t.target;e&&(this.value=e.value||""),this.ionInput.emit(t)},this.onBlur=t=>{this.hasFocus=!1,this.focusChanged(),this.emitStyle(),this.fireFocusEvents&&this.ionBlur.emit(t)},this.onFocus=t=>{this.hasFocus=!0,this.focusChanged(),this.emitStyle(),this.fireFocusEvents&&this.ionFocus.emit(t)},this.onKeydown=t=>{this.shouldClearOnEdit()&&(this.didBlurAfterEdit&&this.hasValue()&&t.key!=="Enter"&&this.clearTextInput(),this.didBlurAfterEdit=!1)},this.onCompositionStart=()=>{this.isComposing=!0},this.onCompositionEnd=()=>{this.isComposing=!1},this.clearTextOnEnter=t=>{t.key==="Enter"&&this.clearTextInput(t)},this.clearTextInput=t=>{this.clearInput&&!this.readonly&&!this.disabled&&t&&(t.preventDefault(),t.stopPropagation(),this.setFocus()),this.value="",this.nativeInput&&(this.nativeInput.value="")}}debounceChanged(){this.ionChange=Do(this.ionChange,this.debounce)}disabledChanged(){this.emitStyle()}placeholderChanged(){this.emitStyle()}valueChanged(){const t=this.nativeInput,e=this.getValue();t&&t.value!==e&&!this.isComposing&&(t.value=e),this.emitStyle(),this.ionChange.emit({value:this.value==null?this.value:this.value.toString()})}componentWillLoad(){this.inheritedAttributes=Mi(this.el,["aria-label","tabindex","title"])}connectedCallback(){this.emitStyle(),this.debounceChanged(),Lt.isBrowser&&document.dispatchEvent(new CustomEvent("ionInputDidLoad",{detail:this.el}))}componentDidLoad(){const t=this.nativeInput;t&&(t.addEventListener("compositionstart",this.onCompositionStart),t.addEventListener("compositionend",this.onCompositionEnd))}disconnectedCallback(){Lt.isBrowser&&document.dispatchEvent(new CustomEvent("ionInputDidUnload",{detail:this.el}));const t=this.nativeInput;t&&(t.removeEventListener("compositionstart",this.onCompositionStart),t.removeEventListener("compositionEnd",this.onCompositionEnd))}async setFocus(){this.nativeInput&&this.nativeInput.focus()}async setBlur(){this.nativeInput&&this.nativeInput.blur()}getInputElement(){return Promise.resolve(this.nativeInput)}shouldClearOnEdit(){const{type:t,clearOnEdit:e}=this;return e===void 0?t==="password":e}getValue(){return typeof this.value=="number"?this.value.toString():(this.value||"").toString()}emitStyle(){this.ionStyle.emit({interactive:!0,input:!0,"has-placeholder":this.placeholder!==void 0,"has-value":this.hasValue(),"has-focus":this.hasFocus,"interactive-disabled":this.disabled})}focusChanged(){!this.hasFocus&&this.shouldClearOnEdit()&&this.hasValue()&&(this.didBlurAfterEdit=!0)}hasValue(){return this.getValue().length>0}render(){const t=sn(this),e=this.getValue(),n=this.inputId+"-lbl",i=Mo(this.el);return i&&(i.id=n),R(ct,{"aria-disabled":this.disabled?"true":null,class:$r(this.color,{[t]:!0,"has-value":this.hasValue(),"has-focus":this.hasFocus})},R("input",Object.assign({class:"native-input",ref:r=>this.nativeInput=r,"aria-labelledby":i?n:null,disabled:this.disabled,accept:this.accept,autoCapitalize:this.autocapitalize,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,autoFocus:this.autofocus,enterKeyHint:this.enterkeyhint,inputMode:this.inputmode,min:this.min,max:this.max,minLength:this.minlength,maxLength:this.maxlength,multiple:this.multiple,name:this.name,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,spellcheck:this.spellcheck,step:this.step,size:this.size,type:this.type,value:e,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeydown},this.inheritedAttributes)),this.clearInput&&!this.readonly&&!this.disabled&&R("button",{"aria-label":"reset",type:"button",class:"input-clear-icon",onTouchStart:this.clearTextInput,onMouseDown:this.clearTextInput,onKeyDown:this.clearTextOnEnter}))}get el(){return this}static get watchers(){return{debounce:["debounceChanged"],disabled:["disabledChanged"],placeholder:["placeholderChanged"],value:["valueChanged"]}}static get style(){return{ios:El,md:$l}}},Sl=0;jt=rn(jt,[34,"ion-input",{fireFocusEvents:[4,"fire-focus-events"],color:[513],accept:[1],autocapitalize:[1],autocomplete:[1],autocorrect:[1],autofocus:[4],clearInput:[4,"clear-input"],clearOnEdit:[4,"clear-on-edit"],debounce:[2],disabled:[4],enterkeyhint:[1],inputmode:[1],max:[8],maxlength:[2],min:[8],minlength:[2],multiple:[4],name:[1],pattern:[1],placeholder:[1],readonly:[4],required:[4],spellcheck:[4],step:[1],size:[2],type:[1],value:[1032],hasFocus:[32],setFocus:[64],setBlur:[64],getInputElement:[64]}]);const Jl=jt;export{Gt as A,X as B,jl as C,Sn as D,At as E,Pr as F,xt as G,fe as H,pi as I,Cl as J,zl as K,Hl as L,Bl as M,Kl as N,Jl as O,Gl as P,Dl as Q,Fl as R,Qt as S,Ul as T,Pl as U,Nl as V,Po as W,Ml as X,Ll as Y,No as Z,xl as a,Nr as b,Ol as c,st as d,Cr as e,Al as f,$e as g,Kt as h,Xt as i,Vt as j,B as k,Jt as l,Yt as m,K as n,Br as o,Dr as p,Wt as q,Tn as r,ot as s,P as t,qt as u,cs as v,ve as w,ql as x,Wl as y,Vl as z};
