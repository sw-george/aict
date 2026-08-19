export default class Utils {
    // async Load HTML File
    static async asyncLoadHtml(url) {
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`Failed to load Html: ${url} (${res.status})`);
            // Extract HTML text from the response
            return await res.text();
        } catch (err) {
            console.error(err);
            return `<div style="color:red;">Failed to load Html: ${url}</div>`;
        }
    }

    // async Fetch API Data
    static async asyncFetchData(url) {
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`Failed to load API: ${url} (${res.status})`);
            // Extract json data from the response
            return await res.json();
        } catch (err) {
            console.error(err);
            return null;
        }
    }
}