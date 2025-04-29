import * as storage from "./storage.js";


export default function checkDarkmode() {
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