import * as storage from "./storage.js";


export default function checkLogin() {
    let isLoggedIn = storage.parseFrom("isLoggedIn")

    let currentPage = document.querySelector("#app").getAttribute("data-page")

    if (currentPage === "welcome") {
        if (isLoggedIn) {
            window.location.pathname = "";
        }
    } else {
        if (!isLoggedIn) {
            // window.location.pathname = "/welcome.html";
        }
    }
}