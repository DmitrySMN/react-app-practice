import axios from "axios";
import $api from "../http";


export class AuthService {

    static async login(email, password) {
        const response = axios.post('http://localhost:3000/api/auth/login', {email, password});
        console.log(response);
        return response;
    }

    static async register(email, username, password) {
        
        const response = axios.post('http://localhost:3000/api/users/users', {email, username, password});
        console.log(response);
        return response;
    }

    static async logout() {
        return $api.post('/auth/logout');
    }
}