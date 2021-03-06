import axios from "axios";
import Constants from "expo-constants";

const API_URL = `${Constants.manifest.extra.apiUrl}users`;

console.log("Api_URL: ", API_URL);

const list = async () => {
  return await axios.get(API_URL);
};

const save = (user) => {
  if (user.id == undefined) {
    return axios.post(API_URL, user);
  } else {
    return axios.put(API_URL + "/" + user.id, user);
  }
};

const findById = async (id) => {
  const response = await axios.get(API_URL + "/" + id);
  return response;
};

const deleteById = (id) => {
  return axios.delete(API_URL + "/" + id);
};

export default { list, save, findById, deleteById };
