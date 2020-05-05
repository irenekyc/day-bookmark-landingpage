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

const features ={
    bookmark:{
        img: "images/illustration-features-tab-1.svg",
        head: "Bookmark in one click",
        des: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
    },
    searching:{
        img: "images/illustration-features-tab-2.svg",
        head: " Intelligent search",
        des: "  Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
    },
    sharing:{
        img: "images/illustration-features-tab-3.svg",
        head: "Share your bookmark",
        des: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
}}

const featureSelect = document.querySelector('.feature-links')
const featureImg = document.getElementById('feature-image')
const featureHead = document.getElementById('feature-head')
const featureDes = document.getElementById('feature-description')

featureSelect.addEventListener('click', (e)=>{
    if (e.target.id.includes("link")){
        console.log(e.target.id)
        let content
        if (e.target.id === "link-bookmark"){
           content = features.bookmark
        } else if (e.target.id === "link-searching"){
            content = features.searching
        } else if (e.target.id === "link-sharing"){
            content= features.sharing
        }
    featureImg.src=content.img
    featureHead.innerText = content.head
    featureDes.innerText=content.des
    }
    
    
})