class Utils {
    static async loadPage(basePath, pagesPath, fileName, target) {
        const container = typeof target === "string" ? document.querySelector(target) : target;
        if (!container) {
            console.error(`找不到目标容器: ${target}`);
            return;
        }

        const url = this.buildPageUrl(basePath, pagesPath, fileName);

        try {
            container.innerHTML = `<p class="loading">加载中...</p>`;
            const response = await fetch(url);
            if (!response.ok) throw new Error(`页面不存在: ${url}`);
            const html = await response.text();
            container.innerHTML = html;
        } catch (err) {
            container.innerHTML = `<p style="color:red;">${err.message}</p>`;
        }
    }

    static getQueryParam(name, defaultValue = null) {
        const params = new URLSearchParams(window.location.search);
        return params.has(name) ? params.get(name) : defaultValue;
    }

    static buildPageUrl(basePath, pagesPath, fileName) {
        if (!fileName.endsWith(".html")) {
            fileName += ".html";
        }
        return `${basePath}/${pagesPath}${fileName}`.replace(/\/{2,}/g, "/");
    }

    static extractFileName(href, pagesPath) {
        return href.replace(pagesPath, "");
    }
}

export default Utils;