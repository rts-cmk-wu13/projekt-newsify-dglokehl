
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
    let fetchUrl = `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${apiKey}`

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
                    let categoryName = category.display_name

                    let categoryArticles = fetchResults.filter((article) =>
                        article.section === categoryName || article.subsection === categoryName);
                    let newsArticles = categoryArticles.filter((article) => 
                        article.uri.length > 0
                        && article.url.length > 0
                        && article.media.length > 0
                        && article.title.length > 0
                        && article.abstract.length > 0
                    )

                    if (newsArticles.length >= 1) {
                        let articleObjArr = []
                        newsArticles.map(article => {
                            let articleObj = {
                                "id": article.uri,
                                "url": article.url,
                                "thumb": article.media[0]["media-metadata"][0].url,
                                "title": article.title,
                                "abstract": article.abstract,
                                "category": categoryName,
                            }
                            articleObjArr.push(articleObj)
                        }).join("")

                        return categoryElms(categoryName, articleObjArr)
                    }
                    
                }
            }).join("")


            categoryExpandCollapse()
            articleSwipe()
        });
}
newsFetch();