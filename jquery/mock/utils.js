/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
    const search = url.split('?')[1];
    if (!search) {
      return {};
    }
    return JSON.parse(
      '{"' +
        decodeURIComponent(search)
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"')
          .replace(/\+/g, ' ') +
        '"}'
    );
}

/**
 * [export 转换参数中的字符串为整型]
 *
 * @param   {[type]}  query  [query 参数对象]
 * @param   {[type]}  keys   [keys 需要转换的字段]
 *
 * @return  {[type]}         [return description]
 */
export function transParamsToInt(query, keys) {
    for (const key in query) {
        if (!isNaN(parseInt(query[key])) && keys.indexOf(key) !== -1) {
          query[key] = parseInt(query[key]);
        }
    }
    return query;
}

