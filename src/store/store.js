import { makeAutoObservable } from 'mobx';
import { AuthService } from '../service/AuthService';

export default class Store {
  user = {};
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

  getUser() {
    return this.user;
  }

  async login(email, password) {
    try {
      const response = await AuthService.login(email, password);
      const { accessToken, refreshToken, ...user } = response.data;
      localStorage.setItem('token', accessToken);
      localStorage.setItem('email', user.email);
      this.setAuth(true);
      this.setUser(user);
      return true;
    } catch (e) {
      return false;
    }
  }

  async register(email, username, password) {
    try {
      const response = await AuthService.register(email, username, password);
      localStorage.setItem('token', response.data.accessToken);
      localStorage.setItem('email', response.data.email);
      this.setAuth(true);
      const { accessToken, refreshToken, ...user } = response.data;
      this.setUser(user);
      return response;
    } catch (e) {
      console.log(e?.message);
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      console.log(response.data.message);
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      this.setAuth(false);
      this.setUser({});
    } catch (e) {
      console.log(e?.message);
    }
  }
}
