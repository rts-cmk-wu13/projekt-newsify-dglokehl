import{o as p,c as h}from"./onLoad-DMWptZYE.js";function y(i,s){let e=0,t,a,l,c=50,d=s.elm,g=s.img,m=s.heading,u=s.text,r=Array.from(document.querySelectorAll(".indicator"));r.forEach(n=>{n.addEventListener("click",()=>{e=r.indexOf(n),o()})}),document.querySelector(".slider__btn--continue").addEventListener("click",()=>{e<i.length-1?(e++,o()):window.location.pathname="/login/"}),d.addEventListener("pointerdown",n=>{t=n.clientX,l=void 0,console.log("down",t)}),d.addEventListener("pointermove",n=>{a=n.clientX,l=t-a}),d.addEventListener("pointerup",n=>{console.log("up",l),t=void 0,a=void 0,l>c?e<i.length-1?(e++,o()):window.location.pathname="/login/":l<-50&&e>0&&(e--,o())});function o(){g.setAttribute("src",i[e].img),m.innerHTML=i[e].heading,u.innerHTML=i[e].text,r.forEach(n=>{n.classList.remove("indicator--current")}),r[e].classList.add("indicator--current")}}const _="/assets/gallery1-dark-CINW07CB.png",f="/assets/gallery2-dark-UYK6GOb8.png",v="/assets/gallery3-dark-CK_YisSp.png",w="/assets/gallery1-light-C7H56--v.png",L="/assets/gallery2-light-BWC8ax4z.png",k="/assets/gallery3-light-DmaJyRKT.png";p();function b(){let i,s,e;h()?(i=_,s=f,e=v):(i=w,s=L,e=k);let t=[{img:i,heading:"Stay Connected, <br> Everywhere, Anytime",text:"Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content."},{img:s,heading:"Become a Savvy <br> Global Citizen.",text:"Discover tailored news that aligns with your interests and preferences. Your personalized news journey awaits!"},{img:e,heading:"Enhance your News <br> Journey Now!",text:"Be part of our dynamic community and contribute your insights and participate in enriching conversations."}];document.querySelector("#app").innerHTML=`
        <div class="splash">
            <div class="splash__logo">
                <img src="/newsify_logo.svg" alt="Newsify logo" class="splash__img">
                <span class="splash__heading headline">Newsify</span>
            </div>
        </div>

        <div class="slider">
            <figure class="slider__gallery">
                <img src="${t[0].img}" alt="Newsify app overview" class="slider__gallery__img">
            </figure>

            <h1 class="slider__heading headline">${t[0].heading}</h1>
            <p class="slider__text">${t[0].text}</p>

            <div class="slider__carousel">
                <span class="indicator indicator--current"></span>
                <span class="indicator"></span>
                <span class="indicator"></span>
            </div>

            <div class="slider__btn__wrapper">
                <a href="/login/" class="slider__btn slider__btn--skip btn">
                    Skip
                </a>
                <span class="slider__btn slider__btn--continue btn btn--fill">
                    Continue
                </span>
            </div>
        </div>
    `,setTimeout(()=>{document.querySelector(".splash").style.display="none"},1200);let a={elm:document.querySelector(".slider"),img:document.querySelector(".slider__gallery__img"),heading:document.querySelector(".slider__heading"),text:document.querySelector(".slider__text")};y(t,a)}b();
