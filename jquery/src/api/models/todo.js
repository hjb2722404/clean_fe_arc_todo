import urlManager from '../urlManage.js';
import request from '../request.js';

export function getTodoList(params, config = {}) {
    return request(urlManager.getUrl('todo/list'), params, config);
}