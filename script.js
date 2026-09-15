const menu = document.getElementById('humberger-menu')
const menuIcon =  document.getElementById('menu-icon')
const menuLinks = document.getElementById('menu-links')
const conatiner = document.getElementById('conatiner')
const footer = document.getElementById('footer')


    let isMenuOpen = false  

menu.addEventListener('click',()=>{
      isMenuOpen = !(isMenuOpen)

      if(isMenuOpen ){
        menuIcon.src = './images/icon-close.svg' 
        menuLinks.classList.toggle('active')
        conatiner.classList.toggle('active')
        footer.classList.toggle('active')
    }
      else{
          menuIcon.src = './images/icon-menu.svg'
          menuLinks.classList.toggle('active')
          conatiner.classList.toggle('active')
          footer.classList.toggle('active')
      }
})





