
// ------ IMPORTS ------ //

import "./styles/style.scss";
import "./styles/main.scss";


import * as storage from "./modules/storage.js";

import checkDarkmode from "./modules/checkDarkmode.js";
import checkLogin from "./modules/checkLogin.js";

import { apiKey } from "./modules/variables.js";
import categories from "./modules/categories.js";


import listLayout from "./views/listLayout.js";
import categoryElms from "./views/categoryElms.js";


import categoryExpandCollapse from "./modules/categoryExpandCollapse.js";
import articleSwipe from "./modules/articleSwipe.js";

import articleStorage from "./modules/articleStorage.js";



// ------ INIT ------ //

checkLogin()
checkDarkmode();


let categoriesList = categories();

listLayout();





// ------ FETCH ------ //

function newsFetch() {
    let articleArr = articleStorage()
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
}
newsFetch();