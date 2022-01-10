function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data


    const picture = `assets/photographers/${portrait}`

    function getUserCardDOM() {

        const a = document.createElement('a')
        a.setAttribute("href", `../photographer.html?id=${id}`)
        const article = document.createElement( 'article' )

        const img = document.createElement( 'img' )
        img.setAttribute("src", picture)
        const alt = `Photo de ${name}`
        img.setAttribute("alt", alt)

        const div = document.createElement('div')

        const h1 = document.createElement( 'h1' )
        h1.textContent = name

        const h2 = document.createElement('h2')
        h2.textContent = `${city}, ${country}`

        const pTag = document.createElement('p')
        pTag.textContent = tagline

        const spanPrice = document.createElement('span')
        spanPrice.textContent = `${price}€/jour`
        const pPrice = document.createElement('p')
        pPrice.appendChild(spanPrice)

        div.appendChild(h1)
        div.appendChild(h2)
        div.appendChild(pTag)
        div.appendChild(pPrice)


        article.appendChild(img)
        article.appendChild(div)

        a.appendChild(article)


        return (a)
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM }
}

function photographerHeaderFactory(data) {
    const { name, city, country, tagline, portrait } = data


    const picture = `assets/photographers/${portrait}`

    function getPhotographerCardDOM() {


        const divPresentationText = document.createElement('div')
        divPresentationText.setAttribute("class", "presentation-text")
            const h1 = document.createElement( 'h1' )
            h1.textContent = name
            const h2 = document.createElement('h2')
            h2.textContent = `${city}, ${country}`
            const pTag = document.createElement('p')
            pTag.textContent = tagline

            divPresentationText.appendChild(h1)
            divPresentationText.appendChild(h2)
            divPresentationText.appendChild(pTag)

        const divContactButton = document.createElement('div')
        divContactButton.setAttribute("class", "div_contact-button")
            const contactButton = document.createElement("button")
            contactButton.setAttribute("class", "contact_button")
            contactButton.addEventListener("click", displayModal)
            contactButton.textContent = "Contactez-moi"

            divContactButton.appendChild(contactButton)

        const divPortrait = document.createElement('div')
        divPortrait.setAttribute("class", "div-portrait")

            const img = document.createElement( 'img' )
            img.setAttribute("src", picture)
            const alt = `Photo de ${name}`
            img.setAttribute("alt", alt)

            divPortrait.appendChild(img)

        return ({
            divPresentationText,
            divContactButton,
            divPortrait
        })
    }
    return { name, picture, city, country, tagline, getPhotographerCardDOM }
}