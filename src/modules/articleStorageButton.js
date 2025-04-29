import * as storage from "./storage.js";
import articleStorage from "./articleStorage.js";


export default function articleStorageButton() {
    let articleArr = articleStorage()
    console.log("1. articleArr", articleArr);

    let articleButtons = document.querySelectorAll(".articlewrapper__btn")
    articleButtons.forEach(btn => {
        let btnIcon = btn.firstElementChild

        let articleElm = btn.parentElement.firstElementChild

        let articleId = articleElm.getAttribute("data-id")
        let articleCategory = articleElm.getAttribute("data-category")
        let articleUrl = articleElm.getAttribute("href")

        let articleImg = articleElm.firstElementChild.getAttribute("src")
        let articleTitle = articleElm.lastElementChild.firstElementChild.innerText
        let articleSubtitle = articleElm.lastElementChild.lastElementChild.innerText

        let articleObj = {
            "id": articleId,
            "category": articleCategory,
            "url": articleUrl,
            "thumb": articleImg,
            "title": articleTitle,
            "subtitle": articleSubtitle
        }

        let isStored = articleArr.some((article) => article.id === articleId)
        let storedIndex = articleArr.findIndex((article) => article.id === articleId)
        console.log("2. isStored", isStored);

        if (isStored) {
            btnIcon.classList.add("icon--fill")
        }

        btn.addEventListener("click", () => {
            if (!isStored) {
                articleArr.push(articleObj)
                console.log("A. articleArr", articleArr);
                storage.stringifyTo("articleStorage", articleArr)
                console.log("A. articleStorage", articleStorage());

                btnIcon.classList.add("icon--fill")
            } else {
                console.log("B. storedIndex", storedIndex);
                articleArr.splice(storedIndex, 1)
                console.log("B. articleArr", articleArr);
                storage.stringifyTo("articleStorage", articleArr)
                console.log("B. articleStorage", articleStorage());

                btnIcon.classList.remove("icon--fill")
            }
        })
    });
}