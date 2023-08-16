const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const smartLinks = document.querySelectorAll("#smartlink")
const body = document.querySelector("body")
const togg = document.querySelector("#toggle")
const toggMobile = document.querySelector("#toggle-mobile")


hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
})

smartLinks.forEach(link=>{
    link.addEventListener("click", ()=>
    menu.classList.toggle("hidden"))
})

togg.addEventListener("click", ()=>{
    body.classList.toggle("dark")
})

toggMobile.addEventListener("click", ()=>{
    body.classList.toggle("dark")
})