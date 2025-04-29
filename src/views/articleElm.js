export default function articleElm(categoryArticles, category) {
    let currentPage = document.querySelector("#app").getAttribute("data-page")


    let buttonType

    let articleId
    let articleCategory
    let articleUrl
    let articleImg
    let articleTitle
    let articleSubtitle

    
    return categoryArticles.map(article => {
        if (currentPage === "archive") {
            buttonType = "delete"
    
            articleId = article.id
            articleCategory = article.category
            articleUrl = article.url

            articleImg = article.thumb
            articleTitle = article.title
            articleSubtitle = article.subtitle
        } else {
            buttonType = "bookmark"

            articleId = article.uri
            articleCategory = category
            articleUrl = article.url

            articleImg = article.multimedia[2].url
            articleTitle = article.title
            articleSubtitle = article.abstract
        }

        return `
            <div class="articlewrapper">
                <a href="${articleUrl}" target="_blank" class="category__article" data-id="${articleId}" data-category="${articleCategory}">
                    <img src="${articleImg}" alt="" class="category__article__img">
                    <div class="category__article__text">
                        <h3 class="headline category__article__text__heading">
                            ${articleTitle}
                        </h3>
                        <p class="category__article__text__subheading">
                            ${articleSubtitle}
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