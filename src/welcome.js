
// ------ IMPORTS ------ //

import "./styles/style.scss";
import "./styles/welcome.scss";


import * as storage from "./modules/storage.js";

import checkDarkmode from "./modules/checkDarkmode.js";
import checkLogin from "./modules/checkLogin.js";

import { apiKey } from "./modules/variables.js";



// ------ INIT ------ //

checkLogin()
checkDarkmode()





// ------ SLIDER LAYOUT ------ //

function sliderLayout() {
    let index = 0


    let imgDarkLight
    if (checkDarkmode()) {
        imgDarkLight = "-dark"
    } else {
        imgDarkLight = "-light"
    }

    let gallerySlides = [
        {
            "img": "src/img/gallery1" + imgDarkLight + ".png",
            "heading": "Stay Connected, <br> Everywhere, Anytime",
            "text": "Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.",
        },
        {
            "img": "src/img/gallery2" + imgDarkLight + ".png",
            "heading": "Become a Savvy <br> Global Citizen.",
            "text": "Discover tailored news that aligns with your interests and preferences. Your personalized news journey awaits!",
        },
        {
            "img": "src/img/gallery3" + imgDarkLight + ".png",
            "heading": "Enhance your News <br> Journey Now!",
            "text": "Be part of our dynamic community and contribute your insights and participate in enriching conversations.",
        },
    ]


    document.querySelector("#app").innerHTML = `
        <div class="splash">
            <img src="public/newsify_logo.svg" alt="" class="splash__img">
            <span class="splash__text headline">Newsify</span>
        </div>

        <figure class="slider__gallery">
            <img src="${gallerySlides[index].img}" alt="" class="slider__gallery__img">
        </figure>

        <h1 class="slider__heading headline">${gallerySlides[index].heading}</h1>
        <p class="slider__text">${gallerySlides[index].text}</p>

        <div class="slider__carousel">
            <span class="indicator indicator--current"></span>
            <span class="indicator"></span>
            <span class="indicator"></span>
        </div>

        <div class="slider__btn__wrapper">
            <a href="login.html" class="slider__btn slider__btn--skip btn">
                Skip
            </a>
            <span class="slider__btn slider__btn--continue btn btn--fill">
                Continue
            </span>
        </div>
    `


    let sliderImg = document.querySelector(".slider__gallery__img")
    let sliderHeading = document.querySelector(".slider__heading")
    let sliderText = document.querySelector(".slider__text")



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
            window.location.pathname = "/login.html";
        }
    })



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


sliderLayout()