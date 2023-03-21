import axios from "axios";
const TUITER_API_URL = "http://localhost:4000/api/tuits";

export const findAllTuits = async () => {
  const response = await axios.get(TUITER_API_URL);
  return response.data;
};

export const findAllTuits2 = () => {
  return axios.get(TUITER_API_URL).then((response) => response.data);
};

export const findTuitById = (id) => {};
export const createTuit = (tuit) => {
  return axios.post(TUITER_API_URL, tuit);
};
export const updateTuit = (newTuit) => {
  return axios.put(`${TUITER_API_URL}/${newTuit.id}`, newTuit);
};

export const deleteTuit = (id) => {
  return axios.delete(`${TUITER_API_URL}/${id}`);
};
