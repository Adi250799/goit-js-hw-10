/* empty css                      */import{f as h,i as l}from"./assets/vendor-BbSUbo7J.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const c=document.querySelector("button[data-start]"),g=document.getElementById("datetime-picker"),v=document.querySelector("[data-days]"),b=document.querySelector("[data-hours]"),E=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]");document.getElementById("countdown");let f=null,u=null;const I={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const n=new Date;f=t[0],c.disabled=!0,f<=n?l.error({title:"Błąd",message:"Please choose a date in the future."}):c.disabled=!1}};h(g,I);function w(){const t=new Date().getTime(),n=f-t;if(n>=0){const{days:s,hours:r,minutes:e,seconds:o}=d(n);v.textContent=a(s),b.textContent=a(r),E.textContent=a(e),S.textContent=a(o)}else clearInterval(u),l.success({title:"Gratulacje",message:"Czas się skończył!"}),c.disabled=!0}function L(){c.disabled=!0,u&&clearInterval(u),u=setInterval(w,1e3)}c.addEventListener("click",()=>{c.disabled=!0,L()});function a(t){return String(t).padStart(2,"0")}function d(t){const o=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),y=Math.floor(t%864e5%36e5/6e4),p=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:i,minutes:y,seconds:p}}console.log(d(2e3));console.log(d(14e4));console.log(d(2414e4));const m=document.querySelector(".form");m.addEventListener("submit",t=>{t.preventDefault();const n=parseInt(m.delay.value),s=m.state.value;P(n,s).then(r=>{l.success({title:"Success",message:`✅ Fulfilled promise in ${r}ms`})}).catch(r=>{l.error({title:"Error",message:`❌ Rejected promise in ${r}ms`})})});function P(t,n){return new Promise((s,r)=>{setTimeout(()=>{n==="fulfilled"?s(t):r(t)},t)})}
//# sourceMappingURL=index.js.map
