/* eslint-disable no-unused-vars */
const listenForLikes = () => {
  const likes = document.querySelectorAll('.likes')
  const totalLikes = document.querySelector('#media-likes')

  likes.forEach((like) => {
    like.addEventListener('click', (event) => {
      // preventDefault pour l'ancre de mon lien
      event.preventDefault()
      event.stopPropagation()
      const eventTarget = event.currentTarget
      eventTarget.classList.toggle('like-yes')
      if (eventTarget.classList.contains('like-yes')) {
        const spanLikeVal = eventTarget.previousSibling.innerText
        const numberLikes = Number(spanLikeVal) + 1
        eventTarget.previousSibling.innerText = numberLikes
        const numberTotalLikes = Number(totalLikes.innerText) + 1
        totalLikes.innerText = numberTotalLikes
      } else {
        const spanLikeVal = eventTarget.previousSibling.innerText
        const numberLikes = Number(spanLikeVal) - 1
        eventTarget.previousSibling.innerText = numberLikes
        const numberTotalLikes = Number(totalLikes.innerText) - 1
        totalLikes.innerText = numberTotalLikes
      }
    })
  })
}
