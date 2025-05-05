import{p as s,b as i,n as o}from"./onLoad-DMWptZYE.js";function r(){let a=[{section:"admin",display_name:"Admin"},{section:"arts",display_name:"Arts"},{section:"automobiles",display_name:"Automobiles"},{section:"books",display_name:"Books"},{section:"briefing",display_name:"Briefing"},{section:"business",display_name:"Business"},{section:"climate",display_name:"Climate"},{section:"corrections",display_name:"Corrections"},{section:"education",display_name:"Education"},{section:"en español",display_name:"En español"},{section:"fashion",display_name:"Fashion"},{section:"food",display_name:"Food"},{section:"gameplay",display_name:"Gameplay"},{section:"guide",display_name:"Guide"},{section:"health",display_name:"Health"},{section:"home & garden",display_name:"Home & Garden"},{section:"home page",display_name:"Home Page"},{section:"job market",display_name:"Job Market"},{section:"the learning network",display_name:"The Learning Network"},{section:"lens",display_name:"Lens"},{section:"magazine",display_name:"Magazine"},{section:"movies",display_name:"Movies"},{section:"multimedia/photos",display_name:"Multimedia/Photos"},{section:"new york",display_name:"New York"},{section:"obituaries",display_name:"Obituaries"},{section:"opinion",display_name:"Opinion"},{section:"parenting",display_name:"Parenting"},{section:"podcasts",display_name:"Podcasts"},{section:"reader center",display_name:"Reader Center"},{section:"real estate",display_name:"Real Estate"},{section:"smarter living",display_name:"Smarter Living"},{section:"science",display_name:"Science"},{section:"sports",display_name:"Sports"},{section:"style",display_name:"Style"},{section:"sunday review",display_name:"Sunday Review"},{section:"t brand",display_name:"T Brand"},{section:"t magazine",display_name:"T Magazine"},{section:"technology",display_name:"Technology"},{section:"theater",display_name:"Theater"},{section:"times insider",display_name:"Times Insider"},{section:"today’s paper",display_name:"Today’s Paper"},{section:"travel",display_name:"Travel"},{section:"u.s.",display_name:"U.S."},{section:"universal",display_name:"Universal"},{section:"the upshot",display_name:"The Upshot"},{section:"video",display_name:"Video"},{section:"the weekly",display_name:"The Weekly"},{section:"well",display_name:"Well"},{section:"world",display_name:"World"},{section:"your money",display_name:"Your Money"}];return a.forEach(e=>{e.enabled=!0}),console.log(a),s("categories")===null&&i("categories",a),s("categories")}function m(){document.querySelector("#app").innerHTML=`
        ${t()}
    
        <main>
            <form action="" class="search" novalidate>
                <input type="search" name="q" id="searchbar" class="search__bar" placeholder="Search news">
            </form>

            <div class="content"></div>
        </main>
    
        ${l()}
    `}function t(){return`
        <header class="header">
            <img src="/newsify_logo.svg" alt="Newsify logo" class="icon icon--logo">
            <h1 class="headline header__heading">Newsify</h1>
        </header>
    `}function l(){let a=document.querySelector("#app").getAttribute("data-page");function e(n){return a===n?"menu__link menu__link--active":"menu__link"}return`
        <footer class="footer">
            <menu class="menu footer__menu">
                <li class="menu__item">
                    <a href="${o}" class="${e("home")}">
                        <span class="material-symbols-rounded menu__link__icon icon">
                            home
                        </span>
                        <span class="menu__link__text">Home</span>
                    </a>
                </li>

                <li class="menu__item">
                    <a href="/popular/" class="${e("popular")}">
                        <span class="material-symbols-rounded menu__link__icon icon">
                            kid_star
                        </span>
                        <span class="menu__link__text">Popular</span>
                    </a>
                </li>

                <li class="menu__item">
                    <a href="/archive/" class="${e("archive")}">
                        <span class="material-symbols-rounded menu__link__icon icon">
                            bookmark
                        </span>
                        <span class="menu__link__text">Archive</span>
                    </a>
                </li>

                <li class="menu__item">
                    <a href="/settings/" class="${e("settings")}">
                        <span class="material-symbols-rounded menu__link__icon icon">
                            settings
                        </span>
                        <span class="menu__link__text">Settings</span>
                    </a>
                </li>
            </menu>
        </footer>
    `}export{r as c,l as f,t as h,m as l};
