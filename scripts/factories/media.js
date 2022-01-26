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
        a.setAttribute("href", picture)
        a.setAttribute("aria-label", `Présentation du média : ${title}`)
        a.addEventListener("click", (event) => {
            event.preventDefault()
            displayLightbox(data, photographerName)
        })
        
        const article = document.createElement( 'article' )
        article.setAttribute("class", "article")


        const img = document.createElement( 'img' )
        img.setAttribute("src", picture)
        img.classList.add("mySlides")
        const alt = `Photo nommée ${title}`
        img.setAttribute("alt", alt)


        const div = document.createElement('div')
        div.setAttribute("class", "photo-text")

        const h1 = document.createElement( 'h1' )
        h1.setAttribute("class", "title")
        h1.textContent = title

        const likeLine = document.createElement('p')
        const likeSpan = document.createElement("span")
        likeSpan.setAttribute("class", "likes-number")
        likeSpan.textContent = likes
        const ancre = document.createElement('a')
        ancre.setAttribute("href", "#")
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
    const { title, video, likes, id} = data
    const videoTitle = video.substring(0, video.length-4).replaceAll("_", " ")
       
    const picture = `assets/photographersbook/${photographerName}/${video}`

    function getPictureCardDOM() {

        const a = document.createElement('a')
        a.setAttribute("href", picture)
        a.setAttribute("aria-label", `Présentation du média : ${videoTitle}`)
        a.addEventListener("click", (event) => {
            event.preventDefault()
            displayLightbox(data, photographerName)
        })
        const article = document.createElement( 'article' )


        const videoInput = document.createElement( 'video' )
        videoInput.setAttribute("src", picture)
        videoInput.setAttribute("controls", true)
        const alt = `Vidéo nommée ${videoTitle}`

        videoInput.setAttribute("alt", alt)

        const div = document.createElement('div')
        div.setAttribute("class", "photo-text")


        const h1 = document.createElement( 'h1' )
        h1.setAttribute("class", "title")
        h1.setAttribute("id", id)
        h1.textContent = videoTitle

        const likeLine = document.createElement('p')
        const likeSpan = document.createElement("span")
        likeSpan.setAttribute("class", "likes-number")
        likeSpan.textContent = likes
        const ancre = document.createElement('a')
        ancre.setAttribute("href", "#")
        ancre.setAttribute("class", "likes")
        const iconHeart = document.createElement('i')
        iconHeart.setAttribute("class", "fa fa-heart" )
        ancre.appendChild(iconHeart)
        likeLine.append(likeSpan, ancre)

        div.appendChild(h1)
        div.appendChild(likeLine)


        article.appendChild(videoInput)
        article.appendChild(div)


        a.appendChild(article)

        return (a)
    }
    return { title, picture, likes, getPictureCardDOM }
}