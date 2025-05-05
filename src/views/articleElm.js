export default function articleElm(articleArr) {
    let currentPage = document.querySelector("#app").getAttribute("data-page");

    let buttonType;
    if (currentPage === "archive") {
        buttonType = "delete";
    } else {
        buttonType = "bookmark";
    }

    return articleArr.map(article => {
        return `
            <div class="articlewrapper">
                <a href="${article.url}" target="_blank" class="category__article" data-id="${article.id}" data-category="${article.category}">
                    <img src="${article.thumb}" alt="Thumbnail: ${article.title}" class="category__article__img">
                    <div class="category__article__text">
                        <h3 class="headline category__article__text__heading">
                            ${article.title}
                        </h3>
                        <p class="category__article__text__subheading">
                            ${article.abstract}
                        </p>
                    </div>
                </a>

                <div class="articlewrapper__bg ${buttonType}">
                    <span class="material-symbols-rounded articlewrapper__icon icon">
                        ${buttonType}
                    </span>
                </div>
            </div>
        `;
    }).join("");
}