export default function categoryExpandCollapse() {
    let categoryHeaders = document.querySelectorAll(".category__header")
    categoryHeaders.forEach(elm => {
        elm.addEventListener("click", () => {
            let categoryArrow = elm.lastElementChild
            let categoryContent = elm.nextElementSibling

            if (categoryArrow.classList.contains("category__header__arrow--down")) {
                categoryArrow.classList.remove("category__header__arrow--down")
                categoryArrow.classList.add("category__header__arrow--right")

                categoryContent.classList.add("hidden")
            } else {
                categoryArrow.classList.remove("category__header__arrow--right")
                categoryArrow.classList.add("category__header__arrow--down")

                categoryContent.classList.remove("hidden")
            }
        })
    });
}