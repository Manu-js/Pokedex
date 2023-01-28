import axios from 'axios';

  const get = async <T>(url: string) => {
    const response = await axios.get<T>(url);
    return response.data;
  }
  
  export const http = {
    get
  }