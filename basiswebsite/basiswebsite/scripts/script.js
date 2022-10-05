// JavaScript Document
console.log("hi");

var MenuButton = document.querySelector("nav button:nth-of-type(1)")
var NavMenu = document.querySelector("nav ul")

MenuButton.addEventListener("click", ToggleMenu);

function ToggleMenu() {

    NavMenu.classList.toggle("ShowMenu");
    console.log("sdhbd")
}



