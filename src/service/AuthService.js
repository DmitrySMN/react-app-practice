import $api from "../http";


export class AuthService {

    static async login(email, password) {
        return $api.post('/auth/login', {email, password});
    }

    static async register(email, username, password) {
        return $api.post('/users/users', {email, username, password});
    }

    static async login() {
        return $api.post('/auth/logout');
    }
}