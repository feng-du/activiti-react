import axios from 'axios';
import config from './config';

class AuthApi {
    static getAccessToken(username, password) {
        const { AUTH_HOST, params:{CLIENT_ID, CLIENT_SECRET, SCOPE} } = config;
        let grant_type = "password";

        let url = `${AUTH_HOST}/identity/connect/token`;

        let auth = 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET);
        let data =`username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=${encodeURIComponent(grant_type)}&scope=${encodeURIComponent(SCOPE)}`;
        return axios.post(url, data, {headers:{
            "Content-Type": "application/x-www-form-urlencoded",
            'Authorization': auth
        }});
    }

    static refreshAccessToken(refresh_token) {
        const { AUTH_HOST, params:{CLIENT_ID, CLIENT_SECRET} } = config;
        let grant_type = "refresh_token";
        
        let url = `${AUTH_HOST}/identity/connect/token`;
        let data =`refresh_token=${encodeURIComponent(refresh_token)}&client_id=${encodeURIComponent(CLIENT_ID)}&client_secret=${encodeURIComponent(CLIENT_SECRET)}&grant_type=${encodeURIComponent(grant_type)}`;
        
        return axios.post(url, data, {headers:{
            "Content-Type": "application/x-www-form-urlencoded",
        }});
    }

    static getAccount(access_token) {
        const { AUTH_HOST } = config;
        const url = `${AUTH_HOST}/identity/connect/userinfo`;

        return axios.get(url, {
            headers: { authorization: `Bearer ${access_token}` }
        });
    } 
}

export default AuthApi;