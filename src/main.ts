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

// Hämtar sidans h1 och skriver ut dess textinnehåll
const huvudrubriken = document.querySelector<HTMLElement>('h1')
console.log(huvudrubriken?.textContent)

// Hämtar #hero-rubrik
const heroRubrik = document.querySelector<HTMLElement>('#hero-rubrik')
// Om #hero-rubrik finns ändrar vi dess textinnehåll till Välkommen in!
if (heroRubrik) {
    heroRubrik.textContent = 'Välkommen in!'
}

// Hämtar alla länkar i menyn
const navLinks = document.querySelectorAll<HTMLAnchorElement>('nav a')
// Om det finns länkar loopar vi igenom alla och skriver ut varje länks href och textinnehåll
if (navLinks) {
    for (const navLink of navLinks) {
        console.log(navLink.href, navLink.textContent)
    }
}

// Skapar ett nytt textstycke och lägger det sist i #hero
const p = document.createElement('p')
p.textContent = 'Dagens tips: prova en kardemummabulle.'
document.querySelector('#hero')?.append(p)

// Lägger till och tar bort klassen dagens på #hero
const hero = document.querySelector('#hero')
hero?.classList.add('dagens')
hero?.classList.remove('dagens')

// Säkerhetsförsök
//p.innerHTML = '<img src="x" onerror="console.log(\'Attack!\')">'
p.textContent = '<img src="x" onerror="console.log(\'Attack!\')">'

// Man ska aldrig sätta innerHTML till en text som en användare eller API har skrivit
// eftersom det öppnar upp för att skadlig kod kan köras på sajten.

// DEL 2: koppla ihop med funktionerna i ui.js ----------------------------
// 7. Hämta #meny-lista och #meny-rubrik.
// 8. Anropa visaMeny med menyn, och uppdateraRubrik med antalet rätter.
// 9. Dagens rätt = den billigaste lunchen. Använd filter och billigast (från meny.js)
//    och markeraDagensRatt.
// TODO

// Hämtar #meny-lista
const menyLista = document.querySelector<HTMLElement>('#meny-lista')
// Om #meny-lista finns körs funktionen
if (menyLista) {
    // Visar menyn
    visaMeny(menyLista, meny)
    // temporär för att testa tomt-läget
    //visaMeny(menyLista, [])

    // Dagens rätt
    // Går igenom alla rätter och behåller alla som har kategori lunch
    const luncher = meny.filter((ratt) => ratt.kategori === 'lunch')
    // Tar fram den rätt som har det biligaste priset från lunch-listan
    const dagensRatt = billigast(luncher)
    // Markerar en lunch som dagens rätt
    if (dagensRatt) {
        markeraDagensRatt(menyLista, dagensRatt.id)
    }
}
// Hämtar #meny-rubrik
const menyRubrik = document.querySelector<HTMLElement>('#meny-rubrik')
// Om #meny-rubrik finns körs funktionen
if (menyRubrik) {
    uppdateraRubrik(menyRubrik, meny.length)
}
