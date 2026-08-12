// 主题切换逻辑
// document.getElementById('theme-toggle').addEventListener('click', () => {
//     const currentTheme = document.documentElement.getAttribute('data-theme');
//     if (currentTheme === 'dark') {
//         document.documentElement.setAttribute('data-theme', 'light');
//         localStorage.setItem('theme', 'light');
//     } else {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         localStorage.setItem('theme', 'dark');
//     }
// });

// 页面加载时读取主题
// (function() {
//     const savedTheme = localStorage.getItem('theme') || 'dark';
//     document.documentElement.setAttribute('data-theme', savedTheme);
// })();

export function initThemeToggle(buttonId, iconId) {
    // 主题切换逻辑
    const themeToggleBtn = document.getElementById(buttonId);
    const themeIcon = document.getElementById(iconId);

    if (!themeToggleBtn || !themeIcon) {
        console.error(`未找到按钮或图标元素: ${buttonId}, ${iconId}`);
        return;
    }

    // 定义图标资源
    const icons = {
        light: { src: '../images/icon-moon.png', alt: '切换到暗黑模式' },
        dark: { src: '../images/icon-sun.png', alt: '切换到明亮模式' }
    };

    // 初始化主题
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme || 'light';
    document.documentElement.setAttribute('data-theme', initialTheme);
    themeIcon.src = icons[initialTheme].src;
    themeIcon.alt = icons[initialTheme].alt;

    // 点击切换
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);

        // 更新按钮图标
        themeIcon.src = icons[newTheme].src;
        themeIcon.alt = icons[newTheme].alt;

        // 保存用户选择
        localStorage.setItem('theme', newTheme);
    });
}