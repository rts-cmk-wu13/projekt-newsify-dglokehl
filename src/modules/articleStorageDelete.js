import * as storage from "./storage.js";
import articleStorage from "./articleStorage.js";


export default function articleStorageDelete() {
    let articleArr = articleStorage()
    console.log("1. articleArr", articleArr);

    let articleButtons = document.querySelectorAll(".articlewrapper__btn")
    articleButtons.forEach(btn => {
        let articleElm = btn.parentElement.firstElementChild

        let articleId = articleElm.getAttribute("data-id")

        let isStored = articleArr.some((article) => article.id === articleId)
        let storedIndex = articleArr.findIndex((article) => article.id === articleId)
        console.log("2. isStored", isStored);


        btn.addEventListener("click", () => {
            console.log(articleElm);

            console.log("B. storedIndex", storedIndex);
            articleArr.splice(storedIndex, 1)
            console.log("B. articleArr", articleArr);
            storage.stringifyTo("articleStorage", articleArr)
            console.log("B. articleStorage", articleStorage());

            articleElm.remove()
        })
    });
}