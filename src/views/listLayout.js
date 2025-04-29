import { headerElm, footerElm } from "./layoutElms.js";


export default function listLayout() {
    document.querySelector("#app").innerHTML = `
        ${headerElm()}
    
        <main>
            <div class="search">
                <input type="search" name="searchbar" id="searchbar" class="searchbar" placeholder="Search news">
            </div>

            <div class="content"></div>
        </main>
    
        ${footerElm()}
    `;
}