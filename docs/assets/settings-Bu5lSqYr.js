import{o as n,s as _,r as o,c}from"./onLoad-DMWptZYE.js";import{c as r,h as d,f as g}from"./listLayout-LNGEcB0b.js";n();let t=r(),m=t.map(e=>{let s=e.display_name;return`
        <li class="settings__list__item">
            <span class="settings__list__item__text headline">
                <img src="/newsify_logo.svg" alt="Newsify logo" class="icon icon--logo">
                ${s}
            </span>

            <label class="settings__list__item__option">
                <input type="checkbox" class="settings__list__item__option__switch" data-category="${s}">
                <span class="settings__list__item__option__slider"></span>
                <span class="settings__list__item__option__bg"></span>
            </label>
        </li>
    `}).join("");document.querySelector("#app").innerHTML=`
    ${d()}

    <main class="settings">
        <h2 class="settings__heading">Settings</h2>

        <h3 class="settings__list__heading">Categories</h3>
        <ul class="settings__list">
            ${m}
        </ul>

        <label class="darkmode">
            <input type="checkbox" class="darkmode__switch">
            <span class="darkmode__btn">
                Toggle dark mode
            </span>
        </label>

        <small class="settings__version">Version 4.8.15.16.23.42</small>
    </main>

    ${g()}
`;let p=document.querySelectorAll(".settings__list__item__option__switch");p.forEach(e=>{let s=e.getAttribute("data-category"),i=t.find(l=>l.display_name===s);e.addEventListener("change",()=>{i.enabled=e.checked,_("categories",JSON.stringify(t))}),i.enabled?e.checked=!0:e.checked=!1});let a=document.querySelector(".darkmode__switch");JSON.parse(o("isDarkMode"))&&(a.checked=!0);a.addEventListener("change",function(){_("isDarkMode",a.checked),c()});
