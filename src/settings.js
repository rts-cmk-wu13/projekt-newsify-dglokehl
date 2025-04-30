
// ------ IMPORTS ------ //

import "./styles/style.scss";
import "./styles/settings.scss";


import * as storage from "./modules/storage.js";

import checkDarkmode from "./modules/checkDarkmode.js";
import checkLogin from "./modules/checkLogin.js";

import { apiKey } from "./modules/variables.js";
import categories from "./modules/categories.js";


import { headerElm, footerElm } from "./views/layoutElms.js";





// ------ INIT ------ //

checkLogin()
checkDarkmode()


let categoriesList = categories()



// ------ LAYOUT ------ //

let categoriesElms = categoriesList.map(category => {
    let categoryName = category.display_name

    return `
        <li class="settings__list__item">
            <span class="settings__list__item__text headline">
                <img src="./public/newsify_logo.svg" alt="" class="icon icon--logo">
                ${categoryName}
            </span>

            <label class="settings__list__item__option">
                <input type="checkbox" class="settings__list__item__option__switch" data-category="${categoryName}">
                <span class="settings__list__item__option__slider"></span>
                <span class="settings__list__item__option__bg"></span>
            </label>
        </li>
    `
}).join("")


document.querySelector("#app").innerHTML = `
    ${headerElm()}

    <main class="settings">
        <h2 class="settings__heading">Settings</h2>

        <h3 class="settings__list__heading">Categories</h3>
        <ul class="settings__list">
            ${categoriesElms}
        </ul>

        <label class="darkmode">
            <input type="checkbox" class="darkmode__switch">
            <span class="darkmode__btn">
                Toggle dark mode
            </span>
        </label>

        <small class="settings__version">Version 4.8.15.16.23.42</small>
    </main>

    ${footerElm()}
`;



// --- SWITCHES --- //

let categorySwitches = document.querySelectorAll(".settings__list__item__option__switch")
categorySwitches.forEach(switchElm => {
    let switchElmCategory = switchElm.getAttribute("data-category")
    let findElm = categoriesList.find(elm => elm.display_name === switchElmCategory)

    switchElm.addEventListener("change", () => {
        findElm.enabled = switchElm.checked
        storage.saveTo("categories", JSON.stringify(categoriesList))
    })

    if (findElm.enabled) {
        switchElm.checked = true
    } else {
        switchElm.checked = false
    }
});

let darkmodeSwitch = document.querySelector(".darkmode__switch");
if (JSON.parse(storage.readFrom("isDarkMode"))) {
    darkmodeSwitch.checked = true
}
darkmodeSwitch.addEventListener("change", function () {
    storage.saveTo("isDarkMode", darkmodeSwitch.checked);
    checkDarkmode()
});