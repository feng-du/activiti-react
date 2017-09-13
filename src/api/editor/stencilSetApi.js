import req from '../../auth/util/req';
import config from '../apiConfig';

const host = config.API_HOST;

export function getStencilSetForEditor() {
    let url = `${host}/app/rest/stencil-sets/editor?version=${Date.now()}`;

    return req(url).get();
}