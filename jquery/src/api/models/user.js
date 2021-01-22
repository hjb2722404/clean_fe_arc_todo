import urlManager from '../urlManage.js';
import request from '../request.js';

export function getUserInfo(params, config = {}) {
    return request(urlManager.getUrl('user/info'), params, config);
}
