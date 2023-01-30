import { BASE_URL } from "../config/config";
import axios from "axios";

const get = async <T = any>(url: string) => {
  try {
    const response = await axios.get<T>(`${BASE_URL}${url}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getWithUrl = async <T = any>(url: string) => {
  try {
    const response = await axios.get<T>(`${url}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const http = {
  get,
  getWithUrl,
};
