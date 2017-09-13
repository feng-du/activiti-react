import req from '../../auth/util/req';
import config from '../apiConfig';

export function getAppDefinition() {
    let url = `${config.API_HOST}/app/rest/runtime/app-definitions`;
    // const access_token = getAccessToken();
    // url = `${url}?access_token=${access_token}`;

    return req(url).get();
}

