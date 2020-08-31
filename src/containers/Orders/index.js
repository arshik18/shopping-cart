import React, { useState, useEffect } from "react";
import "./index.module.css";
import ViewOrders from "../../components/Orders";
import {getOrdersService } from "../../services/orders.service";
import { connect } from "react-redux";
import {Container} from 'react-bootstrap';
import classes from './index.module.css';
import LoaderSpinner from "../../components/common/Loader";

const OrdersContainer = (props) => {

  const [getOrders, setGetOrders] = useState([]);
  const [loader,showLoader,hideLoader] = LoaderSpinner();
  useEffect(() => {
      showLoader();      
      getOrdersService().then(response =>{
        hideLoader()
        setGetOrders(response.data);
      })},[]);

  return(
      
      <Container className={classes.ordersContainer}>
        {loader}
       {getOrders && getOrders.map(order=>{
         return(
           <React.Fragment>
           {order.products.map( product =>{
             return(
               <ViewOrders
                key={product.id}
                name={product.name}
                avatar={product.avatar}
                description={product.description}
                price={product.price}
                createdAt={order.createdAt}
                />
             )
           })}
           </React.Fragment>
         )
       })}
      
      </Container>
     
  )

}
const mapStateToProps = (state) => {
  return {
    cartItemList: state.cartItemList,
  };
};
export default connect(mapStateToProps)(OrdersContainer);
