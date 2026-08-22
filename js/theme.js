// theme.js
/**
 * 更新主题状态到 localStorage，并切换按钮图标
 * @param {string} theme - 'light' 或 'dark'
 * @param {HTMLElement} iconEl - 图标元素
 */
function updateThemeUI(theme, iconEl) {
    // 更新 HTML data-theme 属性
    document.documentElement.setAttribute("data-theme", theme);

    // 存储到 localStorage
    localStorage.setItem("theme", theme);

    // 更新按钮图标
    if (theme === "dark") {
        iconEl.src = "assets/sun.png"; // 暗黑模式 → 显示太阳图标
    } else {
        iconEl.src = "assets/moon.png"; // 亮色模式 → 显示月亮图标
    }
}

/**
 * 初始化主题切换按钮
 * @param {string} buttonId - 按钮 ID
 * @param {string} iconId - 图标 ID
 */
export function initThemeToggle(buttonId, iconId) {
    const toggleBtn = document.getElementById(buttonId);
    const icon = document.getElementById(iconId);

    // 从 localStorage 读取主题
    const savedTheme = localStorage.getItem("theme") || "light";
    updateThemeUI(savedTheme, icon);

    // 点击按钮切换主题
    toggleBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        updateThemeUI(newTheme, icon);
    });
}

export function initThemeSelect(selectId) {
    const selector = document.getElementById(selectId);

    // 从本地存储读取主题
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    selector.value = savedTheme;

    // 切换主题
    selector.addEventListener("change", (e) => {
        const theme = e.target.value;
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    });
}

export async function scrollHeaderFloat(target, height) {
    const container = typeof target === "string" ? document.getElementById(target) : target;
    if (!container) {
        console.error(`找不到目标容器: ${target}`);
        return;
    }

    const header = document.getElementById(target);
    const triggerHeight = height; // 滚动多少 px 后触发

    window.addEventListener("scroll", () => {
        if (window.scrollY > triggerHeight) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    });
}

/**
 * scrollHeaderHide
 * @param {*} elementId 
 * @param {*} height 
 * @description Scroll hidden: the function is activated when the screen scroll's down the header disappears the header re-appears when you scoll up
 * @author george lee
 * @email lzysum1@outlook.com
 */
export async function scrollHeaderHide(elementId, height) {
    let lastScrollY = window.scrollY;
    const header = document.getElementById(elementId);
    // const triggerHeight = height; // 滚动多少 px 后触发
    // let curHeight = window.scrollY - lastScrollY;

    window.addEventListener("scroll", () => {
        if (window.scrollY < lastScrollY && window.scrollY > height) {
                // 向下滚动且滚动距离大于 50px → 隐藏
                header.classList.add("fixed");
        } else {
            // if (window.scrollY > height) {
                // 向上滚动 → 显示
                header.classList.remove("fixed");
            // }
        }
        lastScrollY = window.scrollY;
    });
}

// 水珠移动函数
function moveIndicatorTo(element, nav, indicator) {
    const rect = element.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    indicator.style.width = `${rect.width}px`;
    indicator.style.transform = `translateX(${rect.left - navRect.left}px)`;
    indicator.style.opacity = 1;
}

function hideIndicator(indicator) {
    indicator.style.opacity = 0;
}

/**
 * navIndicator
 * @param {*} target 
 * @param {*} navIndicator 
 * @description js nav indicator, like anchor effects
 */
export async function navIndicator(target, navIndicator) {
    const nav = document.querySelector(target);  //传入类名(含.，如：".main-nav")
    const indicator = nav.querySelector(navIndicator);
    const links = nav.querySelectorAll("a");
    // const links = nav.querySelectorAll("> ul > li > a"); // 只选一级菜单

    links.forEach(link => {
        const parentLi = link.parentElement;
        const submenu = parentLi.querySelector(target || '> ul');

        // 鼠标进入父菜单
        link.addEventListener("mouseenter", () => moveIndicatorTo(link, nav, indicator));

        // 鼠标离开父菜单（如果没有子菜单）
        link.addEventListener('mouseleave', () => {
            // if (!submenu) hideIndicator(indicator);
            if (!submenu && !activeLink) hideIndicator();
        });

        // 如果有子菜单，进入子菜单时隐藏父菜单指示器
        if (submenu) {
            submenu.addEventListener('mouseenter', () => {
                hideIndicator(indicator);
            });

            // 如果需要，离开子菜单时恢复父菜单指示器
            submenu.addEventListener('mouseleave', () => {
                moveIndicatorTo(link, nav, indicator)
            });
        }

        // 点击菜单时设置为选中项
        link.addEventListener('click', e => {
            e.preventDefault();
            activeLink = link;
            moveIndicatorTo(activeLink, nav, indicator);
        });
    });

    // nav.addEventListener("mouseleave", () => {
    //     indicator.style.width = `0px`;
    // });
    // 鼠标移出时回到当前页面项
    nav.addEventListener("mouseleave", () => {
        if (activeLink) {
            moveIndicatorTo(activeLink, nav, indicator);
        } else {
            indicator.style.width = `0px`;
        }
    });

    // 页面加载时找到当前页面的菜单项
    let activeLink = null;
    const currentPath = window.location.pathname.replace(/\/$/, ""); // 去掉末尾斜杠
    links.forEach(link => {
        const linkPath = new URL(link.href).pathname.replace(/\/$/, "");
        if (linkPath === currentPath) {
            activeLink = link;
            link.classList.add("active");
        }
    });

    // 如果找到了当前页面的菜单项，初始化水珠位置
    if (activeLink) {
        moveIndicatorTo(activeLink, nav, indicator);
    }
}

// 以下为old function
export function initThemeToggleByClass(buttonId, iconId) {
    const toggleBtn = document.getElementById(buttonId);
    const icon = document.getElementById(iconId);

    // 初始化主题
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        icon.src = "assets/sun.png";
    }

    // 切换事件
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            icon.src = "assets/sun.png";
            localStorage.setItem("theme", "dark");
        } else {
            icon.src = "assets/moon.png";
            localStorage.setItem("theme", "light");
        }
    });
}

export function initThemeToggle1(buttonId, iconId) {
    const toggleBtn = document.getElementById(buttonId);
    const icon = document.getElementById(iconId);

    // 初始化主题
    if (localStorage.getItem("theme") === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        icon.src = "assets/sun.png";
    }

    toggleBtn.addEventListener("click", () => {
        const isDark = document.documentElement.getAttribute("data-theme") === "dark";
        if (isDark) {
            document.documentElement.setAttribute("data-theme", "light");
            icon.src = "assets/moon.png";
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            icon.src = "assets/sun.png";
            localStorage.setItem("theme", "dark");
        }
    });
}