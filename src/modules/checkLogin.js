import * as storage from "./storage.js";
import { newsifyUrl } from "./variables.js";


export default function checkLogin() {
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