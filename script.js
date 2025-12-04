// const nav = document.getElementsByClassName("nav");
let navbar = document.querySelector('.nav');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

let click = document.querySelector(".icons");
document.querySelector("#click-me").onclick = () =>{
    click.classList.toggle("active");
}