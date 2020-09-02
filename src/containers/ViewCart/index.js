import React from "react";
import "./index.module.css";
import ViewCart from "../../components/ViewCart";
import { connect } from "react-redux";
import { postOrdersService } from "../../services/orders.service";
import { toast } from "react-toastify";
import * as actionTypes from "../../store/action";

const ViewCartContainer = (props) => {
  const { cartItemList, cartCounter, emptyCart } = props;

  const placeOrder = () => {
    postOrdersService({ products: cartItemList, orderOn: Date() }).then(
      (response) => {
        emptyCart();
        toast.success("Order Placed");
      }
    );
  };

  return (
    <div>
      <ViewCart
        cartCounter={cartCounter}
        cartItemList={cartItemList}
        placeOrder={placeOrder}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItemList: state.cartItemList,
    cartCounter: state.cartCounter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    emptyCart: () => dispatch({ type: actionTypes.EMPTY_CART }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewCartContainer);
