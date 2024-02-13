const container = document.querySelector('.container')
const githubJsonUrl = 'https://raw.githubusercontent.com/Fayaaz036/WAPS/master/data.json'
let isKaartFlipped = false
const kaart1 = document.querySelector('article:first-of-type')
const kaart2 = document.querySelector('article:nth-child(2)')
const kaart3 = document.querySelector('article:nth-child(3)')

async function haalKaart1op() {
    const reactie = await fetch(githubJsonUrl)
    const data = await reactie.json()
    const avatarImgs = document.querySelectorAll('.avatar')
    // kaart1.querySelector('.voorkant .kaartnummer').textContent = data.kaartnummer
    kaart1.querySelector('.voorkant .pagename').textContent = data.pages[0]
    kaart1.querySelector('.achterkant .pagename').textContent = data.pages[0]
    // kaart1.getElementById('avatarAbout').imageURL = data.avatars[0]
    kaart1.querySelector('.bio').textContent = data.bio[0]
    avatarImgs.forEach((img, index) => {
        img.id = index
        img.src = data.avatars['0']
        img.alt = "Pharaoh Avatar"
    })
    // console.log(kaart1.data.avatars)
    }

    haalKaart1op()
async function haalKaart2op() {
    const reactie = await fetch(githubJsonUrl)
    const data = await reactie.json()
        kaart2.querySelector('.achterkant .pagename').textContent = data.pages[1]
        kaart2.querySelector('.achterkant .bio').textContent = data.bio[1]
        kaart2.querySelector('.voorkant .pagename').textContent = data.pages[1]
        // kaart2.querySelector('.voorkant .kaartnummer').textContent = data.kaartnummer
}
haalKaart2op()

async function haalKaart3op() {
    const reactie = await fetch(githubJsonUrl)
    const data = await reactie.json()
    kaart3.querySelector('.achterkant .pagename').textContent = data.pages[2]
    kaart3.querySelector('.bio').textContent = data.bio[2]
    kaart3.querySelector('.voorkant .pagename').textContent = data.pages[2]
    // kaart3.querySelector('.voorkant .kaartnummer').textContent = data.kaartnummer
}haalKaart3op()


// firstnameElement.textContent = data['kaart-1'].firstname
    // age.textContent = data['kaart-1'].age
    // bioTextEl.textContent = data['kaart-1'].bio[1]
    // const avatarImgs = document.querySelectorAll('.avatarIcon')

    //
    //     console.log(titleCard)
    //
    //
    // catch (error) {
    //     console.error('Er is een fout opgetreden bij het ophalen en verwerken van de JSON:', error)
    // }





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

