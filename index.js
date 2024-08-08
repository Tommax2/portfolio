
let menuIcon = document.querySelector("#menuicon")
let navBar = document.querySelector("#narbar")
menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('active')
}