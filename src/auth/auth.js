import AuthApi from './AuthApi';

export const signin = (username, password) => {
    return AuthApi.getAccessToken(username, password)
        .then(response => {
            const data = JSON.stringify(response.data);
            localStorage.setItem("tokenData", data);
        });
};

export const getAccessToken = () => {
    const tokenData = localStorage.getItem("tokenData");
    if (tokenData) {
        const { access_token } = JSON.parse(tokenData); 

        return access_token;
    }
    
};

export const refreshAccessToken = () => {
    const tokenData = localStorage.getItem("tokenData");

    const { refresh_token } = JSON.parse(tokenData);
    return AuthApi.refreshAccessToken(refresh_token)
        .then(response => {
            localStorage.setItem("tokenData", response.data);

            return response.data.access_token;
    });
};

export const isAuthenticated = () => {
    if(getAccessToken())
        return true;
    else
        return false;
};

export const getAccount = () => {
    const access_token = getAccessToken();

    return AuthApi.getAccount(access_token)
        .then(response => {
            return response.data;
        }).catch(error => {
            debugger
        });
}
