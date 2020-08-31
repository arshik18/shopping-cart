import axios from 'axios';
import * as endpoints from '../services/endpoints';

export const getProductsListService = (url,param) => {
    return axios.get(url,{params:param});
  };
