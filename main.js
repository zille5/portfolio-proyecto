function myMenuFunction(){
    var menuBth = document.getElementById("myNavMenu");
    if(menuBth.className === "nav-menu"){
        menuBth.className += "responsive";

    } else {
        menuBth.className = "nav-menu";
    }
}


// dark mode 

const body = document.querySelector("body");
 toggleSwitch= document.getElementById("toggle-switch");

 toggleSwitch.addEventListener("click", ()=>{
    body.classList.toggle("dark");
 })


 const menuBtn = document.querySelector(".nav-menu-btn");
 const navMenu = document.querySelector(".nav-menu");

 menuBtn.addEventListener("click", () => {
   navMenu.classList.toggle("open");
 });