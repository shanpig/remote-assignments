// Click to Chang Text
let banner = document.querySelector(".banner");
banner.addEventListener("click", ()=>{
  banner.innerHTML = "<h2>Have a Good Time!</h2>"
})

// Click to Show/Close Menu
let burger = document.querySelector(".nav-burger");
burger.addEventListener("click", toggleSideMenu);

let burger_close = document.querySelector(".menu button");
burger_close.addEventListener("click", toggleSideMenu);

function toggleSideMenu(){
  document.querySelector(".menu").classList.toggle("active");
}

// Click to Show More Content Boxes
let cta = document.querySelector(".cta");
cta.addEventListener("click", toggleHiddenContent);

function toggleHiddenContent(){
  document.querySelector("#hidden-contents").classList.toggle("hidden");
}