const getParam = new URLSearchParams(location.search)
const idPhotographer = getParam.get("id")


// pour le tri
// function displayMedia(medias) {
//     // ne doit prendre en param que madia + photographer name au max

// aidera à réafficher tout ce que j'ai trier

//     const photographersMediaSection = document.querySelector(".photographer_media_section")

//  vider l'élément photographersMediaSection (avec innertext)
//     medias.forEach((media) => {
//         const mediaModel = mediasFactory(media, totalPhotographerLikes, photographerName, photographerDailyPrice)
//         const pictureCardDOM = mediaModel.getPictureCardDOM()
//         photographersMediaSection.appendChild(pictureCardDOM)
//     })
// }


// vider l'élément permet de ne plus afficher les médias non trié en dessous 

async function displayData(medias, totalPhotographerLikes, photographerName, photographerDailyPrice, photographerData) {
    
    // affichage données dans la présentation photographe
    const photographerHeaderDiv = document.querySelector(".photograph-header")
    const headerModel = photographerHeaderFactory(photographerData) 
    const photographerCardDOM = headerModel.getPhotographerCardDOM()
    photographerHeaderDiv.append(photographerCardDOM.divPresentationText, photographerCardDOM.divContactButton, photographerCardDOM.divPortrait)


    // affichage données dans les articles
    const photographersMediaSection = document.querySelector(".photographer_media_section")
    medias.forEach((media) => {
        const mediaModel = mediasFactory(media, photographerName)
        const pictureCardDOM = mediaModel.getPictureCardDOM()
        photographersMediaSection.appendChild(pictureCardDOM)
    })

    // affichage données div-price
    const mediaLikes = document.getElementById("media-likes")
    mediaLikes.textContent = totalPhotographerLikes
    const photographerPrice = document.getElementById("photographer-price")
    photographerPrice.textContent = photographerDailyPrice


    // changement d'affichage du nombre de like en fonction du clic
    listenForLikes()
}

async function init() {
    // Récupère les datas des photographes
    const photographer = await getPhotographersById(idPhotographer)
    const photographerFirstName = photographer.name.split(" ")[0]
    const photographDailyPrice = photographer.price
    const medias = await getMedias(idPhotographer)
    const totalLikes = medias.reduce((previousValue, currentValue) => previousValue + currentValue.likes, 0)
    displayData(medias, totalLikes, photographerFirstName, photographDailyPrice, photographer)
}

init()