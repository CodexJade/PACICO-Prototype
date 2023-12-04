let sun = document.getElementById("sun")
let mountain = document.getElementById("mountain")
let text = document.getElementById("text")
let land = document.getElementById("land")
let stars = document.getElementById("stars")
let bookshelf = document.getElementById("bookshelf")
let cabinet = document.getElementById("cabinet")

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    sun.style.top = value * .8 + "px";
    stars.style.left = value + "px";

})
