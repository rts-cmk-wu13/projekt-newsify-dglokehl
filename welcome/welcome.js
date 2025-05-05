
// ------ IMPORTS ------ //

import "../src/styles/style.scss";
import "../src/styles/welcome.scss";


import * as storage from "../src/modules/storage.js";
import onLoad, { checkDarkmode } from "../src/modules/utils/onLoad.js";

import { apiKey, newsifyUrl } from "../src/modules/variables.js";


import gallerySwipe from "../src/modules/utils/gallerySwipe.js";

import galleryImgDark1 from './img/gallery1-dark.png'
import galleryImgDark2 from './img/gallery2-dark.png'
import galleryImgDark3 from './img/gallery3-dark.png'
import galleryImgLight1 from './img/gallery1-light.png'
import galleryImgLight2 from './img/gallery2-light.png'
import galleryImgLight3 from './img/gallery3-light.png'



// ------ INIT ------ //

onLoad()





// ------ SLIDER LAYOUT ------ //

function sliderLayout() {
    let imgDarkLight1
    let imgDarkLight2
    let imgDarkLight3
    if (checkDarkmode()) {
        imgDarkLight1 = galleryImgDark1
        imgDarkLight2 = galleryImgDark2
        imgDarkLight3 = galleryImgDark3
    } else {
        imgDarkLight1 = galleryImgLight1
        imgDarkLight2 = galleryImgLight2
        imgDarkLight3 = galleryImgLight3
    }

    let gallerySlides = [
        {
            "img": imgDarkLight1,
            "heading": "Stay Connected, <br> Everywhere, Anytime",
            "text": "Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.",
        },
        {
            "img": imgDarkLight2,
            "heading": "Become a Savvy <br> Global Citizen.",
            "text": "Discover tailored news that aligns with your interests and preferences. Your personalized news journey awaits!",
        },
        {
            "img": imgDarkLight3,
            "heading": "Enhance your News <br> Journey Now!",
            "text": "Be part of our dynamic community and contribute your insights and participate in enriching conversations.",
        },
    ]


    document.querySelector("#app").innerHTML = `
        <div class="splash">
            <div class="splash__logo">
                <img src="/newsify_logo.svg" alt="Newsify logo" class="splash__img">
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
                <a href="/login/" class="slider__btn slider__btn--skip btn">
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