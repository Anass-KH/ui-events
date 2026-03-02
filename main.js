/* De eerste interactie is al voor jullie uitgewerkt
   Als je op het 2e linkje klikt (Design), springt deze omhoog */

// Stap 1: selecteer het Design linkje, en sla deze op in een variabele
let designLink = document.querySelector('a[href="#design"]')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
designLink.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  designLink.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
// Dit is trouwens geen UIEvent, maar een AnimationEvent
designLink.addEventListener('animationend', jumpHandler)




// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een scale animatie als je op de Frontend link klikt

// Stap 1: querySelector
 const scaleLink = document.querySelector('a[href="#frontend"]');

// Stap 2: addEventListener
scaleLink.addEventListener("click", function () {
  
  // Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
  scaleLink.classList.add("frontend");
});

// Verwijderd het Animatie event zodra de animatie is afgelopen
scaleLink.addEventListener("animationend", function () {

  scaleLink.classList.remove("frontend");
});


// Stap 1: querySelector
const translateLink = document.querySelector('a[href="#and"]');

// Stap 2: addEventListener
translateLink.addEventListener("click", function () {
 
  // Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
  translateLink.classList.add("translate");

});

// Verwijderd het Animatie event zodra de animatie is afgelopen
translateLink.addEventListener("animationend", function () {
  translateLink.classList.remove("translate");

});

/* Development */

// Stap 1: querySelector
const developmentLink = document.querySelector('a[href="#development"]')

// Stap 2: addEventListener
developmentLink.addEventListener('dblclick', function() {

  // Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
  developmentLink.classList.add('shake');

});

// Verwijderd het Animatie event zodra de animatie is afgelopen
developmentLink.addEventListener("animationend", function () {
  developmentLink.classList.remove("shake");

});


/* Sprint-5 focus → kleuren animatie */

// Stap 1
const sprint5link = document.querySelector('a[href="#sprint-5"]')

// Stap 2
sprint5link.addEventListener('click', sprint5Handler)

// Stap 3
function sprint5Handler() {
  sprint5link.classList.add('sprint5kleur')
}



/* Events */

// Stap 1: querySelector
const eventsLink = document.querySelector('a[href="#events"]')
let size = 15;

// Stap 2: addEventListener
eventsLink.addEventListener("wheel", function(Z) {
console.log(Z)

if (Z.deltaY > 0) {
  size++;
  }

  else if  (Z.deltaY < 0) {
    size--;
  }
   
  eventsLink.style.setProperty1("--font", size + "em")
});

/* Fix mouseover → verander tekst in de link */

// Stap 1
const fixLink = document.querySelector('a[href="#fix"]')

// Stap 2
fixLink.classList.add("brokenhover")

// Stap 3 Hover → verander tekst
fixLink.addEventListener("mouseenter", function() {
  fixLink.innerText = "Broken"
})






