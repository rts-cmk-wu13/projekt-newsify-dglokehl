import * as storage from "../storage.js";
import articleElm from "../../views/articleElm.js";



export default function articleSearch() {
    const contentElm = document.querySelector(".content");
    let contentElmClone = contentElm.cloneNode(true);


    let initArticles = [];
    document.querySelectorAll(".category__article").forEach(article => {
        let articleObj = {
            "id": article.getAttribute("data-id"),
            "url": article.getAttribute("href"),
            "thumb": article.querySelector(".category__article__img").getAttribute("src"),
            "title": article.querySelector(".category__article__text__heading").innerText,
            "abstract": article.querySelector(".category__article__text__subheading").innerText,
            "category": article.getAttribute("data-category"),
        };
        initArticles.push(articleObj);
    });
    storage.stringifyTo("pageArticles", initArticles);



    let searchBar = document.querySelector(".search__bar");

    searchBar.addEventListener("input", (e) => {
        e.preventDefault();

        let searchQuery = searchBar.value.toLowerCase();

        let pageArticles = storage.parseFrom("pageArticles");

        if (searchQuery.length > 0) {
            let filteredArticles = pageArticles.filter((article) =>
                article.title.toLowerCase().includes(searchQuery) || article.abstract.toLowerCase().includes(searchQuery));

            contentElm.innerHTML = articleElm(filteredArticles);
        } else {
            contentElm.innerHTML = contentElmClone.innerHTML;
        }
    });
}