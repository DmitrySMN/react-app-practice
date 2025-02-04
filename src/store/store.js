import { makeAutoObservable } from "mobx";
import { AuthService } from "../service/AuthService";


export default class Store {
    
    user = {}
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            const {accessToken, refreshToken, ...user} = response.data;
            this.setUser(user);
        } catch(e) {
            console.log(e?.message);
        }
    }

    async register(email, username, password) {
        try {
            const response = await AuthService.register(email, username, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            const {accessToken, refreshToken, ...user} = response.data;
            this.setUser(user);
        } catch(e) {
            console.log(e?.message);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});
        } catch(e) {
            console.log(e?.message);
        }
    }
} 