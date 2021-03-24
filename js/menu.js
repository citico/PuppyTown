// const hamburger = document.getElementsByClassName('hamburger');
// const myLinks = document.getElementsByClassName('myLinks');

// hamburger.addEventListener('click', () => {
//     myLinks.classList.toggle('show');
// });

// function toggleClass() {
//     let menu = document.querySelector(".nav-bar");
//     menu.classList.toggle("show");
// }


const hamburger = document.querySelector('.hamburger');
const myLinks = document.querySelector('.myLinks');

hamburger.addEventListener('click', () => {
    myLinks.classList.toggle('show');
});