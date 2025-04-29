
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





// ------ LAYOUT ------ //

function loginLayout() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let loginType = params.get("login");


    let loginContainer

    if (!loginType) {
        loginContainer = `
            <div action="" class="login__options">
                <div class="login__options__some">
                    <span class="btn login__options__btn login__options__btn--some">
                        Continue with Facebook
                    </span>
                    <span class="btn login__options__btn login__options__btn--some">
                        Continue with Google
                    </span>
                </div>

                <div class="login__options__divider">
                    <span class="login__options__divider__line"></span>
                    <span>or</span>
                    <span class="login__options__divider__line"></span>
                </div>

                <a href="login.html?login=login" class="btn btn--fill login__options__btn login__options__btn--password">
                    Sign in with password
                </a>
            </div>

            <p class="login__signup">
                Don't have an account? <a href="login.html?login=signup" class="login__signup__link">Sign up</a>
            </p>
        `
    } else if (loginType === "login") {
        loginContainer = `
            <form action="" class="login__form">
                <div class="login__form__field">
                    <label for="email" class="login__form__label">
                        E-mail:
                    </label>
                    <input type="email" name="email" id="email" class="login__form__input">
                </div>

                <div class="login__form__field">
                    <label for="password" class="login__form__label">
                        Password:
                    </label>
                    <input type="password" name="password" id="password" class="login__form__input">
                </div>

                <div class="login__form__options">
                    <input type="submit" value="Sign in" class="btn btn--fill login__form__btn login__form__btn--submit">

                    <a href="login.html" class="btn login__form__btn login__form__btn--back">
                        Go back
                    </a>
                </div>
            </form>

            <p class="login__signup">
                Don't have an account? <a href="login.html?login=signup" class="login__signup__link">Sign up</a>
            </p>
        `
    } else if (loginType === "signup") {
        loginContainer = `
            <form action="" class="login__form">
                <div class="login__form__field">
                    <label for="email" class="login__form__label">
                        E-mail:
                    </label>
                    <input type="email" name="email" id="email" class="login__form__input">
                </div>

                <div class="login__form__field">
                    <label for="password" class="login__form__label">
                        Password:
                    </label>
                    <input type="password" name="password" id="password" class="login__form__input">
                </div>

                <div class="login__form__options">
                    <input type="submit" value="Sign up" class="btn btn--fill login__form__btn login__form__btn--submit">

                    <a href="login.html" class="btn login__form__btn login__form__btn--back">
                        Go back
                    </a>
                </div>
            </form>

            <p class="login__signup">
                Already have an account? <a href="login.html?login=login" class="login__signup__link">Log in</a>
            </p>
        `
    }


    document.querySelector("#app").innerHTML = `
        <header class="login__text">
            <img src="public/newsify_logo.svg" alt="" class="login__text__logo">
            <h1 class="login__text__heading headline">Newsify</h1>

            <p class="login__text__intro">Welcome! Let's dive into your account!</p>
        </header>

        ${loginContainer}
    `
}



loginLayout()