import{o as i}from"./onLoad-DMWptZYE.js";import{e as s,c as l,a as n,b as m,d as y}from"./articleSearch-DkbCDrtf.js";import{c as g,l as p}from"./listLayout-LNGEcB0b.js";i();let d=g();p();function u(){let e=s();console.log(e.length),e.length==0&&(document.querySelector("main").outerHTML=`
            <main class="archive__empty">
                <p class="archive__empty__message">You haven't archived any articles yet.</p>
            </main>
        `);const o=document.querySelector(".content");o.innerHTML+=d.map(r=>{if(r.enabled){let t=r.display_name;if(e.some(a=>a.category===t)){let a=e.filter(c=>c.category===t);return l(t,a)}}}).join(""),n(),m(),y()}u();
