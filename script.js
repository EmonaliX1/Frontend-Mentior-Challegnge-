const menu = document.getElementById('humberger-menu')
const menuIcon =  document.getElementById('menu-icon')

let isMenuOpen = false 

menu.addEventListener('click',()=>{
  isMenuOpen = !(isMenuOpen)

  isMenuOpen ? 
  menuIcon.src = './images/icon-close.svg' 
  : menuIcon.src = './images/icon-menu.svg'
})()