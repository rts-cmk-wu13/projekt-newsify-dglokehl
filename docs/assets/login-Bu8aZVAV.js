import{o as c,p as m,s as u,n as r,b as f}from"./onLoad-DMWptZYE.js";c();function w(){let g=window.location.search,l=new URLSearchParams(g).get("login");if(document.querySelector("#app").innerHTML=`
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
    `,l){let p=document.querySelector(".login__options");p.outerHTML=`
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
        `,l==="signup"&&(document.querySelector(".login__form__btn--submit").value="Sign up",document.querySelector(".login__signup").innerHTML=`
                Already have an account? <a href="/login/index.html?login=login/" class="login__signup__link">Log in</a>
            `);let s=document.querySelector(".login__form");s.addEventListener("submit",d=>{d.preventDefault(),console.log(window.location.href);let n=s.email.value,e=s.password.value,t=document.querySelector(".email__error"),o=document.querySelector(".password__error"),a=/^[\w-\.]+@([\w-]+\.)+[\w-]+$/,_=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[\w]{8,}$/;if(console.log("email:",n,n.length),console.log("password:",e,e.length),l==="login"){let i=m("userLogin");n.length==0?t.textContent="Please enter your email":a.test(n)?n===i.email&&(t.textContent=""):t.textContent="Please enter a valid email",e.length==0?o.textContent="Please enter your password":_.test(e)?e===i.password&&(o.textContent=""):o.textContent="Please enter a valid password",n===i.email&&e===i.password&&(t.textContent="",o.textContent="",u("isLoggedIn",!0),window.location.href=r)}l==="signup"&&(n.length==0?t.textContent="Please enter an email":a.test(n)?t.textContent="":t.textContent="Please enter a valid email",e.length==0?o.textContent="Please enter a password":e.length<8?o.textContent="Your password needs to be at least 8 characters long":_.test(e)?o.textContent="":o.textContent="Your password needs to include at least one uppercase letter and number",a.test(n)&&_.test(e)&&(t.textContent="",o.textContent="",f("userLogin",{email:n,password:e}),window.location.href=r+"/login/"))})}}w();
