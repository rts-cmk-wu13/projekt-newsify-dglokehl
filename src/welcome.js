
// ------ IMPORTS ------ //

import "./styles/style.scss";
import "./styles/welcome.scss";


import * as storage from "./modules/storage.js";
import onLoad, { checkDarkmode } from "./modules/utils/onLoad.js";

import { apiKey, newsifyUrl } from "./modules/variables.js";


import gallerySwipe from "./modules/utils/gallerySwipe.js";



// ------ INIT ------ //

onLoad()





// ------ SLIDER LAYOUT ------ //

function sliderLayout() {
    let imgDarkLight
    if (checkDarkmode()) {
        imgDarkLight = "-dark"
    } else {
        imgDarkLight = "-light"
    }

    let gallerySlides = [
        {
            "img": "./src/img/gallery1" + imgDarkLight + ".png",
            "heading": "Stay Connected, <br> Everywhere, Anytime",
            "text": "Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.",
        },
        {
            "img": "./src/img/gallery2" + imgDarkLight + ".png",
            "heading": "Become a Savvy <br> Global Citizen.",
            "text": "Discover tailored news that aligns with your interests and preferences. Your personalized news journey awaits!",
        },
        {
            "img": "./src/img/gallery3" + imgDarkLight + ".png",
            "heading": "Enhance your News <br> Journey Now!",
            "text": "Be part of our dynamic community and contribute your insights and participate in enriching conversations.",
        },
    ]


    document.querySelector("#app").innerHTML = `
        <div class="splash">
            <div class="splash__logo">
                <img src="./src/img/newsify_logo.svg" alt="Newsify logo" class="splash__img">
                <span class="splash__heading headline">Newsify</span>
            </div>
        </div>

        <div class="slider">
            <figure class="slider__gallery">
                <img src="${gallerySlides[0].img}" alt="Newsify app overview" class="slider__gallery__img">
            </figure>

            <h1 class="slider__heading headline">${gallerySlides[0].heading}</h1>
            <p class="slider__text">${gallerySlides[0].text}</p>

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
        </div>
    `

    setTimeout(() => {
        document.querySelector(".splash").style.display = "none"
    }, 1200)



    let sliderObj = {
        "elm": document.querySelector(".slider"),
        "img": document.querySelector(".slider__gallery__img"),
        "heading": document.querySelector(".slider__heading"),
        "text": document.querySelector(".slider__text"),
    }

    gallerySwipe(gallerySlides, sliderObj)
}


sliderLayout()