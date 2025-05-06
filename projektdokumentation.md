# Projektdokumentation

**Navn:** Loke

**Hold:** WU13

**Uddannelse:** Webudvikler

**Uddannelsessted:** Roskilde Tekniske Skole

[Link til min applikaton](https://newsify-loke.netlify.app)


## Teknologier

-   HTML
-   SCSS
-   JavaScript
-   Vite


---


### Redegørelse for oprindelsen af evt. tredjeparts kode anvendt i opgaveløsningen (Teknisk dokumentation)

(Hvilke node-pakker har du installeret for at dit projekt virker? Beskriv kort hvilket "problem" hver pakke løser.)

De eneste node-pakker jeg selv har installeret er Vite og Vitest, men de har vidst også nogle andre pakker inkluderet i deres.


---


### Argumentation for de valg du selvstændigt har truffet under løsningen af opgaven

(Hvilke overvejelser har du gjort dig, fx. i forbindelse med dit valg af animationer)

Jeg ved ikke rigtigt om jeg har haft særligt mange overvejelser, men da det er en mobil-app så skulle jeg selvfølgelig arbejde ud fra at man ville bruge den på en telefon med touch-skærm.

Jeg har prøvet at splitte mine scripts mere op i moduler, men dog kun når det rent faktisk giver mening. Der er f.eks. ingen grund til at have min form-validering i et seperat dokument, når det kun bliver brugt på 1 side.


---


### Vurdering af egen indsats & gennemførelse af opgaveforløbet (Arbejdsgangen)

(Hvad gik godt. Hvor prioriterede du forkert. Klagesange fra de varme lande om halvfærdigt produkt, på grund af manglende nattesøvn, fordi din kæle-skildpadde havde tandpine er IKKE interessante.)

Jeg skulle have fået styr på min mappestruktur fra starten. Det skabte ret mange problemer, da jeg fandt ud af at Vite ikke havde lyst til at builde andet end min forside, medmindre jeg satte den op på deres foreslåede måde.

Jeg fandt også meget hurtigt ud af at API'en er ekstremt irriterrende at bruge, da alle deres forskellige API'er er anderledes på visse punkter. Det gjorde at det blev meget sværere at lave components, som kunne bruges flere steder.

Jeg har ikke fået lavet nogle Vitests, da jeg simpelthen ikke kan finde en måde at teste nogle af mine scripts hvor det giver mening.


---


### En beskrivelse af særlige punkter til bedømmelse

(er der en særlig detalje som du synes din underviser bør lægge mærke til når dit projekt evalueres)

Du kan vise kode i markdown på følgende måder:


Jeg synes at min søge-funktion blev ret god, da den opdaterer mens man skriver og det var også overraskende nemt at gøre.

```js
function articleSearch() {
	const contentElm = document.querySelector(".content");
    let contentElmClone = contentElm.cloneNode(true);


    let initArticles = [];
    document.querySelectorAll(".category__article").forEach(article => {
        let articleObj = {
            "id": article.getAttribute("data-id"),
            "url": article.getAttribute("href"),
            "thumb": article.querySelector(".category__article__img").getAttribute("src"),
            "title": article.querySelector(".category__article__text__heading").innerText,
            "abstract": article.querySelector(".category__article__text__subheading").innerText,
            "category": article.getAttribute("data-category"),
        };
        initArticles.push(articleObj);
    });
    storage.stringifyTo("pageArticles", initArticles);



    let searchBar = document.querySelector(".search__bar");

    searchBar.addEventListener("input", (e) => {
        e.preventDefault();

        let searchQuery = searchBar.value.toLowerCase();

        let pageArticles = storage.parseFrom("pageArticles");

        if (searchQuery.length > 0) {
            let filteredArticles = pageArticles.filter((article) =>
                article.title.toLowerCase().includes(searchQuery) || article.abstract.toLowerCase().includes(searchQuery));

            contentElm.innerHTML = articleElm(filteredArticles);
        } else {
            contentElm.innerHTML = contentElmClone.innerHTML;
        }
    });
}
```


```css
.my__css-rule {
}
```

