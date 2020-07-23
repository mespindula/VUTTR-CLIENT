import http from "../http-common";
import { login } from "../Auth";

const doLogin = () => {
    login();
};

const getAll = () => {
  return http.get("/tools");
};

const getByTag = tag => {
  return http.get(`/tools/%7Btag%7D%7B?tag%7D=&tag=${tag}`);
};

const getByTitle = title => {
  return http.get(`/tools/title/${title}`);
};

const create = data => {
  return http.post("/tools", data);
};

const remove = id => {
  return http.delete(`/tools/${id}`);
};

export default {
  doLogin,
  getAll,
  getByTag,
  getByTitle,
  create,
  remove
};
