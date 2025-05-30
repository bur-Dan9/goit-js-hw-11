import{S as g,a as m,i as l}from"./assets/vendor-B3Lscd_h.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const c=document.createElement("style");c.textContent=`
  h1, h2, h3, h4, h5, h6, p {
    margin-top: 0;
    margin-bottom: 0;
  }
  ul, ol {
    list-style-type: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  .body {
    font-family: "Montserrat", sans-serif;
    line-height: 1.5;
    letter-spacing: 0.04em;
  }

  .container {
    width: 1128px;
    margin: 0 auto;
    padding-top: 36px;
  }

  .form {
    display: flex;
    gap: 8px;
    flex-direction: row;
    border-radius: 8px;
    padding: 24px;
    background: #fff;
    margin-top: 30px;
    justify-content: center;
  }

  .search-text {
    border: 1px solid #808080;
    border-radius: 4px;
    width: 272px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    color: #2e2f42;
  }

  .search-text:hover {
    border-color: #000;
    outline: none;
  }

  .search-text:focus {
    border-color: #4e75ff;
  }

  .search-btn {
    border-radius: 8px;
    padding: 8px 16px;
    width: 91px;
    height: 40px;
    border: none;
    background-color: #4e75ff;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    color: #fff;
  }

  .search-btn:hover {
    background: #6c8cff;
  }

  .search-btn:active {
    transform: scale(0.98);
  }

  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #fff;
    border-bottom-color: #ff3d00;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
  }

  .ul-container {
    width: 1128px;
    margin: auto;
  }
  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .gallery li {
    flex: 0 1 calc(25% - 10px);
  }
  .gallery-item {
    border: 1px solid #666;
  }
  .gallery img {
    display: block;
    width: 100%;
    height: auto;
  }

  .baner {
    display: flex;
    justify-content: space-between;
  }

  .baner-li {
    text-align: center;
    padding: 4px 0px;
  }

  .baner-title {
    padding: 0 16px;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: 0.04em;
    color: #2e2f42;
  }

  .baner-text {
    font-weight: 400;
    font-size: 12px;
    line-height: 2;
    letter-spacing: 0.04em;
    color: #2e2f42;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loader.visible {
    display: block;
  }
`;document.head.appendChild(c);const p=document.querySelector(".gallery");let u=new g(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function h(){p.innerHTML=""}function b(i){h();const t=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:r,views:a,comments:d,downloads:f})=>`
      <li class="gallery-item">
        <a href="${n}" class="gallery-link">
          <img src="${o}" alt="${e}" class="gallery-image" />
        </a>
        <div class="info">
          <ul class="baner">
            <li class="baner-li">
              <p class="baner-title">Likes</p>
              <p class="baner-text">${r}</p>
            </li>
            <li class="baner-li">
              <p class="baner-title">Views</p>
              <p class="baner-text">${a}</p>
            </li>
            <li class="baner-li">
              <p class="baner-title">Comments</p>
              <p class="baner-text">${d}</p>
            </li>
            <li class="baner-li">
              <p class="baner-title">Downloads</p>
              <p class="baner-text">${f}</p>
            </li>
          </ul>
        </div>
      </li>`).join("");p.innerHTML=t,u.refresh()}const y="49488951-e375fee229e59287138537a31",x="https://pixabay.com/api/";async function w(i){try{const t=await m.get(x,{params:{key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}});return console.log(t.data),t.data.hits}catch(t){throw console.error("Error fetching images:",t),t}}const L=document.querySelector("form"),v=document.querySelector(".gallery"),s=document.querySelector(".loader");L.addEventListener("submit",async i=>{i.preventDefault();const t=i.target.elements["search-text"].value.trim();if(!t){l.error({title:"Error",message:"Please enter a search query!"});return}v.innerHTML="",s.classList.add("visible");try{const o=await w(t);console.log(o),o.length===0?l.warning({title:"Oops!",message:"No images found. Try again!"}):b(o)}catch{l.error({title:"Error",message:" Failed to fetch images. Try again later!"})}finally{s.classList.remove("visible")}});
//# sourceMappingURL=index.js.map
