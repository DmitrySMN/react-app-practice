import $api from "../http";


export class CurrentUserService {

    static async me() {
        return $api.post('/auth/me');
    }

}