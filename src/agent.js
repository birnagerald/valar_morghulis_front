import superagentPromise from "superagent-promise";
import _superagent from "superagent";

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = "https://api-valar-morghulis.plsergent.xyz/api/v1";
const responseBody = response => response.body;

let token = null;

const tokenPlugin = secured => {
  return request => {
    if (token && secured) {
      request.set("Authorization", `Bearer ${token}`);
    }
  };
};



export const requests = {
  get: (url, secured = true) => {
    return superagent
      .get(`${API_ROOT}${url}`)
      .use(tokenPlugin(secured))
      .then(responseBody);
  },
  post: (url, body = null, secured = true) => {
    return superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin(secured))
      .then(responseBody);
  },
  delete: (url, secured = true) => {
    return superagent
      .del(`${API_ROOT}${url}`)
      .use(tokenPlugin(secured))
      .then(responseBody);
  },
  patch: (url, body = null, secured = true) => {
    return superagent
      .patch(`${API_ROOT}${url}`, body)
      .use(tokenPlugin(secured))
      .then(responseBody);
  },
  postCustom: (url, body = null, secured = true) => {
    return superagent
      .post(`${url}`, body)
      .use(tokenPlugin(secured))
      .then(responseBody);
  },
  postLogin: (url, username = "", password = "", secured = false) => {
    return superagent
      .post(`${API_ROOT}${url}`)
      .send(`username=${username}`)
      .send(`password=${password}`)
      .then(responseBody);
  },
  postFile: (url,data, secured = true) =>{
    return superagent
    .post(`${API_ROOT}${url}`)
    .send(data)
    .use(tokenPlugin(secured))
    .then(responseBody)
  },
  deleteFile: (url,id, secured = true) =>{
    return superagent
    .del(`${API_ROOT}${url}`)
    .send(id)
    .use(tokenPlugin(secured))
    .then(responseBody)
  },
  setToken: newJwtToken => (token = newJwtToken)
};
