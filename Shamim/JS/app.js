// active navbar 
let nav = document.querySelector('.navigation-wrap');
window.onscroll = function (){
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("scoll-on")
  }else{
    nav.classList.remove("scoll-on")
  }

}
//nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
  a.addEventListener("click", function(){
    navCollapse.classList.remove("show");
  })
})