
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



// ------ INIT ------ //

checkLogin()
checkDarkmode();


let categoriesList = categories()

listLayout()





// ------ FETCH ------ //

function newsFetch() {
    let fetchUrl = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`

    const fetchOptions = {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
    };


    fetch(fetchUrl, fetchOptions)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let fetchResults = data.results

            const contentElm = document.querySelector(".content");
            contentElm.innerHTML += categoriesList.map(category => {
                if (category.enabled) {
                    let categoryName = category.name

                    let categoryArticles = fetchResults.filter((article) =>
                        article.section === categoryName || article.subsection === categoryName);
                    // console.log(categoryName, categoryArticles);

                    return categoryElms(categoryName, categoryArticles)
                }
            }).join("")


            categoryExpandCollapse()
            articleSwipe()
        });
}
newsFetch();