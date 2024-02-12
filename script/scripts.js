const container = document.querySelector('.container')
const titleCard = document.querySelector('.pagename')
const firstnameElement = document.querySelector('.firstName');
const age = document.querySelector('.ageNumber')
const bioTextEl = document.querySelector('.bioText')
const githubJsonUrl = 'https://raw.githubusercontent.com/Fayaaz036/WAPS/master/data.json'
let isKaartFlipped = false

function main() {
    const data = getData();
    const elements = renderData(data)
    hydratePage(elements)
}

async function haalJSONop() {
    try {
        const reactie = await fetch(githubJsonUrl)
        const data = await reactie.json()
        titleCard.textContent = data['kaart-1'].pages
        firstnameElement.textContent = data['kaart-1'].firstname
        age.textContent = data['kaart-1'].age
        bioTextEl.textContent = data['kaart-1'].bio[1]
        const avatarImgs = document.querySelectorAll('.avatarIcon')
        avatarImgs.forEach((img, index) => {
            img.id = index
            img.src = data['kaart-1'].avatar
            img.alt = "Pharaoh Avatar"
        })
        console.log(data)
    } catch (error) {
        console.error('Er is een fout opgetreden bij het ophalen en verwerken van de JSON:', error)
    }
}

haalJSONop()

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

