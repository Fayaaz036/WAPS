const container = document.querySelector('.container')
const githubJsonUrl = 'https://raw.githubusercontent.com/Fayaaz036/WAPS/master/data.json'
let isKaartFlipped = false
const kaart1 = document.querySelector('article:first-of-type')
const kaart2 = document.querySelector('article:nth-child(2)')
const kaart3 = document.querySelector('article:nth-child(3)')

async function haalKaart1op() {
    const reactie = await fetch(githubJsonUrl);
    const data = await reactie.json();
    kaart1.querySelector('.achterkant img.avatar').src = data.avatars[0];
    kaart1.querySelector('.voorkant .pagename').textContent = data.pages[0];
    kaart1.querySelector('.achterkant .pagename').textContent = data.pages[0];
    kaart1.querySelector('.bio').textContent = data.bio[0];
    kaart1.querySelector('.iconboven h2 , .icononder h2 , .achterkant .h2 ').textContent = data.kaartnummer;
    console.log(data.kaartnummer);


    console.log(data.avatars[0])
    }

    haalKaart1op()
async function haalKaart2op() {
    const reactie = await fetch(githubJsonUrl)
    const data = await reactie.json()
    kaart2.querySelector('.midden .avatar').src = data.avatars[1];
    kaart2.querySelector('.achterkant .pagename').textContent = data.pages[1]
        kaart2.querySelector('.achterkant .bio').textContent = data.bio[1]
        kaart2.querySelector('.voorkant .pagename').textContent = data.pages[1]
    kaart2.querySelector('.iconboven h2 , .icononder h2').innerText = data.kaartnummer;
}
haalKaart2op()

async function haalKaart3op() {
    const reactie = await fetch(githubJsonUrl)
    const data = await reactie.json();
    kaart3.querySelector('.midden .avatar').src = data.avatars[2];
    kaart3.querySelector('.achterkant .pagename').textContent = data.pages[2];
    kaart3.querySelector('.bio').textContent = data.bio[2];
    kaart3.querySelector('.voorkant .pagename').textContent = data.pages[2];
    kaart3.querySelector('.icononder .kaartnummer').innerText = data.kaartnummer;
    kaart3.querySelector('.iconboven h2 , .icononder h2').innerText = data.kaartnummer;

}haalKaart3op()

//portrait text
async function portrettext(){
    const portraittext = document.querySelector('.turnAroundText');
    const reactie = await fetch(githubJsonUrl)
    const data = await reactie.json();
    portraittext.innerHTML = data.turnAroundText; 
}portrettext();

        
        
container.addEventListener('click', function(event) {
    const clickedCard = event.target.closest('article')
    const flippedCard = document.querySelector('.container article.flipped')

    if (flippedCard && clickedCard !== flippedCard) {
        flippedCard.classList.remove('flipped')
        isKaartFlipped = false
    }

    if (clickedCard && !clickedCard.classList.contains('flipped')) {
        clickedCard.classList.toggle('flipped')
        isKaartFlipped = true
    }
})

document.addEventListener('click', function(event) {
    if (isKaartFlipped) {
        const clickedElement = event.target
        const clickedCard = clickedElement.closest('.container article')

        if (!clickedCard || !clickedElement.closest('.container')) {
            const flippedCard = document.querySelector('.container article.flipped')
            flippedCard.classList.remove('flipped')
            isKaartFlipped = false
        }
    }
})
document.querySelectorAll('.figure').forEach(item => {
    item.addEventListener('click', event => {
        const clickedFigure = event.target;
        document.querySelectorAll('.figure').forEach(figure => {
            if (figure !== clickedFigure) {
                figure.classList.add('cardAway');
            }
        });
        clickedFigure.classList.add('come-back');
    });
});

document.getElementById('shuffleButton').addEventListener('click', function() {
    const container = document.querySelector('.container');
    const figures = Array.from(document.querySelectorAll('.figure'));
    figures.sort(() => Math.random() - 0.5); // Willekeurige volgorde

    figures.forEach(figure => {
        container.appendChild(figure);
    });
});

const instructionElement = document.getElementById('instruction');

// Functie om de instructie-animatie te starten
function startInstructionAnimation() {
    // Voeg een eventlistener toe voor het apparaatoriëntatie-evenement
    window.addEventListener('deviceorientation', handleOrientation);
}

// Functie om de apparaatoriëntatie te verwerken
function handleOrientation(event) {
    // Controleer de gamma-waarde voor horizontale oriëntatie
    if (Math.abs(event.gamma) < 10) {
        // Verberg de instructie als de telefoon horizontaal is
        instructionElement.style.display = 'none';
    } else {
        // Toon de instructie als de telefoon niet horizontaal is
        instructionElement.style.display = 'block';
    }
}

// Start de instructie-animatie wanneer de pagina geladen is
window.addEventListener('load', startInstructionAnimation);
