import userApi from '../api/modules/user.js';
class User {
    constructor(info) {
        this.userInfo = info;
    }

    getUserInfo(id) {
        userApi.getUserInfo(id).then((data) => {
            // 这里可以做一些数据加工
            return data.data;
        });
    }
}

export default User;