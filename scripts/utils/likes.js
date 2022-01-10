const listenForLikes = () => {
    const article = document.querySelector("article")
    const likes = document.querySelector(".likes")
    const likeSpan = document.querySelector(".likes-number")



    // mon querySelectorAll me renvoie un tableau, comment obtenir le bon élément (pour article et likeSpan)
    // tandis que mon queryselectror me revoi seuleemnt au premier élément rencontré
    
    // le problème c'est que mon listener ne fonctionnera qu'avec les queryselector... 

    likes.addEventListener("click", (event) => {
        event.currentTarget.classList.toggle("like-yes")
        if (event.currentTarget.classList.contains("like-yes")) {
            article.setAttribute("id", "ancre")
            likeSpan.setAttribute("id", "likesNumber")
            const spanLikeVal = document.getElementById("likesNumber").innerHTML
            const numberLikes = parseInt(spanLikeVal) +1
            document.getElementById("likesNumber").innerHTML = numberLikes
        }
    })
}