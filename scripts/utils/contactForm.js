/****************************/
/****************************/
/** Composant Contact Form **/
/****************************/
/****************************/

/* eslint-disable no-unused-vars */
function listenEscape (e) {
  if (e.code === 'Escape') { closeModal() }
}
document.addEventListener('keydown', listenEscape)

function displayModal () {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'block'
}

function closeModal () {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'none'
}

document.getElementById('contactForm').addEventListener('submit', sendContact)

function sendContact (event) {
  event.preventDefault()
  const firstName = document.getElementById('firstName').value
  const lastName = document.getElementById('lastName').value
  const mail = document.getElementById('mail').value
  const message = document.getElementById('message').value

  console.log(firstName, lastName, mail, message)

  closeModal()
}
