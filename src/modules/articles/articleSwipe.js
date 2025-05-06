import * as storage from "../storage.js";
import articleStorage from "./articleStorage.js";
import articleAddRemove from "./articleAddRemove.js";



export default function articleSwipe() {
    let initX;
    let currentX;
    let movedX;


    let currentPage = document.querySelector("#app").getAttribute("data-page");

    let articleArr = articleStorage();
    // console.log("1. articleArr", articleArr);


    document.querySelectorAll(".articlewrapper").forEach(wrapperElm => {
        let articleElm = wrapperElm.querySelector(".category__article");
        let articleBg = wrapperElm.querySelector(".articlewrapper__bg");
        let articleBgIcon = wrapperElm.querySelector(".articlewrapper__icon");

        let elmObj = {
            "wrapperElm": wrapperElm,
            "articleElm": articleElm,
            "articleBg": articleBg,
            "articleBgIcon": articleBgIcon,
        };


        let articleObj = {
            "id": articleElm.getAttribute("data-id"),
            "url": articleElm.getAttribute("href"),
            "thumb": articleElm.querySelector(".category__article__img").getAttribute("src"),
            "title": articleElm.querySelector(".category__article__text__heading").innerText,
            "abstract": articleElm.querySelector(".category__article__text__subheading").innerText,
            "category": articleElm.getAttribute("data-category"),
        };



        // ------ STORAGE ------ //

        let isStored = articleArr.some((article) =>
            article.id === articleObj.id);
        if (isStored && currentPage !== "archive") {
            articleBgIcon.classList.add("icon--fill");
        }



        // ------ START ------ //

        wrapperElm.addEventListener("pointerdown", (e) => {
            initX = e.clientX;
            // console.log("down", initX);

            articleElm.classList.remove("animation");
            articleBg.classList.remove("fadeout", "selected");
        });



        // ------ MOVE ------ //

        wrapperElm.addEventListener("pointermove", (e) => {
            currentX = e.clientX;
            movedX = (initX - currentX) / 16;
            // console.log("move", movedX);


            articleElm.style.transform = "translateX(-" + movedX + "rem)";

            if (movedX >= 6.5) {
                articleBg.classList.add("selected");
            } else {
                articleBg.classList.remove("selected");
            }


            let movedXpercent = Math.round((movedX / 6.5) * 100);
            if (movedXpercent >= 100) {
                movedXpercent = 100;
            }
            // console.log("percentage", movedXpercent);

            articleBg.style.opacity = movedXpercent + "%";
            articleBgIcon.style.scale = movedXpercent + "%";
        });



        // ------ END ------ //

        wrapperElm.addEventListener("pointerup", (e) => {
            // console.log("up", movedX);
            initX = undefined;


            articleElm.style.transform = "translateX(0px)";
            articleElm.classList.add("animation");

            articleBg.style.opacity = 0;
            articleBg.classList.add("fadeout");


            if (movedX >= 6.5) {
                articleAddRemove(articleObj, elmObj);
            }
        });
    });
}