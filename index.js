import{a as f,S as u,i as n}from"./assets/vendor-BdUgx3Ey.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const p="51392079-b36bb30a852bc284302a63f16",m="https://pixabay.com/api/";async function y(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(m,{params:o})).data}let h=new u(".gallery a",{captionsData:"alt",captionDelay:250});const l=document.querySelector(".gallery"),c=document.querySelector(".loader-wrapper");function g(s){const o=s.map(e=>`
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
    `).join("");l.insertAdjacentHTML("beforeend",o),h.refresh()}function b(){l.innerHTML=""}function L(){c.classList.remove("hidden")}function w(){c.classList.add("hidden")}const d=document.querySelector("#search-form"),v=d.elements["search-text"];d.addEventListener("submit",async s=>{s.preventDefault();const o=v.value.trim();if(!o){n.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}b(),L();try{const e=await y(o);if(e.hits.length===0){n.info({title:"No Results",message:"❌Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ff4d4d",titleColor:"#ff4d4d",messageColor:"#fff"});return}g(e.hits)}catch(e){n.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"}),console.error(e)}finally{w()}});
//# sourceMappingURL=index.js.map
