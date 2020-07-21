var menuOpened = false

var handler = document.getElementById('shai-menu')
var buttonClose = document.getElementById('shai-close-menu')
var menuOverlay = document.getElementsByClassName('shai-menu-overlay')[0]
var animationLottie = document.getElementsByClassName('shai-lottie-animation')[0]
var messageSended = document.getElementsByClassName('shai-message-sent ')[0]

handler.addEventListener('click', toggleMenu)

if (buttonClose) {
  buttonClose.addEventListener('click', toggleMenu)
}

function openMenu () {
  document.body.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  })
  document.body.className = 'shai-menu-opened'
  menuOverlay.className += ' shai-block'
  setTimeout(function () {
    menuOverlay.className += ' shai-visible'
  }, 25)
}

function closeMenu () {
  document.body.className = ''
  menuOverlay.className = menuOverlay.className.replace('shai-visible', '')
  setTimeout(function () {
    menuOverlay.className = menuOverlay.className.replace('shai-block', '')
  }, 525)
}

function toggleMenu () {
  if (menuOpened) closeMenu()
  else openMenu()
  menuOpened = !menuOpened
}

if (typeof (bodymovin) !== 'undefined') {
  var animation = bodymovin.loadAnimation({
    container: animationLottie,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/js/data.json'
  })
}

function getParameterByName (name) {
  var url = window.location.href
  name = name.replace(/[\[\]]/g, '\\$&')
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  var results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

if (typeof (section) !== 'undefined' && section === 'about') {
  var emailSended = getParameterByName('email')
  if (emailSended === 'sended') {
    messageSended.className += ' shai-message-visible'
  }
}
