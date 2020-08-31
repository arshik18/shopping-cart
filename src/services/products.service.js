import axios from 'axios';

export const getProductsListService = (url,param) => {
    return axios.get(url,{params:param});
  };
