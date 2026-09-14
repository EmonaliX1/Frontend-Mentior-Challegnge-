const menu = document.getElementById('humberger-menu')
const menuIcon =  document.getElementById('menu-icon')
const background  = document.getElementById('background')
const menuLinks = document.getElementById('menu-links')
const conatiner = document.getElementById('conatiner')
const footer = document.getElementById('footer')

let isMenuOpen = false 
  // BgColorChange(isMenuOpen)

menu.addEventListener('click',()=>{
  isMenuOpen = !(isMenuOpen)

  isMenuOpen ? 
  menuIcon.src = './images/icon-close.svg' 
  : menuIcon.src = './images/icon-menu.svg'

  OpenMenuLinks(isMenuOpen)
  BgColorChange(isMenuOpen)
})

function  OpenMenuLinks(isMenuOpen){
  if(isMenuOpen){
    menuLinks.style.right = "-35px"
  }
  else{
    menuLinks.style.right = "-555px"
  }
}

function  BgColorChange(isMenuOpen){
  if(isMenuOpen){
    conatiner.style.backgroundColor = ' rgba(0, 0, 0, 0.393)'
      conatiner.style.opacity = '.7'
      footer.style.backgroundColor = ' rgba(0, 0, 0, 0.393)'
      footer.style.opacity = '.7'
  }
  else{
    conatiner.style.removeProperty('background-color')
    conatiner.style.removeProperty('opacity')
     footer.style.removeProperty('background-color')
    footer.style.removeProperty('opacity')
  }
}