import{X as b,Y as A,V as P,T,Z as C}from"./vendor.01967615.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const L=new WeakMap,g=(e,o,t,n=0)=>{L.has(e)!==t&&(t?M(e,o,n):N(e,o))},I=e=>e===e.getRootNode().activeElement,M=(e,o,t)=>{const n=o.parentNode,r=o.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,n.appendChild(r),L.set(e,r);const d=e.ownerDocument.dir==="rtl"?9999:-9999;e.style.pointerEvents="none",o.style.transform=`translate3d(${d}px,${t}px,0) scale(0)`},N=(e,o)=>{const t=L.get(e);t&&(L.delete(e),t.remove()),e.style.pointerEvents="",o.style.transform=""},p=(e,o,t)=>{if(!t||!o)return()=>{};const n=c=>{I(o)&&g(e,o,c)},r=()=>g(e,o,!1),a=()=>n(!0),d=()=>n(!1);return A(t,"ionScrollStart",a),A(t,"ionScrollEnd",d),o.addEventListener("blur",r),()=>{b(t,"ionScrollStart",a),b(t,"ionScrollEnd",d),o.addEventListener("ionBlur",r)}},y="input, textarea, [no-blur], [contenteditable]",x=()=>{let e=!0,o=!1;const t=document,n=()=>{o=!0},r=()=>{e=!0},a=d=>{if(o){o=!1;return}const c=t.activeElement;if(!c||c.matches(y))return;const i=d.target;i!==c&&(i.matches(y)||i.closest(y)||(e=!1,setTimeout(()=>{e||c.blur()},50)))};return A(t,"ionScrollStart",n),t.addEventListener("focusin",r,!0),t.addEventListener("touchend",a,!1),()=>{b(t,"ionScrollStart",n,!0),t.removeEventListener("focusin",r,!0),t.removeEventListener("touchend",a,!1)}},R=.3,K=(e,o,t)=>{const n=e.closest("ion-item,[ion-item]")||e;return O(n.getBoundingClientRect(),o.getBoundingClientRect(),t,e.ownerDocument.defaultView.innerHeight)},O=(e,o,t,n)=>{const r=e.top,a=e.bottom,d=o.top,c=Math.min(o.bottom,n-t),i=d+15,f=c*.75-a,m=i-r,s=Math.round(f<0?-f:m>0?-m:0),u=Math.min(s,r-d),S=Math.abs(u)/R,w=Math.min(400,Math.max(150,S));return{scrollAmount:u,scrollDuration:w,scrollPadding:t,inputSafeY:-(r-i)+4}},F=(e,o,t,n,r)=>{let a;const d=i=>{a=T(i)},c=i=>{if(!a)return;const l=T(i);!k(6,a,l)&&!I(o)&&(i.stopPropagation(),_(e,o,t,n,r))};return e.addEventListener("touchstart",d,!0),e.addEventListener("touchend",c,!0),()=>{e.removeEventListener("touchstart",d,!0),e.removeEventListener("touchend",c,!0)}},_=async(e,o,t,n,r)=>{if(!t&&!n)return;const a=K(e,t||n,r);if(t&&Math.abs(a.scrollAmount)<4){o.focus();return}if(g(e,o,!0,a.inputSafeY),o.focus(),C(()=>e.click()),typeof window!="undefined"){let d;const c=async()=>{d!==void 0&&clearTimeout(d),window.removeEventListener("ionKeyboardDidShow",i),window.removeEventListener("ionKeyboardDidShow",c),t&&await t.scrollByPoint(0,a.scrollAmount,a.scrollDuration),g(e,o,!1,a.inputSafeY),o.focus()},i=()=>{window.removeEventListener("ionKeyboardDidShow",i),window.addEventListener("ionKeyboardDidShow",c)};if(t){const l=await t.getScrollElement(),f=l.scrollHeight-l.clientHeight;if(a.scrollAmount>f-l.scrollTop){o.type==="password"?(a.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",i)):window.addEventListener("ionKeyboardDidShow",c),d=setTimeout(c,1e3);return}}c()}},k=(e,o,t)=>{if(o&&t){const n=o.x-t.x,r=o.y-t.y;return n*n+r*r>e*e}return!1},D="$ionPaddingTimer",H=e=>{const o=document,t=r=>{B(r.target,e)},n=r=>{B(r.target,0)};return o.addEventListener("focusin",t),o.addEventListener("focusout",n),()=>{o.removeEventListener("focusin",t),o.removeEventListener("focusout",n)}},B=(e,o)=>{if(e.tagName!=="INPUT"||e.parentElement&&e.parentElement.tagName==="ION-INPUT"||e.parentElement&&e.parentElement.parentElement&&e.parentElement.parentElement.tagName==="ION-SEARCHBAR")return;const t=e.closest("ion-content");if(t===null)return;const n=t[D];n&&clearTimeout(n),o>0?t.style.setProperty("--keyboard-offset",`${o}px`):t[D]=setTimeout(()=>{t.style.setProperty("--keyboard-offset","0px")},120)},Y=!0,U=!0,q=e=>{const o=document,t=e.getNumber("keyboardHeight",290),n=e.getBoolean("scrollAssist",!0),r=e.getBoolean("hideCaretOnScroll",!0),a=e.getBoolean("inputBlurring",!0),d=e.getBoolean("scrollPadding",!0),c=Array.from(o.querySelectorAll("ion-input, ion-textarea")),i=new WeakMap,l=new WeakMap,f=async s=>{await new Promise(v=>P(s,v));const u=s.shadowRoot||s,h=u.querySelector("input")||u.querySelector("textarea"),S=s.closest("ion-content"),w=S?null:s.closest("ion-footer");if(!!h){if(!!S&&r&&!i.has(s)){const v=p(s,h,S);i.set(s,v)}if((!!S||!!w)&&n&&!l.has(s)){const v=F(s,h,S,w,t);l.set(s,v)}}},m=s=>{if(r){const u=i.get(s);u&&u(),i.delete(s)}if(n){const u=l.get(s);u&&u(),l.delete(s)}};a&&Y&&x(),d&&U&&H(t);for(const s of c)f(s);o.addEventListener("ionInputDidLoad",s=>{f(s.detail)}),o.addEventListener("ionInputDidUnload",s=>{m(s.detail)})};export{q as startInputShims};
