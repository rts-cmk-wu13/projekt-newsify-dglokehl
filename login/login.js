
// ------ IMPORTS ------ //

import "../src/styles/style.scss";
import "../src/styles/login.scss";


import * as storage from "../src/modules/storage.js";
import onLoad from "../src/modules/utils/onLoad.js";

import { apiKey, newsifyUrl } from "../src/modules/variables.js";



// ------ INIT ------ //

onLoad()





// ------ LAYOUT ------ //

function loginLayout() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let loginType = params.get("login");

    document.querySelector("#app").innerHTML = `
        <div class="login">
            <header class="login__text">
                <img src="/newsify_logo.svg" alt="Newsify logo" class="login__text__logo">
                <h1 class="login__text__heading headline">Newsify</h1>

                <p class="login__text__intro">Welcome! Let's dive into your account!</p>
            </header>

            <div class="login__options">
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

                <a href="/login/index.html?login=login" class="btn btn--fill login__options__btn login__options__btn--password">
                    Sign in with password
                </a>
            </div>

            <p class="login__signup">
                Don't have an account? <a href="/login/index.html?login=signup" class="login__signup__link">Sign up</a>
            </p>
        </div>
    `


    if(loginType) {
        let loginContainer = document.querySelector(".login__options")
        loginContainer.outerHTML = `
            <form action="" class="login__form" novalidate>
                <div class="login__form__field email">
                    <label for="email" class="login__form__label">
                        E-mail:
                    </label>
                    <input type="email" name="email" id="email" class="login__form__input">
                    <span class="login__form__field__error email__error"></span>
                </div>

                <div class="login__form__field password">
                    <label for="password" class="login__form__label">
                        Password:
                    </label>
                    <input type="password" name="password" id="password" class="login__form__input">
                    <span class="login__form__field__error password__error"></span>
                </div>

                <div class="login__form__options">
                    <input type="submit" value="Sign in" class="btn btn--fill login__form__btn login__form__btn--submit">

                    <a href="/login/" class="btn login__form__btn login__form__btn--back">
                        Go back
                    </a>
                </div>
            </form>
        `

        if (loginType === "signup") {
            // document.querySelector(".login__form").setAttribute("action", "/login.html?login=login")

            document.querySelector(".login__form__btn--submit").value = "Sign up"

            document.querySelector(".login__signup").innerHTML = `
                Already have an account? <a href="/login/index.html?login=login/" class="login__signup__link">Log in</a>
            `
        }



        // ------ FORM VALIDATE ------ //

        let loginForm = document.querySelector(".login__form");
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault()
            console.log(window.location.href);
            

            let emailInput = loginForm.email.value;
            let passwordInput = loginForm.password.value;

            let emailError = document.querySelector(".email__error");
            let passwordError = document.querySelector(".password__error");


            let regxp_email = /^[\w-\.]+@([\w-]+\.)+[\w-]+$/
            let regxp_password = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[\w]{8,}$/


            console.log("email:", emailInput, emailInput.length);
            console.log("password:", passwordInput, passwordInput.length);

            if (loginType === "login") {
                let userLogin = storage.parseFrom("userLogin")
                if (emailInput.length == 0) {
                    emailError.textContent = "Please enter your email"
                } else if (!regxp_email.test(emailInput)) {
                    emailError.textContent = "Please enter a valid email"
                } else if (emailInput === userLogin.email) {
                    emailError.textContent = ""
                }

                if (passwordInput.length == 0) {
                    passwordError.textContent = "Please enter your password"
                } else if (!regxp_password.test(passwordInput)) {
                    passwordError.textContent = "Please enter a valid password"
                } else if (passwordInput === userLogin.password) {
                    passwordError.textContent = ""
                }

                if (emailInput === userLogin.email
                    && passwordInput === userLogin.password) {
                    emailError.textContent = ""
                    passwordError.textContent = ""
                    storage.saveTo("isLoggedIn", true)
                    window.location.href = newsifyUrl
                }
            }



            if (loginType === "signup") {
                if (emailInput.length == 0) {
                    emailError.textContent = "Please enter an email"
                } else if (!regxp_email.test(emailInput)) {
                    emailError.textContent = "Please enter a valid email"
                } else {
                    emailError.textContent = ""
                }


                if (passwordInput.length == 0) {
                    passwordError.textContent = "Please enter a password"
                } else if (passwordInput.length < 8) {
                    passwordError.textContent = "Your password needs to be at least 8 characters long"
                } else if (!regxp_password.test(passwordInput)) {
                    passwordError.textContent = "Your password needs to include at least one uppercase letter and number"
                } else {
                    passwordError.textContent = ""
                }

                if (regxp_email.test(emailInput)
                    && regxp_password.test(passwordInput)) {
                    emailError.textContent = ""
                    passwordError.textContent = ""

                    let userLoginObj = {
                        "email": emailInput,
                        "password": passwordInput,
                    }
                    storage.stringifyTo("userLogin", userLoginObj)
                    window.location.href = newsifyUrl + "/login/"
                }
            }
        });
    }
}
loginLayout()