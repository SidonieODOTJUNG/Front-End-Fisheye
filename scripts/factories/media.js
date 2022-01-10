function mediasFactory(data, photographerName) {
    if(data.image) {
        return imageFactory(data, photographerName)
    } else {
        return videoFactory(data, photographerName)
    }

}

function imageFactory (data, photographerName) {
    const {title, image, likes } = data
       
    const picture = `assets/photographersbook/${photographerName}/${image}`

    function getPictureCardDOM() {

        const a = document.createElement('a')
        a.setAttribute("href", "../lightbox.html")
        
        const article = document.createElement( 'article' )
        article.setAttribute("class", "article")


        const img = document.createElement( 'img' )
        img.setAttribute("src", picture)
        const alt = `Photo nommée ${title}`
        img.setAttribute("alt", alt)


        const div = document.createElement('div')
        div.setAttribute("class", "photo-text")

        const h1 = document.createElement( 'h1' )
        h1.textContent = title

        const likeLine = document.createElement('p')
        const likeSpan = document.createElement("span")
        likeSpan.setAttribute("class", "likes-number")
        likeSpan.textContent = likes
        const ancre = document.createElement('a')
        ancre.setAttribute("href", "#ancre")
        ancre.setAttribute("class", "likes")
        const iconHeart = document.createElement('i')
        iconHeart.setAttribute("class", "fa fa-heart" )
        ancre.appendChild(iconHeart)
        likeLine.append(likeSpan, ancre)

        div.appendChild(h1)
        div.appendChild(likeLine)


        article.appendChild(img)
        article.appendChild(div)
        

        a.appendChild(article)

        return (a)
    }
    return { title, picture, likes, getPictureCardDOM }
}

function videoFactory (data, photographerName) {
    const { title, video, likes} = data
       
    const picture = `assets/photographersbook/${photographerName}/${video}`

    function getPictureCardDOM() {

        const a = document.createElement('a')
        a.setAttribute("href", "../lightbox.html")
        const article = document.createElement( 'article' )


        const videoInput = document.createElement( 'video' )
        videoInput.setAttribute("src", picture)
        videoInput.setAttribute("controls", true)
        const alt = `Vidéo nommée ${title}`
        videoInput.setAttribute("alt", alt)

        const div = document.createElement('div')
        div.setAttribute("class", "photo-text")


        const h1 = document.createElement( 'h1' )
        h1.textContent = title

        const likeLine = document.createElement('p')
        likeLine.setAttribute("class", "likes-number")
        likeLine.textContent = likes
        const iconHeart = document.createElement('i')
        iconHeart.setAttribute("class", "fa fa-heart" )
        likeLine.appendChild(iconHeart)

        div.appendChild(h1)
        div.appendChild(likeLine)


        article.appendChild(videoInput)
        article.appendChild(div)


        a.appendChild(article)

        return (a)
    }
    return { title, picture, likes, getPictureCardDOM }
}