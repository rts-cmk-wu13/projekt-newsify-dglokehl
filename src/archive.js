
// ------ IMPORTS ------ //

import "./styles/style.scss";
import "./styles/main.scss";


import * as storage from "./modules/storage.js";
import onLoad from "./modules/utils/onLoad.js";

import { apiKey, newsifyUrl } from "./modules/variables.js";
import categories from "./modules/categories.js";


import listLayout from "./views/listLayout.js";
import categoryElms from "./views/categoryElms.js";


import categoryExpandCollapse from "./modules/articles/categoryExpandCollapse.js";
import articleSwipe from "./modules/articles/articleSwipe.js";
import articleSearch from "./modules/articles/articleSearch.js";

import articleStorage from "./modules/articles/articleStorage.js";



// ------ INIT ------ //

onLoad();


let categoriesList = categories();

listLayout();





// ------ FETCH ------ //

function newsFetch() {
    let articleArr = articleStorage()
    console.log(articleArr.length);
    if (articleArr.length == 0) {
        document.querySelector("main").outerHTML = `
            <main class="archive__empty">
                <p class="archive__empty__message">You haven't archived any articles yet.</p>
            </main>
        `
    }
    // console.log("articleArr", articleArr);

    const contentElm = document.querySelector(".content");
    contentElm.innerHTML += categoriesList.map(category => {
        if (category.enabled) {
            let categoryName = category.display_name;

            let isStored = articleArr.some((article) =>
                article.category === categoryName)
            // console.log(categoryName, isStored);
            if (isStored) {
                // console.log(categoryName);
                
                let categoryArticles = articleArr.filter((article) =>
                    article.category === categoryName);
    
                return categoryElms(categoryName, categoryArticles);
            }
        }
        
    }).join("");

    categoryExpandCollapse()
    articleSwipe()
    articleSearch()
}
newsFetch();