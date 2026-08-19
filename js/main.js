// 引入 header 滚动隐藏模块
// import { loadHtml } from "./loadHtml.js";
import { initThemeToggle } from "./theme-toggle.js";
import { initHeaderHideOnScroll } from "./header-hidden.js";
import Utils from "./utils.js";

// define need loaded elementId and htmlUrl
const htmlFiles = [
    { elementId: 'siteHeader', htmlUrl: '../include/header.html' },
    { elementId: 'siteFooter', htmlUrl: '../include/footer.html' },
    { elementId: 'sidebar', htmlUrl: '../include/sidebar.html' }
];

async function loadAll() {
    // 切换暗黑模式: header 是同步 HTML（非异步加载）
    // initThemeToggle('theme-toggle', 'theme-icon');

    for (const item of htmlFiles) {
        // Insert the HTML into the target element
        const element = document.getElementById(item.elementId);  //用querySelector无效
        if (!element) {
            throw new Error(`Element with ID "${item.elementId}" not found`);
        }

        const htmlContent = await Utils.asyncLoadHtml(item.htmlUrl);
        element.innerHTML = htmlContent;
        if (item.elementId === 'siteHeader') {
            // 切换暗黑模式: async Load header HTML
            initThemeToggle('theme-toggle', 'theme-icon');

            // 初始化 header 滚动隐藏
            initHeaderHideOnScroll('.site-header');
        }
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAll);
} else {
    loadAll();
}

// document.addEventListener("DOMContentLoaded", () => {

    // 初始化暗模式切换(elementId, filePath)
    // loadHtml('siteHeader', '../include/header.html'); // Load header into #header
    // loadHtml('siteFooter', '../include/footer.html');
    // loadHtml('sidebar', '../include/sidebar.html');


    // // 
    // fetch('../include/header.html')
    //     .then(res => res.text())
    //     .then(html => {
    //         document.querySelector('header').innerHTML = html;
    //         // header 加载完成后再初始化
    //         initThemeToggle('theme-toggle', 'theme-icon');
    //     });

    // // 初始化 header 滚动隐藏
    // initHeaderHideOnScroll('.site-header');

// });
