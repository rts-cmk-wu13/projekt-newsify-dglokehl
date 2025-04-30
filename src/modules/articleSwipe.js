import * as storage from "./storage.js";
import articleStorage from "./articleStorage.js";



export default function articleSwipe() {
    let initX
    let currentX
    let movedX


    let articleArr = articleStorage()
    console.log("1. articleArr", articleArr);


    let currentPage = document.querySelector("#app").getAttribute("data-page")

    document.querySelectorAll(".articlewrapper").forEach(elm => {
        let articleElm = elm.firstElementChild
        let articleBg = elm.lastElementChild
        let articleBgIcon = articleBg.firstElementChild


        let articleObj = {
            "id": articleElm.getAttribute("data-id"),
            "url": articleElm.getAttribute("href"),
            "thumb": articleElm.firstElementChild.getAttribute("src"),
            "title": articleElm.lastElementChild.firstElementChild.innerText,
            "abstract": articleElm.lastElementChild.lastElementChild.innerText,
            "category": articleElm.getAttribute("data-category"),
        }
        // console.log(articleObj);



        // ------ STORAGE ------ //

        let isStored = articleArr.some((article) =>
            article.id === articleObj.id)
        if (isStored) {
            if (currentPage !== "archive") {
                articleBgIcon.classList.add("icon--fill")
            }
        }



        // ------ START ------ //

        elm.addEventListener("pointerdown", (e) => {
            initX = e.clientX
            console.log("down", initX);

            articleElm.classList.remove("animation")
            articleBg.classList.remove("fadeout", "selected")
        })



        // ------ MOVE ------ //

        elm.addEventListener("pointermove", (e) => {
            currentX = e.clientX
            movedX = (initX - currentX) / 16

            if (movedX >= 6.5) {
                // movedX = 6.5
                articleBg.classList.add("selected")
            }
            // console.log("move", movedX);

            articleElm.style.transform = "translateX(-" + movedX + "rem)"


            let movedXpercent = Math.round((movedX / 6.5) * 100)
            if (movedXpercent >= 100) {
                movedXpercent = 100
            }
            // console.log("percentage", movedXpercent);

            articleBg.style.opacity = movedXpercent + "%"
            articleBgIcon.style.scale = movedXpercent + "%"
        })



        // ------ END ------ //

        elm.addEventListener("pointerup", (e) => {
            console.log("up", movedX);
            initX = undefined


            articleElm.style.transform = "translateX(0px)"
            articleElm.classList.add("animation")

            articleBg.style.opacity = 0
            articleBg.classList.add("fadeout")
            articleBg.classList.remove("selected")


            if (movedX >= 6.5) {
                isStored = articleArr.some((article) =>
                    article.id === articleObj.id)
                let storedIndex = articleArr.findIndex((article) =>
                    article.id === articleObj.id)


                if (currentPage === "archive") {
                    console.log("Removing article from storage");

                    // console.log("storedIndex", storedIndex);
                    articleArr.splice(storedIndex, 1)

                    // console.log("articleArr", articleArr);
                    storage.stringifyTo("articleStorage", articleArr)
                    console.log("articleStorage", articleStorage());

                    let articleContainer = elm.parentElement
                    elm.remove()
                    if (articleContainer.childElementCount == 0) {
                        articleContainer.parentElement.remove()
                    }

                } else {
                    if (!isStored) {
                        console.log("Adding article to storage");
                        articleArr.push(articleObj)

                        // console.log("A. articleArr", articleArr);
                        storage.stringifyTo("articleStorage", articleArr)
                        console.log("A. articleStorage", articleStorage());

                        articleBgIcon.classList.add("icon--fill")
                    } else {
                        console.log("Removing article from storage");
                        console.log("B. storedIndex", storedIndex);
                        articleArr.splice(storedIndex, 1)

                        // console.log("B. articleArr", articleArr);
                        storage.stringifyTo("articleStorage", articleArr)
                        console.log("B. articleStorage", articleStorage());

                        articleBgIcon.classList.remove("icon--fill")
                    }
                }
            }
        })
    });
}