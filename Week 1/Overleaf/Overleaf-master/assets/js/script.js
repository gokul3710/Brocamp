let navOpenBtn = document.getElementById('nav-open');
let navCloseBtn = document.getElementById('nav-close');
let nav = document.getElementById('nav-menu');
const body = document.body;


navOpenBtn.addEventListener('click', ()=>{
    navOpenBtn.style.display = "none";
    navCloseBtn.style.display = "block";
    nav.style.display = "flex";
    body.style.overflow = "hidden";
})

navCloseBtn.addEventListener('click', ()=>{
    navOpenBtn.style.display = "block";
    navCloseBtn.style.display = "none";
    nav.style.display = "none";
    body.style.overflow = "scroll";
})


