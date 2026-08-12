// async function selectedMenu(itemclass) {
    // 获取所有菜单项
    // const menuItems = document.querySelectorAll('.nav-list li');
    const menuItems = document.querySelectorAll('.wrapper nav ul li a');

    // 给每个菜单项绑定点击事件
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // 移除所有菜单项的 active 类
            menuItems.forEach(a => a.classList.remove('active'));
            // 给当前点击项添加 active 类
            item.classList.add('active');
        });
    });
// }

// selectedMenu('.wrapper nav ul li');