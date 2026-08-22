const CONFIG = {
    BASE_PATH: "/", // 根目录部署时为空，二级目录如 "/subsite"
    PAGES_PATH: "pages/", // 带 / 结尾
    PARTIALS_PATH: "partials/", // 公共模块目录
    QUERY_KEY: "page", // URL 参数名
    DEFAULT_PAGE: "home.html",
    CONTAINERS: {
        header: "#siteHeader",
        footer: "#siteFooter",
        sidebar: "#sidebar",
        breadcrumbs: "#breadcrumbs",
        content: "#main-content"
    }
};

export default CONFIG;