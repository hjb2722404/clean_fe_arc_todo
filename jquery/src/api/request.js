const $ = window.jQuery;

function request(url, params, config) {
    const config  = $.extend({
        contentType: 'application/json'
    }, config);
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            data: params, 
            contentType: config.contentType,
            success: function(data){
                resolve(data)
            },
            error: function(err) {
                reject(err);
            }
        });
    })

}

export default request;