import AuthApi from './AuthApi';

export const signout = () => {
    clearToken();
};

export const signin = (username, password) => {
    return AuthApi.getAccessToken(username, password)
        .then(response => {
            const { access_token, refresh_token } = response.data;
            setToken({ username, access_token, refresh_token });
            return access_token;
        }).then(access_token => {
            return AuthApi.getAccount(access_token)
                .then(response => {
                    return response.data;
                }).catch(error => {
                    debugger
            });
        });
};

function clearToken() {
    const tokenId = localStorage.getItem('tokenId');
    localStorage.removeItem(tokenId);
    localStorage.removeItem('tokenId');
}

function setToken({username, access_token, refresh_token}) {
    const data = JSON.stringify({ access_token, refresh_token });
    localStorage.setItem("tokenId", username);
    localStorage.setItem(username, data);
}


export const getToken = () => {
    let tokenId = localStorage.getItem("tokenId");
    const json = localStorage.getItem(tokenId);

    const { access_token, refresh_token } = JSON.parse(json);
    
    return { tokenId, access_token, refresh_token };
};

export const refreshAccessToken = () => {
    const { tokenId, refresh_token } = getToken();

    return AuthApi.refreshAccessToken(refresh_token)
        .then(response => {
            setToken({ 
                tokenId, 
                access_token: response.data.access_token, 
                refresh_token: response.data.refresh_token
             });

             return response.data.access_token;
    }).catch(r=> {
        // clear token data when refresh token errors.
        clearToken();

        throw r;
    });
};


export const isAuthenticated = () => {
    if(localStorage.getItem("tokenId")) {
        return true;
    } else {
        return false;
    }
};

export const getAccount = () => {
    const { access_token } = getToken();
    const getAccountFunc = access_token => AuthApi.getAccount(access_token).then(r=>r.data);

    return getAccountFunc(access_token)
            .catch(error => {
                if(error.response){
                    const { response:{ status } } = error;
                    if(status == 401 || status == 403)
                        return refreshAccessToken().then(access_token => getAccountFunc(access_token));
                } else {
                    throw error;
                }

            });
}