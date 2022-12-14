var home=document.getElementById('home')
var about=document.getElementById('about')
var projects =document.getElementById('projects_links')
var contacts = document.getElementById('contacts')
var contactme = document.getElementById('contactme_')
var navbar = document.getElementById('navbar')



if(screen.width<420){
    navbar.classList.remove('navbar-fixed-top')
}




about.addEventListener("click",()=>{
    window.scrollTo(10,600)
})
home.addEventListener("click",()=>{
    window.scrollTo(0,0)
})
projects.addEventListener("click",()=>{
    window.scrollTo(10,1700)
})
contacts.addEventListener("click",()=>{
    window.scrollTo(10,2300)
})
contactme.addEventListener("click",()=>{
    if(screen.width <= 420){
        window.scrollTo(0,2070)
    }else{
        window.scrollTo(10,2350)

    }
})


// alert(screen.width)