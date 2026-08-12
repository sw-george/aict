//scroll.js

export function initHeaderHideOnScroll(elementId, filePath) {
    const header = document.querySelector(".site-header");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
            // 向下滚动且滚动距离大于 50px → 隐藏
            header.classList.add("hidden");
        } else {
            // 向上滚动 → 显示
            header.classList.remove("hidden");
        }
        lastScrollY = window.scrollY;
    });
}
// debugger


// 滚动隐藏/显示 header


// Load header and footer when the DOM is fully loaded
// document.addEventListener('DOMContentLoaded', () => {
//   loadHTML('page_header', '../includes/header.html'); // Load header into #header
// });
