import Utils from './Utils.js';
import CONFIG from './config.js';

class EventManager {
    constructor() {
        this.basePath = CONFIG.BASE_PATH;
        this.pagesPath = CONFIG.PAGES_PATH;
        this.defaultContainer = CONFIG.CONTAINERS.content;
        this.queryKey = CONFIG.QUERY_KEY;
    }

    bindEvents() {       
        document.addEventListener("click", async (e) => {
            const link = e.target.closest("a");
            if (!link) return;

            const href = link.getAttribute("href");

            if (href.startsWith(this.pagesPath)) {
                e.preventDefault();
                const fileName = Utils.extractFileName(href, this.pagesPath);
                history.pushState({ page: fileName }, "", `?${this.queryKey}=${fileName.replace(".html", "")}`);
                await Utils.loadPage(this.basePath, this.pagesPath, fileName, this.defaultContainer);
            }
        });

        window.addEventListener("popstate", async () => {
            const page = Utils.getQueryParam(this.queryKey);
            if (page) {
                await Utils.loadPage(this.basePath, this.pagesPath, page, this.defaultContainer);
            } else {
                document.querySelector(this.defaultContainer).innerHTML = "这里是初始内容";
            }
        });
    }
}

export default EventManager;