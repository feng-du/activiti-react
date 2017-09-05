import axios from 'axios';
import config from './config';

class AuthApi {
    static authentication(username, password) {
        let url = `${config.API_HOST}/authentication`;
        let data ="j_username=" + encodeURIComponent(username) +"&j_password=" + encodeURIComponent(password) +"&_spring_security_remember_me=true&submit=Login";
        return axios.post(url, data, {headers:{
            "Content-Type": "application/x-www-form-urlencoded"
        }}).then((response) => {
            // If request is good...
            // - Save the JWT token
            localStorage.setItem('token', response.data.token);

            return response;
          });
    }

    static isAuthenticated() {
        const token = localStorage.getItem('token');
        // If we have a token, consider the user to be signed in
        if (token) {
          return true;
        } 

        return false;
    }
}

export default AuthApi;