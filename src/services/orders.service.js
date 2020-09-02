import axios from 'axios';
import * as endpoints from '../services/endpoints';

export const postOrdersService = (data) => {
    return axios.post(endpoints.orders,data);
  };
  
export const getOrdersService = () => {
    return axios.get(endpoints.orders);
  };