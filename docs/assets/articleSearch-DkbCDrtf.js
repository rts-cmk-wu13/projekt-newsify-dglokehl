import{p as y,b as _}from"./onLoad-DMWptZYE.js";function m(r){let o=document.querySelector("#app").getAttribute("data-page"),t;return o==="archive"?t="delete":t="bookmark",r.map(e=>`
            <div class="articlewrapper">
                <a href="${e.url}" target="_blank" class="category__article" data-id="${e.id}" data-category="${e.category}">
                    <img src="${e.thumb}" alt="Thumbnail: ${e.title}" class="category__article__img">
                    <div class="category__article__text">
                        <h3 class="headline category__article__text__heading">
                            ${e.title}
                        </h3>
                        <p class="category__article__text__subheading">
                            ${e.abstract}
                        </p>
                    </div>
                </a>

                <div class="articlewrapper__bg ${t}">
                    <span class="material-symbols-rounded articlewrapper__icon icon">
                        ${t}
                    </span>
                </div>
            </div>
        `).join("")}function b(r,o){return`
        <section class="category">
            <header class="category__header">
                <h2 class="headline category__header__heading">
                    <img src="/newsify_logo.svg" alt="Newsify logo" class="icon icon--logo">
                    ${r}
                </h2>
                <span class="material-symbols-rounded category__header__arrow category__header__arrow--down">
                    arrow_forward_ios
                </span>
            </header>

            <div class="category__content">
                ${m(o)}
            </div>
        </section>
    `}function S(){document.querySelectorAll(".category__header").forEach(o=>{o.addEventListener("click",()=>{let t=o.lastElementChild,e=o.nextElementSibling;t.classList.contains("category__header__arrow--down")?(t.classList.remove("category__header__arrow--down"),t.classList.add("category__header__arrow--right"),e.classList.add("hidden")):(t.classList.remove("category__header__arrow--right"),t.classList.add("category__header__arrow--down"),e.classList.remove("hidden"))})})}function d(){let r=y("articleStorage");return r!==null?r:[]}function p(r,o){let t=document.querySelector("#app").getAttribute("data-page"),e=d(),l=o.wrapperElm,a=o.articleBgIcon,c=e.some(i=>i.id===r.id),s=e.findIndex(i=>i.id===r.id);if(t==="archive"){e.splice(s,1),console.log("Removing article from storage"),_("articleStorage",e),console.log("articleStorage",d());let i=l.parentElement;l.remove(),i.childElementCount==0&&i.parentElement.remove()}else c?(e.splice(s,1),console.log("Removing article from storage"),_("articleStorage",e),console.log("B. articleStorage",d()),a.classList.remove("icon--fill")):(e.push(r),console.log("Adding article to storage"),_("articleStorage",e),console.log("A. articleStorage",d()),a.classList.add("icon--fill"))}function L(){let r,o,t,e=document.querySelector("#app").getAttribute("data-page"),l=d();console.log("1. articleArr",l),document.querySelectorAll(".articlewrapper").forEach(a=>{let c=a.querySelector(".category__article"),s=a.querySelector(".articlewrapper__bg"),i=a.querySelector(".articlewrapper__icon"),h={wrapperElm:a,articleBgIcon:i},u={id:c.getAttribute("data-id"),url:c.getAttribute("href"),thumb:c.querySelector(".category__article__img").getAttribute("src"),title:c.querySelector(".category__article__text__heading").innerText,abstract:c.querySelector(".category__article__text__subheading").innerText,category:c.getAttribute("data-category")};l.some(n=>n.id===u.id)&&e!=="archive"&&i.classList.add("icon--fill"),a.addEventListener("pointerdown",n=>{r=n.clientX,console.log("down",r),c.classList.remove("animation"),s.classList.remove("fadeout","selected")}),a.addEventListener("pointermove",n=>{o=n.clientX,t=(r-o)/16,c.style.transform="translateX(-"+t+"rem)",t>=6.5?s.classList.add("selected"):s.classList.remove("selected");let g=Math.round(t/6.5*100);g>=100&&(g=100),s.style.opacity=g+"%",i.style.scale=g+"%"}),a.addEventListener("pointerup",n=>{console.log("up",t),r=void 0,c.style.transform="translateX(0px)",c.classList.add("animation"),s.style.opacity=0,s.classList.add("fadeout"),t>=6.5&&p(u,h)})})}function A(){const r=document.querySelector(".content");let o=r.cloneNode(!0),t=[];document.querySelectorAll(".category__article").forEach(l=>{let a={id:l.getAttribute("data-id"),url:l.getAttribute("href"),thumb:l.querySelector(".category__article__img").getAttribute("src"),title:l.querySelector(".category__article__text__heading").innerText,abstract:l.querySelector(".category__article__text__subheading").innerText,category:l.getAttribute("data-category")};t.push(a)}),_("pageArticles",t);let e=document.querySelector(".search__bar");e.addEventListener("input",l=>{l.preventDefault();let a=e.value.toLowerCase();console.log(a);let c=y("pageArticles");if(a.length>0){let s=c.filter(i=>i.title.toLowerCase().includes(a)||i.abstract.toLowerCase().includes(a));console.log(s),r.innerHTML=m(s)}else r.innerHTML=o.innerHTML})}export{S as a,L as b,b as c,A as d,d as e};
