var mainMenu = document.getElementById('main-menu')
var hamburgerButton = document.querySelector('.hamburger-btn')
var header = document.querySelector('header')

function toggleMenu() {
    if (mainMenu.classList.toggle('show-menu')) {
        hamburgerButton.setAttribute('aria-expanded', true)
    }
    else {
        hamburgerButton.setAttribute('aria-expanded', false)
    }
}

hamburgerButton.onclick = toggleMenu

function closeMenu() {
    hamburgerButton.setAttribute('aria-expanded', false)
    mainMenu.classList.remove('show-menu')
    hamburgerButton.focus()
}

document.onkeyup = function(e) {
    if (e.key == 'Escape')
        closeMenu()
}

document.onclick = function(e) {
    if (!header.contains(e.target)) {
        closeMenu()
    }
}