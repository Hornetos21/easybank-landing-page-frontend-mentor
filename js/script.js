const menu = document.querySelector('.menu-burger')
const overlay = document.querySelector('.overlay')
const nav = document.querySelector('.header__nav-bar')

document.addEventListener('click', ({ target }) => {
  if (target === menu || target === overlay) {
    menu.classList.toggle('menu-close')
    nav.classList.toggle('header__nav-bar--mobile')
    overlay.classList.toggle('hidden')
  }
})
