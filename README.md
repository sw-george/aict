/project
│
├── index.html
├── app.js              # 启动入口
├── config.js           # 配置文件（变量集中管理）
├── utils.js            # 工具类
├── event.js            # 事件管理类
├── styles.css          # 样式文件
│
├── /pages              # 内容页面
│     ├── page1.html
│     └── page2.html
│
└── /partials           # 公共模块
      ├── header.html
      ├── footer.html
      ├── sidebar.html
      └── breadcrumbs.html

/css
│── variables.css   # 全局变量（颜色、字体、间距等）
│── global.css      # 全局通用样式（reset、基础标签样式）
│── layout.css      # 布局相关（header、main、footer、sidebar）
│── components.css  # 组件样式（navbar、dropdown、card、breadcrumbs等）
│── theme.css       # 主题切换（light/dark）
CSS 加载优先级流程图

Copy code
┌───────────────────────────────┐
│ 1. variables.css               │
│   - 定义全局 CSS 变量           │
│   - 必须最先加载，供后续使用    │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│ 2. global.css                  │
│   - Reset 样式（清除默认样式）  │
│   - 全局标签样式（body, a 等） │
│   - 使用 variables.css 的变量  │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│ 3. layout.css                  │
│   - 页面结构布局（header, main │
│     footer, sidebar 等）       │
│   - 依赖 global.css 基础样式   │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│ 4. components.css              │
│   - 具体组件样式（navbar, card │
│     breadcrumbs 等）           │
│   - 依赖 layout.css 结构        │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│ 5. theme.css                   │
│   - 主题覆盖（html[data-theme] │
│     方式）                     │
│   - 必须最后加载，覆盖前面颜色 │
└───────────────────────────────┘
引入顺序示例:

<!-- 1. 变量文件（必须最先引入，供后续文件使用） -->
<link rel="stylesheet" href="css/variables.css">

<!-- 2. 全局基础样式（reset、标签默认样式） -->
<link rel="stylesheet" href="css/global.css">

<!-- 3. 布局样式（header、main、footer、sidebar 等结构） -->
<link rel="stylesheet" href="css/layout.css">

<!-- 4. 组件样式（navbar、dropdown、card、breadcrumbs 等） -->
<link rel="stylesheet" href="css/components.css">

<!-- 5. 主题样式（light/dark 主题切换相关） -->
<link rel="stylesheet" href="css/theme.css">

为什么是这个顺序
variables.css

定义全局 CSS 变量（--color-primary 等），必须最先引入，这样后面的文件都能用这些变量。
global.css

定义全局 reset 和基础标签样式（body, a, button 等），作为所有样式的基础。
layout.css

定义页面结构布局（header、main、footer、sidebar 等），不涉及具体组件细节。
components.css

定义具体组件（导航栏、卡片、面包屑等）的样式，依赖布局和变量。
theme.css

定义主题切换（html[data-theme="dark"]）的覆盖样式，必须放最后，这样能覆盖前面所有颜色相关的定义。
额外建议
如果以后有页面级别的特殊样式（比如 home.css、blog.css），建议放在 theme.css 之后，这样可以覆盖主题和全局样式。
如果有第三方 UI 库（Bootstrap、Tailwind 等），建议放在 variables.css 之前 或 global.css 之前，然后用你的变量和样式覆盖它。


✅ 变量可全局使用（variables.css 最先）
✅ 基础样式先打底（global.css）
✅ 布局先于组件（layout.css → components.css）
✅ 主题覆盖所有颜色（theme.css 最后）
✅ 页面样式可随时覆盖（home.css 等放最后）