// Dag 4: Funktioner som bygger sidans innehåll med DOM. Gör alla tester gröna på tests.html.
// Röda understrykningar tills du skrivit return är normalt. ratt.bild och ratt.beskrivning är valfria (string | undefined): använd ?? "" för att få en text.
// Regel: använd createElement och textContent. Använd INTE innerHTML med data.
import { formateraPris } from './pris'
import type { Ratt } from './typer'

// 1. Bygger ett kort för en rätt och returnerar det (anropar inte append själv).
//    <article data-id="1">
//      <img src="..." alt="Illustration av kardemummabulle">
//      <h3>Kardemummabulle</h3>
//      <p>Beskrivning</p>
//      <p class="pris">35 kr</p>
//    </article>
export function skapaRattKort(ratt: Ratt): HTMLElement {
    // TODO
    const kort = document.createElement('article')
    kort.dataset.id = String(ratt.id)
    const bild = document.createElement('img')
    bild.src = ratt.bild ?? ''
    bild.alt = `Illustration av ${ratt.namn}`
    // bild.setAttribute('alt', 'Illustration av kardemummabulle')
    // bild.setAttribute('src', '#')
    const rubrik = document.createElement('h3')
    rubrik.textContent = ratt.namn
    const beskrivning = document.createElement('p')
    beskrivning.textContent = ratt.beskrivning ?? ''
    const pris = document.createElement('p')
    pris.className = 'pris'
    pris.textContent = formateraPris(ratt.pris)

    kort.append(bild, rubrik, beskrivning, pris)
    return kort
}

// 2. Töm containern och lägg in ett kort per rätt.
//    Är listan tom: visa <p class="tom">Inga rätter hittades.</p> istället.
export function visaMeny(container: HTMLElement, ratter: Ratt[]): void {
    // TODO
    container.replaceChildren()

    if (ratter.length === 0) {
        const tom = document.createElement('p')
        tom.className = 'tom'
        tom.textContent =
            'Kära gäst, antingen har alla våra rätter blivit borttagna från databasen eller så har vi sålt slut på allting idag. Om du är i krokarna kan du komma förbi ändå – vi har alltid nybryggt kaffe oavsett. Annars är du alltid välkommen tillbaka imorgon – då har vi fyllt både databasen och faten med nylagade rätter och nybakade bakverk.'
        container.append(tom)
        return
    }
    for (const ratt of ratter) {
        container.append(skapaRattKort(ratt))
    }
}

// 3. Sätt rubrikens text: "Meny (8 rätter)". Ett enda: "Meny (1 rätt)".
export function uppdateraRubrik(element: HTMLElement, antal: number): void {
    // TODO
    if (antal === 1) {
        element.textContent = `Meny (${antal} rätt)`
    } else {
        element.textContent = `Meny (${antal} rätter)`
    }
}

// 4. Markera EN rätt som dagens rätt: klassen "dagens" ska finnas på kortet med rätt
//    data-id, och inte på något annat kort. Anropas igen = markeringen flyttas.
export function markeraDagensRatt(container: HTMLElement, id: number): void {
    // TODO

    const dagensRatt = container.querySelectorAll('article')
    for (const dagens of dagensRatt) {
        if (Number(dagens.dataset.id) === id) {
            dagens.classList.toggle('dagens', true)
        } else {
            dagens.classList.toggle('dagens', false)
        }
    }
}
