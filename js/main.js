// 引入 header 滚动隐藏模块
import { loadHtml } from "./loadHtml.js";
import { initThemeToggle } from "./theme-toggle.js";
import { initHeaderHideOnScroll } from "./header-hidden.js";

document.addEventListener("DOMContentLoaded", () => {
    // 初始化暗模式切换(elementId, filePath)
    loadHtml('siteHeader', '../include/header.html'); // Load header into #header
    loadHtml('siteFooter', '../include/footer.html'); // Load header into #header

    // 切换暗黑模式: header 是同步 HTML（非异步加载）
    // initThemeToggle('theme-toggle', 'theme-icon');
    // // 切换暗黑模式: header 是异步 HTML加载
    fetch('../include/header.html')
        .then(res => res.text())
        .then(html => {
            document.querySelector('header').innerHTML = html;
            // header 加载完成后再初始化
            initThemeToggle('theme-toggle', 'theme-icon');
        });

    // 初始化 header 滚动隐藏
    initHeaderHideOnScroll('.site-header');

});
