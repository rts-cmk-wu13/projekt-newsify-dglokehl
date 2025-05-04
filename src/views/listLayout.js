export default function listLayout() {
    document.querySelector("#app").innerHTML = `
        ${headerElm()}
    
        <main>
            <form action="" class="search" novalidate>
                <input type="search" name="q" id="searchbar" class="search__bar" placeholder="Search news">
            </form>

            <div class="content"></div>
        </main>
    
        ${footerElm()}
    `;
}



export function headerElm() {
    return `
        <header class="header">
            <img src="/src/img/newsify_logo.svg" alt="Newsify logo" class="icon icon--logo">
            <h1 class="headline header__heading">Newsify</h1>
        </header>
    `
}

export function footerElm() {
    let currentPage = document.querySelector("#app").getAttribute("data-page")

    function checkPage(pageName) {
        if (currentPage === pageName) {
            return "menu__link menu__link--active"
        } else {
            return "menu__link"
        }
    }

    return `
        <footer class="footer">
            <menu class="menu footer__menu">
                <li class="menu__item">
                    <a href="index.html" class="${checkPage("home")}">
                        <span class="material-symbols-rounded menu__link__icon icon">
                            home
                        </span>
                        <span class="menu__link__text">Home</span>
                    </a>
                </li>

                <li class="menu__item">
                    <a href="/popular/" class="${checkPage("popular")}">
                        <span class="material-symbols-rounded menu__link__icon icon">
                            kid_star
                        </span>
                        <span class="menu__link__text">Popular</span>
                    </a>
                </li>

                <li class="menu__item">
                    <a href="/archive/" class="${checkPage("archive")}">
                        <span class="material-symbols-rounded menu__link__icon icon">
                            bookmark
                        </span>
                        <span class="menu__link__text">Archive</span>
                    </a>
                </li>

                <li class="menu__item">
                    <a href="/settings/" class="${checkPage("settings")}">
                        <span class="material-symbols-rounded menu__link__icon icon">
                            settings
                        </span>
                        <span class="menu__link__text">Settings</span>
                    </a>
                </li>
            </menu>
        </footer>
    `
}