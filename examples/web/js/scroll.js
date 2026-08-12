//scroll.js
// debugger
// let myheader = document.getElementsById("myHeader");

let myHeader = document.querySelector(".container");
// let myHeader = document.getElementById("top");
// let lastScrollY = myheader.offsetTop;
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    console.log("Scroll position:", window.scrollY);
    if (lastScrollY < window.scrollY) { // Adjust threshold as needed
        myHeader.classList.add('hidden');
    } else {
        myHeader.classList.remove('hidden');
    }

    lastScrollY = window.scrollY;
});


// Load header and footer when the DOM is fully loaded
// document.addEventListener('DOMContentLoaded', () => {
//   loadHTML('page_header', '../includes/header.html'); // Load header into #header
// });