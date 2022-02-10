/* eslint-disable no-undef */
const getParam = new URLSearchParams(location.search)
const idPhotographer = getParam.get('id')
let photographerFirstName = ''
let medias = []

// pour le tri
function displayMedia (mediasPhotographer) {
  const photographersMediaSection = document.querySelector('.photographer_media_section')
  photographersMediaSection.innerHTML = ''

  mediasPhotographer.forEach((media) => {
    const mediaModel = mediasFactory(media, photographerFirstName)
    const pictureCardDOM = mediaModel.getPictureCardDOM()
    photographersMediaSection.appendChild(pictureCardDOM)
  })

  // changement d'affichage du nombre de like en fonction du clic
  listenForLikes()
}

// vider l'élément permet de ne plus afficher les médias non trié en dessous

async function displayData (mediasPhotographer, totalPhotographerLikes, photographerDailyPrice, photographerData) {
  // affichage données dans la présentation photographe
  const photographerHeaderDiv = document.querySelector('.photograph-header')
  const headerModel = photographerHeaderFactory(photographerData)
  const photographerCardDOM = headerModel.getPhotographerCardDOM()
  photographerHeaderDiv.append(photographerCardDOM.divPresentationText, photographerCardDOM.divContactButton, photographerCardDOM.divPortrait)

  // affichage données div-price
  const mediaLikes = document.getElementById('media-likes')
  mediaLikes.textContent = totalPhotographerLikes
  const photographerPrice = document.getElementById('photographer-price')
  photographerPrice.textContent = photographerDailyPrice
}

function sortByPop () {
  medias.sort((a, b) => (b.likes - a.likes))
  displayMedia(medias)
}

function sortByDate () {
  medias.sort((a, b) => {
    if (a.date > b.date) {
      return -1
    }
    if (b.date > a.date) {
      return 1
    }
    return 0
  })
  displayMedia(medias)
}

function getMediaTitle (media) {
  if (media.image) {
    return media.title
  } else {
    const title = document.getElementById(media.id).textContent
    return title
  }
}

function sortByTitle () {
  medias.sort((a, b) => {
    const titleA = getMediaTitle(a)
    const titleB = getMediaTitle(b)

    if (titleA > titleB) {
      return 1
    }
    if (titleB > titleA) {
      return -1
    }
    return 0
  })
  displayMedia(medias)
}

function sortList (event) {
  const value = event.target.value
  switch (value) {
    case 'popularite':
      sortByPop()
      break
    case 'date':
      sortByDate()
      break
    case 'titre':
      sortByTitle()
      break

    default:
      break
  }
}

async function init () {
  // Récupère les datas des photographes
  const photographer = await getPhotographersById(idPhotographer)
  photographerFirstName = photographer.name.split(' ')[0]
  const photographDailyPrice = photographer.price
  medias = await getMedias(idPhotographer)
  const totalLikes = medias.reduce((previousValue, currentValue) => previousValue + currentValue.likes, 0)
  displayData(medias, totalLikes, photographDailyPrice, photographer)
  sortByPop()
  const select = document.getElementById('preferenceList')
  select.addEventListener('change', sortList)
}

init()
