const menu = document.querySelector('#menu-icon')
const navbar = document.querySelector('.navbar')
const imageMetaTag = document.querySelector('meta[property="og:image"]')

menu.onclick = () => {
  menu.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}

window.onscroll = () => {
  menu.classList.remove('bx-x')
  navbar.classList.remove('active')
}

document.querySelectorAll('.footer i').forEach(icon => {
  icon.addEventListener('click', function () {
    open(this.children[0].href, '_blank')
  })
})

imageMetaTag.setAttribute('content', `${location.href}/img/katech.png`.replace('//img', '/img'))
