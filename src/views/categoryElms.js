import articleElm from "./articleElm.js";



export default function categoryElms(categoryName, articleArr) {
    return `
        <section class="category">
            <header class="category__header">
                <h2 class="headline category__header__heading">
                    <img src="./src/img/newsify_logo.svg" alt="Newsify logo" class="icon icon--logo">
                    ${categoryName}
                </h2>
                <span class="material-symbols-rounded category__header__arrow category__header__arrow--down">
                    arrow_forward_ios
                </span>
            </header>

            <div class="category__content">
                ${articleElm(articleArr)}
            </div>
        </section>
    `
}