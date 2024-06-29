import{a as n}from"./assets/vendor-bdb8a163.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function a(s){const r="https://api.openweathermap.org/data/2.5/weather";return n.get(`${r}`,{params:{appid:"95632b02f9162f375a368971925f5209",q:s,units:"metric"}})}function l({main:s,sys:r,clouds:i,name:o}){return`
      <div class="weather__card">
    <h2 class="city-name">${o}</h2>
    <ul class="weather-info list">
        <li class="weather-info-item">
            <p class="temp">Температура: ${s.temp}<sup>&#176;</sup></p>
        </li>
        <li class="weather-info-item">
            <p class="feels-like-temp">Відчувається як: ${s.feels_like}<sup>&#176;</sup></p>
        </li>
        <li class="weather-info-item">
            <p class="sunrise-time">Схід сонця: ${r.sunrise}</p>
        </li>
        <li class="weather-info-item">
            <p class="sunset-time">Захід сонця: ${r.sunset}</p>
        </li>
        <li class="weather-info-item">
            <p class="clouds">Хмарність: ${i.all}%</p>
        </li>
    </ul>
</div>  `}const u=document.querySelector(".form"),p=document.querySelector(".weather-card");u.addEventListener("submit",async s=>{s.preventDefault();const r=s.currentTarget.elements.search.value.trim();try{const{data:i}=await a(r);console.log(i),p.innerHTML=l(i)}catch{}});
//# sourceMappingURL=commonHelpers.js.map
