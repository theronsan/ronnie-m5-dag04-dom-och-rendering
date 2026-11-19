// Dag 4: DOM. Kör npm run dev och titta i Console (F12).
// querySelector kan ge null om elementet saknas. Hantera det med if eller ?. (TypeScript kräver det).
// Tips: document.querySelector<HTMLElement>("#id") säger vilken sorts element du får.
import { meny } from './data'
import { visaMeny, uppdateraRubrik, markeraDagensRatt } from './ui'
import { billigast } from './meny'

// DEL 1: utforska DOM:en ----------------------------------------------
// 1. Hämta h1 med document.querySelector("h1") och skriv ut dess textContent.
// 2. Ändra texten i #hero-rubrik till "Välkommen in!"
// 3. Hämta alla länkar i menyn med document.querySelectorAll("nav a").
//    Loopa med for...of och skriv ut varje länks href och text.
// 4. Skapa ett nytt p-element (document.createElement), ge det texten
//    "Dagens tips: prova en kardemummabulle." och lägg det sist i #hero med append.
// 5. Lägg klassen "dagens" på #hero med classList.add. Ta bort den med classList.remove.
// 6. Säkerhetsförsök: sätt p.innerHTML = '<img src="x" onerror="console.log(\'Attack!\')">'
//    Vad händer i Console? Byt sedan till p.textContent med samma text. Vad händer nu?
// TODO
const huvudrubriken = document.querySelector<HTMLElement>('h1')
console.log(huvudrubriken?.textContent)

const heroRubrik = document.querySelector<HTMLElement>('#hero-rubrik')
if (heroRubrik) {
    heroRubrik.textContent = 'Välkommen in!'
}

const navLinks = document.querySelectorAll<HTMLAnchorElement>('nav a')
if (navLinks) {
    for (const navLink of navLinks) {
        console.log(navLink.href, navLink.textContent)
    }
}

// DEL 2: koppla ihop med funktionerna i ui.js ----------------------------
// 7. Hämta #meny-lista och #meny-rubrik.
// 8. Anropa visaMeny med menyn, och uppdateraRubrik med antalet rätter.
// 9. Dagens rätt = den billigaste lunchen. Använd filter och billigast (från meny.js)
//    och markeraDagensRatt.
// TODO
