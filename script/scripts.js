const container = document.querySelector('.container')
const titleCard = document.querySelectorAll('.pagename')
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
        const kaart1 = document.querySelector('article:first-of-type')
        if(kaart1){
            kaart1.querySelector('.voorkant .pagename').textContent = data.pages[0]
            kaart1.querySelector('.achterkant .pagename').textContent = data.pages[0]
        }
        // titleCard.textContent = data['kaart-2'].pages[1]
        // titleCard.textContent = data['kaart-3'].pages[2]

        // firstnameElement.textContent = data['kaart-1'].firstname
        // age.textContent = data['kaart-1'].age
        // bioTextEl.textContent = data['kaart-1'].bio[1]
        // const avatarImgs = document.querySelectorAll('.avatarIcon')
        // avatarImgs.forEach((img, index) => {
        //     img.id = index
        //     img.src = data['kaart-1'].avatar
        //     img.alt = "Pharaoh Avatar"
        // })
        console.log(titleCard)
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

