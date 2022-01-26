const lightbox = document.querySelector('.lightbox')
const mediaImg = document.getElementById('media_img')
const mediaVideo = document.getElementById('media_video')

let currentMedia = null
let photographerName = ""



function displayCurrentMedia() {
    if(!currentMedia) {
        return; 
    }

    if(currentMedia.image) {
        const picture = `assets/photographersbook/${photographerName}/${currentMedia.image}`
        const alt = `Photo nommée ${currentMedia.title}`
        
        mediaVideo.style.display = "none"
        mediaImg.style.display = "block"
        mediaImg.src = picture
        mediaImg.alt = alt
    }

    if(currentMedia.video) {
        const video = `assets/photographersbook/${photographerName}/${currentMedia.video}`
        const alt = `Vidéo nommée ${currentMedia.video.substring(0, video.length-4).replaceAll("_", " ")}`
        mediaVideo.style.display = "block"
        mediaImg.style.display = "none"
        mediaVideo.src = video
        mediaVideo.alt = alt
        mediaVideo.setAttribute("controls", true)
    }
}

function displayLightbox(media, photographer){
    lightbox.classList.add("show")
    currentMedia = media
    photographerName = photographer
    displayCurrentMedia()
}

function closeLightbox() {
    lightbox.classList.remove("show")
}




// let mediasArray = []


// // var slide = new Array(currentMedia, currentMedia[1]);
// var numero = 0;

// function ChangeSlide(sens, medias) {
//     mediasArray = medias
//     console.log(medias)
//     numero = numero + sens;
//     if (numero < 0)
//         numero = slide.length - 1;
//     if (numero > slide.length - 1)
//         numero = 0;
//     document.getElementById("media_img").src = slide[numero];
// }