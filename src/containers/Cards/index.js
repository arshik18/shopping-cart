import React, { Fragment, useState, useEffect } from "react";
import classes from "./index.module.css";
import Cards from "../../components/common/Cards";
import {Row,Col,CardColumns} from "react-bootstrap";
import { getProductsListService } from "../../services/products.service.js";
import {connect} from 'react-redux';
import * as actionTypes from '../../store/action';
import LoaderSpinner from '../../components/common/Loader';
import * as endpoints from '../../services/endpoints';
import { toast } from "react-toastify";
const CardsContainer = (props) => {

  const [productsList, setProductsList] = useState([]);
  const [loader,showLoader,hideLoader]= LoaderSpinner();
  const {searchList} = props;
  useEffect(() => {
    //Api call for Product List
    showLoader();
    getProductsListService(endpoints.products).then((response) => {
      hideLoader();
      setProductsList(response.data);
    });
  }, []);

  
  return (
    <Fragment>
      {loader}
    {/* <CardColumns className={classes.cardColumn}> */}
    <Row className={classes.cardRow}>
      {searchList.length>0 ? 
      <React.Fragment>
        {searchList.map(product => {
          return (
            <Cards
              key={product.id}
              image={product.avatar}
              name={product.name}
              price={product.price}
              description={product.description}
              addToCart={()=>{
                toast.success("Item added to cart");
                Object.assign(product,{quantity:1})
                props.addItems(product)
              }
              }
            />
          );
        })}</React.Fragment> :
      <React.Fragment>
      {productsList &&
        productsList.map((product) => {
          return (
            <Col  lg={3} className={classes.cardsCol}>
            <Cards
              key={product.id}
              image={product.avatar}
              name={product.name}
              price={product.price}
              description={product.description}
              addToCart={()=>{
                toast.success(product.name +" added to cart");
                Object.assign(product,{quantity:1})
                props.addItems(product)}}
            /></Col>
          );
        })} </React.Fragment>}
      </Row>
   {/*  </CardColumns> */}
    
    </Fragment>
  );
};
const mapStateToProps = state =>{
    return{
        counter: state.cartCounter,
        cartcartItemList: state.cartItemList,
        searchKey: state.searchKey,
        searchList: state.searchList
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        addItems: (product) => dispatch({type: actionTypes.ADD_ITEM_TO_CART, product: product})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CardsContainer);
