export default function gallerySwipe(gallerySlides, sliderObj) {
    let index = 0

    let initX
    let currentX
    let movedX
    let swipeLength = 50


    let sliderElm = sliderObj.elm
    let sliderImg = sliderObj.img
    let sliderHeading = sliderObj.heading
    let sliderText = sliderObj.text



    // ------ BUTTONS ------ //

    let indicatorBtns = Array.from(document.querySelectorAll(".indicator"))
    indicatorBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            index = indicatorBtns.indexOf(btn)
            galleryChange()
        })
    });


    let continueBtn = document.querySelector(".slider__btn--continue")
    continueBtn.addEventListener("click", () => {
        if (index < gallerySlides.length - 1) {
            index++
            galleryChange()
        } else {
            window.location.pathname = "/login/";
        }
    })



    // ------ SWIPE ------ //

    sliderElm.addEventListener("pointerdown", (e) => {
        initX = e.clientX
        movedX = undefined
        console.log("down", initX);
    });


    sliderElm.addEventListener("pointermove", (e) => {
        currentX = e.clientX
        movedX = initX - currentX
        // console.log("move", movedX);
    });


    sliderElm.addEventListener("pointerup", (e) => {
        console.log("up", movedX);
        initX = undefined
        currentX = undefined

        if (movedX > swipeLength) {
            if (index < gallerySlides.length - 1) {
                index++
                galleryChange()
            } else {
                window.location.pathname = "/login/";
            }
        } else if (movedX < -swipeLength && index > 0) {
            index--
            galleryChange()
        }
    });



    // ------ GALLERY CHANGE ------ //

    function galleryChange() {
        sliderImg.setAttribute("src", gallerySlides[index].img)
        sliderHeading.innerHTML = gallerySlides[index].heading
        sliderText.innerHTML = gallerySlides[index].text

        indicatorBtns.forEach(btn => {
            btn.classList.remove("indicator--current")
        });
        indicatorBtns[index].classList.add("indicator--current")
    }
}
