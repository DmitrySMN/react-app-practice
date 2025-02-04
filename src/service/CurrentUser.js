import $api from "../http";


export default class CurrentUserService {

    static async getCurrentUserData() {
        return $api.get('/users/me');
    }

}