import * as storage from "../storage.js";
import articleStorage from "./articleStorage.js";



export default function articleAddRemove(articleObj, elmObj) {
    let currentPage = document.querySelector("#app").getAttribute("data-page")

    let articleArr = articleStorage()

    let wrapperElm = elmObj.wrapperElm
    let articleBgIcon = elmObj.articleBgIcon


    let isStored = articleArr.some((article) =>
        article.id === articleObj.id)
    let storedIndex = articleArr.findIndex((article) =>
        article.id === articleObj.id)


    if (currentPage === "archive") {
        articleArr.splice(storedIndex, 1)
        console.log("Removing article from storage");

        // console.log("articleArr", articleArr);
        storage.stringifyTo("articleStorage", articleArr)
        console.log("articleStorage", articleStorage());

        let articleContainer = wrapperElm.parentElement
        wrapperElm.remove()
        if (articleContainer.childElementCount == 0) {
            articleContainer.parentElement.remove()
        }

    } else {
        if (!isStored) {
            articleArr.push(articleObj)
            console.log("Adding article to storage");

            // console.log("A. articleArr", articleArr);
            storage.stringifyTo("articleStorage", articleArr)
            console.log("A. articleStorage", articleStorage());

            articleBgIcon.classList.add("icon--fill")
        } else {
            articleArr.splice(storedIndex, 1)
            console.log("Removing article from storage");

            // console.log("B. articleArr", articleArr);
            storage.stringifyTo("articleStorage", articleArr)
            console.log("B. articleStorage", articleStorage());

            articleBgIcon.classList.remove("icon--fill")
        }
    }
}