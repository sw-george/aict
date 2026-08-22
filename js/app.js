import CONFIG from './config.js';
import Utils from './Utils.js';
import EventManager from './event.js';
import { initThemeToggle, scrollHeaderFloat, initThemeSelect, navIndicator, scrollHeaderHide } from './theme.js';

async function startApp() {
    const eventManager = new EventManager();
    eventManager.bindEvents();

    // 加载公共模块
    await Utils.loadPage(CONFIG.BASE_PATH, CONFIG.PARTIALS_PATH, "header", CONFIG.CONTAINERS.header);
    await Utils.loadPage(CONFIG.BASE_PATH, CONFIG.PARTIALS_PATH, "footer", CONFIG.CONTAINERS.footer);
    await Utils.loadPage(CONFIG.BASE_PATH, CONFIG.PARTIALS_PATH, "sidebar", CONFIG.CONTAINERS.sidebar);
    await Utils.loadPage(CONFIG.BASE_PATH, CONFIG.PARTIALS_PATH, "breadcrumbs", CONFIG.CONTAINERS.breadcrumbs);

    // 初始化暗黑模式切换（必须在 header 加载完成后执行）
    initThemeToggle("darkModeToggle", "darkModeIcon");
    initThemeSelect("themeSelector");

    // 滚动时header浮动动画效果控制
    // scrollHeaderFloat("siteHeader", 150);
    // 滚动时隐藏header
    scrollHeaderHide('siteHeader', 50);

    // anchor effects nav水珠滑动效果js实现，另外，现在已使用CSS anchor positioning技术实现
    // navIndicator(".main-nav", ".nav-indicator");

    // load content加载内容区
    const page = Utils.getQueryParam(CONFIG.QUERY_KEY);
    if (page) {
        await Utils.loadPage(CONFIG.BASE_PATH, CONFIG.PAGES_PATH, page, CONFIG.CONTAINERS.content);
    } else {
        // default load home.html
        await Utils.loadPage(CONFIG.BASE_PATH, CONFIG.PAGES_PATH, CONFIG.DEFAULT_PAGE, CONFIG.CONTAINERS.content);
        // document.querySelector(CONFIG.CONTAINERS.content).innerHTML = "这里是初始内容";
    }
}

document.addEventListener("DOMContentLoaded", startApp);