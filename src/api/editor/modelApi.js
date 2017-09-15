import req from '../../auth/util/req';
import config from '../apiConfig';

const host = config.API_HOST;

export function getModels(filter, modelType, sort) {
    let url = `${host}/app/rest/models?filter=${filter}&modelType=${modelType}&sort=${sort}`;

    return req(url).get();
}

export function getModel(modelId) {
    let url = `${host}/app/rest/models/${modelId}/editor/json?version=${Date.now()}`;

    return req(url).get();
}