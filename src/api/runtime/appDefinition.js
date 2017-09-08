import axios from 'axios';
import { getAccessToken } from '../../auth/auth';
import config from '../apiConfig';

export const getAppDefinition = () => {
    let url = `${config.API_HOST}/activiti-app/app/rest/runtime/app-definitions`;
    const access_token = getAccessToken();
    url = `${url}?access_token=${access_token}`;

    return axios.get(url);
}