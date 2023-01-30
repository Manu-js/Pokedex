import axios from "axios";

const get = async <T = any>(url: string) => {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    console.log(error)
    return error
  }
};

export const http = {
  get,
};
