const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.btn-menu')
const menuCloseBtn = document.querySelector('.btn-menu-close')

menuBtn.addEventListener('click', () => {
    menu.classList.add('open')
})

menuCloseBtn.addEventListener('click', () => {
    menu.classList.remove('open')
})