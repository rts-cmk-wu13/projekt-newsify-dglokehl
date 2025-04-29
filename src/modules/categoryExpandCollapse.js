export default function categoryExpandCollapse() {
    let categoryHeaders = document.querySelectorAll(".category__header")
    categoryHeaders.forEach(elm => {
        elm.addEventListener("click", () => {
            let content = elm.nextElementSibling
            let arrow = elm.lastElementChild

            if (arrow.classList.contains("category__header__arrow--down")) {
                arrow.classList.remove("category__header__arrow--down")
                arrow.classList.add("category__header__arrow--right")

                content.classList.add("hidden")
            } else {
                arrow.classList.remove("category__header__arrow--right")
                arrow.classList.add("category__header__arrow--down")

                content.classList.remove("hidden")
            }
        })
    });
}