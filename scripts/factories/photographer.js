function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data


    const picture = `assets/photographers/${portrait}`

    function getUserCardDOM() {

        const a = document.createElement('a')
        a.setAttribute("href", "../photographer.html")
        a.setAttribute("id", id)
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


        // TODO : voir comment faire une affectation multiple pour ptag et pprice
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