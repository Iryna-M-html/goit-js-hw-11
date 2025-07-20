import{a as d,S as f,i as n}from"./assets/vendor-BdUgx3Ey.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const p="51392079-b36bb30a852bc284302a63f16",m="https://pixabay.com/api/";async function y(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(m,{params:o})).data}let h=new f(".gallery a",{captionsData:"alt",captionDelay:250});const c=document.querySelector(".gallery"),l=document.querySelector(".loader");function g(s){const o=s.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${e.likes}</p>
          <p><b>Views:</b> ${e.views}</p>
          <p><b>Comments:</b> ${e.comments}</p>
          <p><b>Downloads:</b> ${e.downloads}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function b(){c.innerHTML=""}function L(){l.classList.remove("hidden")}function w(){l.classList.add("hidden")}const u=document.querySelector("#search-form"),v=u.elements["search-text"];u.addEventListener("submit",async s=>{s.preventDefault();const o=v.value.trim();if(!o){n.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}b(),L();try{const e=await y(o);if(e.hits.length===0){n.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(e.hits)}catch(e){n.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"}),console.error(e)}finally{w()}});
//# sourceMappingURL=index.js.map
