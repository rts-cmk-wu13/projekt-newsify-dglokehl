export default function articleSwipe() {
    let initX
    let currentX
    let movedX


    let articleElms = document.querySelectorAll(".articlewrapper")
    articleElms.forEach(elm => {
        // let articleElm = elm.firstElementChild
        elm.addEventListener("pointerdown", startTouch)
        elm.addEventListener("pointermove", moveTouch)
        elm.addEventListener("pointerup", endTouch)
    });


    function startTouch(e) {
        let articleElm = this.firstElementChild
        let articleBg = this.lastElementChild


        initX = e.clientX
        console.log("down", initX);

        articleElm.classList.remove("animation")
        articleBg.classList.remove("animation")
    }

    function moveTouch(e) {
        let articleElm = this.firstElementChild
        let articleBg = this.lastElementChild


        currentX = e.clientX
        movedX = (initX - currentX) / 16
        if (movedX >= 6.5) {
            // movedX = 6.5
            articleBg.classList.add("selected")
        }
        // console.log("move", movedX);

        articleElm.style.transform = "translateX(-" + movedX + "rem)"

        let movedXpercent = Math.round((movedX / 6.5) * 100)
        // console.log("percentage", movedXpercent);

        articleBg.style.opacity = movedXpercent + "%"
    }

    function endTouch(e) {
        let articleElm = this.firstElementChild
        let articleBg = this.lastElementChild


        console.log("up", movedX);
        initX = undefined


        articleElm.style.transform = "translateX(0px)"
        articleElm.classList.add("animation")
        articleBg.style.opacity = 0
        articleBg.classList.add("animation")
        articleBg.classList.remove("selected")

        if (movedX >= 6.5) {
            console.log("hej");
        }
    }
}