import * as storage from "../storage.js";
import { newsifyUrl } from "../variables.js";



export default function onLoad() {
    checkDarkmode()
    checkLogin()
}



export function checkDarkmode() {
    const rootElm = document.documentElement;

    let isDarkMode = JSON.parse(storage.readFrom("isDarkMode"));
    let browserDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    console.log("matchMedia", browserDark);
    console.log("localStorage", isDarkMode);


    let darkState;

    if (isDarkMode === null) {
        darkState = browserDark;
    } else {
        darkState = isDarkMode;
    }

    if (darkState) {
        rootElm.setAttribute("data-dark", darkState);
    } else {
        rootElm.setAttribute("data-dark", darkState);
    }

    return darkState
}


export function checkLogin() {
    let isLoggedIn = storage.parseFrom("isLoggedIn")

    let currentPage = document.querySelector("#app").getAttribute("data-page")


    if (currentPage === "welcome" || currentPage === "login") {
        if (isLoggedIn) {
            window.location.href = newsifyUrl
        }
    } else {
        if (!isLoggedIn) {
            window.location.href = newsifyUrl + "/welcome.html";
        }
    }
}