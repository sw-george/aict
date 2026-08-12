# 项目结构
web-app/
│
├── index.html                      # 首页
├── about.html                      # 关于页面
├── contact.html                    # 联系页面
│
├── public/                         # 公共静态资源（构建时直接复制）
│   ├── favicon.ico                  # 网站图标
│   ├── robots.txt                   # SEO 爬虫规则
│   └── manifest.json                # PWA 配置（可选）
│
├── src/                            # 源码目录
│   ├── styles/                      # 样式文件
│   │   ├── _variables.css           # CSS 变量（颜色、字体等）
│   │   ├── _mixins.css              # 常用样式混入（可选）
│   │   ├── base.css                 # 基础样式（排版、通用类）
│   │   ├── layout.css               # 布局样式
│   │   ├── components/              # 组件样式
│   │   │   ├── header.css
│   │   │   ├── footer.css
│   │   │   └── button.css
│   │   └── pages/                   # 页面专属样式
│   │       ├── home.css
│   │       └── about.css
│   │
│   ├── scripts/                     # 脚本文件
│   │   ├── main.js                  # 主入口脚本
│   │   ├── helpers/                 # 工具函数
│   │   │   ├── dom.js
│   │   │   └── format.js
│   │   └── libs/                     # 第三方库
│   │       └── jquery.min.js
│   │
│   ├── assets/                      # 资源文件
│   │   ├── images/
│   │   │   ├── logo.svg
│   │   │   ├── banner.jpg
│   │   │   └── icons/
│   │   │       └── menu.svg
│   │   ├── fonts/
│   │   │   ├── roboto.woff2
│   │   │   └── roboto.ttf
│   │   └── media/
│   │       ├── intro.mp4
│   │       └── bg-music.mp3
│   │
│   └── components/                  # HTML 组件（可选）
│       ├── header.html
│       └── footer.html
│
└── README.md                        # 项目说明文档

# 亮点:
##  public/ 与 src/ 分离
public/ 存放无需构建的静态文件，src/ 存放需要打包或处理的源码。
## CSS 采用分层结构
变量、混入、基础、布局、组件、页面样式分开，方便维护。
## JS 模块化
工具函数放在 helpers/，第三方库放在 libs/，避免混乱。
## 资源分类更细
图片、字体、媒体文件独立目录，命名清晰。
# 可扩展性强
预留 components/ 存放可复用 HTML 片段，方便模板化开发。