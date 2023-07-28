import axios from "axios";

const BASE_URL = "https://64c134b6fa35860baea03960.mockapi.io";

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const postData = async (endpoint, data) => {
  try {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateData = async (endpoint, data) => {
  try {
    const response = await axios.put(`${BASE_URL}${endpoint}/${data.id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteData = async (endpoint, id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
