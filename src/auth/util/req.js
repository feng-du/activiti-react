/**
 * Created by du on 16/4/29.
 */
import axios from 'axios';
import { getToken, refreshAccessToken } from '../auth';

const methods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
}

const basePostData = {
    // Device: "Mobile",
    // DeviceOS: "Andorid_IOS",
    // DeviceVersion: "8.x",
    // _UserId: "",
    // _SubsidiaryCode: "CN",
    // _ClientKey: "ProjectName",
    // _UserName: "User"
};

function request(url, method, reqd) {
    let data = reqd || {};
    data = {...basePostData, ...data};

    const { POST, PUT, PATCH, GET } = methods;

    const config = { method, url };
    if(method == POST || method == PUT || method == PATCH )
        config.data = data;
    else
        config.params = data;

    const reqFunc = () => {
        const { access_token } = getToken();  
         if(method == GET){
             config.params.access_token = access_token;
         } else {
            config.headers = { Authorization: `Bearer ${access_token}` };
         }

        return axios.request(config);
    };

    return reqFunc()
            .catch(error => {
                if(error.response){
                    const { response:{ status } } = error;
                    if(status == 401 || status == 403)
                        return refreshAccessToken().then(access_token => reqFunc());
                }else
                    throw error;
        }); 
}





let req = url =>{
    return {
        get(reqd){
            return request(url, methods.GET, reqd);
        },
        post(reqd){
            return request(url, methods.POST, reqd);
        },
        put(reqd){
            return request(url, methods.PUT, reqd);
        },
        delete(reqd){
            return request(url, methods.DELETE, reqd);
        }
    };
};

export default req;



