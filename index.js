import{S as f,a as d,i as n}from"./assets/vendor-B3Lscd_h.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let m=new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function y(){l&&(l.style.display="block")}function g(){l&&(l.style.display="none")}function h(){c.innerHTML=""}function b(a){h();const r=a.map(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:i,comments:u,downloads:p})=>`
      <li class="gallery-item">
        <a href="${o}" class="gallery-link">
          <img src="${s}" alt="${e}" class="gallery-image" />
        </a>
        <div class="info">
          <ul class="baner">
            <li class="baner-li">
              <p class="baner-title">Likes</p>
              <p class="baner-text">${t}</p>
            </li>
            <li class="baner-li">
              <p class="baner-title">Views</p>
              <p class="baner-text">${i}</p>
            </li>
            <li class="baner-li">
              <p class="baner-title">Comments</p>
              <p class="baner-text">${u}</p>
            </li>
            <li class="baner-li">
              <p class="baner-title">Downloads</p>
              <p class="baner-text">${p}</p>
            </li>
          </ul>
        </div>
      </li>`).join("");c.innerHTML=r,m.refresh()}const L="49488951-e375fee229e59287138537a31",w="https://pixabay.com/api/";async function x(a){try{const r=await d.get(w,{params:{key:L,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}});return console.log(r.data),r.data.hits}catch(r){throw console.error("Error fetching images:",r),r}}const q=document.querySelector("form");q.addEventListener("submit",async a=>{a.preventDefault();const r=a.target.elements["search-text"].value.trim();if(!r){n.error({title:"Error",message:"Please enter a search query!"});return}y();try{const s=await x(r);s.length===0?n.warning({title:"Oops!",message:"No images found. Try again!"}):b(s)}catch{n.error({title:"Error",message:"Failed to fetch images. Try again later!"})}finally{g()}});
//# sourceMappingURL=index.js.map
