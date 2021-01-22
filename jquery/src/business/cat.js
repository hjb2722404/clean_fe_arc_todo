import catApi from '../api/modules/cat.js';
class Cat {
    constructor() {
    }

    getCatList(params) {
        catApi.getCategoryList(params).then((data) => {
            // 这里可以做一些数据加工
            return data.data;
        });
    }
}

export default Cat;