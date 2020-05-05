const navBar = document.querySelector('nav')
const openBtn = document.getElementById('open-menu')
const openBtnClass = openBtn.classList
const closeBtn = document.getElementById('close-menu')
const closeBtnClass = closeBtn.classList
const menu = document.querySelector('.nav-links')
const logo = document.querySelector('.logo')


navBar.addEventListener('click', (e)=>{
    if(e.target.id === "open-menu" || e.target.id ==="close-menu"){
        openBtnClass.toggle('hide-originally')
        closeBtnClass.toggle('hide-originally')
        menu.classList.toggle('hide-originally')

        if(e.target.id === "open-menu"){
            menu.style.display ="flex"
            navBar.style.background = "#252B46"
            logo.src="images/logo-bookmark_blue.svg"
        }
        else if(e.target.id==="close-menu"){
            menu.style.display="none"
            navBar.style.background= "white"
            logo.src="images/logo-bookmark.svg"
        
        }
    }
})