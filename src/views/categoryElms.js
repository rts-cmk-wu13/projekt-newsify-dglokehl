import articleElm from "./articleElm.js";


export default function categoryElms(category, categoryArticles) {
    let arrowPos
    if (categoryArticles.length < 1) {
        arrowPos = "category__header__arrow--right"
    } else {
        arrowPos = "category__header__arrow--down"
    }


    return `
        <section class="category ${category}">
            <header class="category__header">
                <h2 class="headline category__header__heading">
                    <img src="./public/newsify_logo.svg" alt="" class="icon icon--logo">
                    ${category}
                </h2>
                <span class="material-symbols-rounded category__header__arrow ${arrowPos}">
                    arrow_forward_ios
                </span>
            </header>

            <div class="category__content">
                ${articleElm(categoryArticles, category)}
            </div>
        </section>
    `
}