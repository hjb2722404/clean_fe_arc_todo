import urlMap from './urlMap.js';

class urlManager {
    constructor() {
        this.urlMap = urlMap;
    }

    getUrl(key) {
        return this.urlMap[key];
    }
}

export default new urlManager();