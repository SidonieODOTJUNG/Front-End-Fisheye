/* eslint-disable no-unused-vars */
const getDatas = async function () {
  try {
    const response = await fetch('data/photographers.json')
    if (response.ok) {
      const data = await response.json()
      return data
    } else {
      console.error('Retour du serveur : ', response.status)
    }
  } catch (err) {
    console.log(err)
  }
}

const getPhotographers = async function () {
  const data = await getDatas()
  return data.photographers
}

const getPhotographersById = async function (id) {
  const data = await getPhotographers()
  const photographer = data.find(function (el) {
    return el.id === Number(id)
    // Number converti en int ou float
  })
  return photographer
}

const getMedias = async function (id) {
  const data = await getDatas()
  return data.medias.filter(function (el) {
    return el.photographerId === Number(id)
  })
}
