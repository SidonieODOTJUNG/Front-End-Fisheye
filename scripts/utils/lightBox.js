/************************/
/************************/
/** Composant Lightbox **/
/************************/
/************************/

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const lightbox = document.querySelector('.lightbox')
const mediaImg = document.getElementById('media_img')
const mediaVideo = document.getElementById('media_video')
const arrowNext = document.querySelector('.lightbox_next')
const arrowPrevious = document.querySelector('.lightbox_prev')

let currentMedia = null
let photographerName = ''
let index = 0

function displayCurrentMedia () {
  if (!currentMedia) {
    return
  }

  if (currentMedia.image) {
    const picture = `assets/photographersbook/${photographerName}/${currentMedia.image}`
    const alt = `Photo nommée ${currentMedia.title}`

    mediaVideo.style.display = 'none'
    mediaImg.style.display = 'block'
    mediaImg.src = picture
    mediaImg.alt = alt
  }

  if (currentMedia.video) {
    const video = `assets/photographersbook/${photographerName}/${currentMedia.video}`
    const alt = `Vidéo nommée ${currentMedia.video.substring(0, video.length - 4).replaceAll('_', ' ')}`
    mediaVideo.style.display = 'block'
    mediaImg.style.display = 'none'
    mediaVideo.src = video
    mediaVideo.alt = alt
    mediaVideo.setAttribute('controls', true)
  }
}

function closeLightbox () {
  lightbox.classList.remove('show')
}

function slideNext () {
  // si index actuel = taille tableau -1 on ramene index à 0 sinon on incremente
  if (index === medias.length - 1) {
    index = 0
  } else {
    index++
  }
  currentMedia = medias[index]
  displayCurrentMedia()
}

function slidePrevious () {
  // quand index = 0, on lui donne la valeur de la taille du tableau -1, sinon on décrémente
  if (index === 0) {
    index = medias.length - 1
  } else {
    index--
  }
  currentMedia = medias[index]
  displayCurrentMedia()
}

// accessibilité clavier touches fléchées + echap dans la lightbox
function listenKey (e) {
  if (e.code === 'Escape') { closeLightbox() }
  if (e.code === 'ArrowRight') { slideNext() }
  if (e.code === 'ArrowLeft') { slidePrevious() }
}

function displayLightbox (media, photographer) {
  lightbox.classList.add('show')
  currentMedia = media
  photographerName = photographer
  displayCurrentMedia()

  arrowNext.focus()
  index = medias.findIndex(function (el) {
    return el.id === currentMedia.id
  })
  document.addEventListener('keydown', listenKey)
}
