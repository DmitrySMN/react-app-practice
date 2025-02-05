import axios from 'axios';

export class AuthService {
  static async login(email, password) {
    const response = axios.post(
      'http://localhost:3000/api/auth/login',
      {
        email,
        password,
      },
      { withCredentials: true },
    );
    console.log(response);
    return response;
  }

  static async register(email, username, password) {
    const response = axios.post(
      'http://localhost:3000/api/users/users',
      {
        email,
        username,
        password,
      },
      { withCredentials: true },
    );
    console.log(response);
    return response;
  }

  static async logout() {
    return axios.post('http://localhost:3000/api/auth/logout');
  }
}
