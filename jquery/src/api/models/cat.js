import urlManager from '../urlManage.js';
import request from '../request.js';

export function getCategoryList(params, config = {}) {
    return request(urlManager.getUrl('cat/list'), params, config);
}