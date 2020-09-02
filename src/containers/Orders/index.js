import React, { useState, useEffect } from "react";
import "./index.module.css";
import ViewOrders from "../../components/Orders";
import { getOrdersService } from "../../services/orders.service";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./index.module.css";
import LoaderSpinner from "../../components/common/Loader";
import Moment from "react-moment";
const OrdersContainer = (props) => {
  const [getOrders, setGetOrders] = useState([]);
  const [loader, showLoader, hideLoader] = LoaderSpinner();

  useEffect(() => {
    showLoader();
    getOrdersService().then((response) => {
      hideLoader();
      setGetOrders(response.data);
    });
  }, []);

  const renderOrders = () => {
    return (
      <React.Fragment>
        {loader}
        {getOrders &&
          getOrders.map((order) => {
            return (
              <Container key={order.id} className={classes.ordersContainer}>
                <Row className={classes.ordersRow}>
                  <Col lg={9}>
                    <span className={classes.labelName}>Order id</span> #
                    {order.id}
                  </Col>
                  <Col>
                    <span className={classes.labelName}>Ordered On:</span>
                    <Moment
                      className={classes.date}
                      format="D MMM YYYY"
                      date={order.orderedOn}
                    />
                  </Col>
                </Row>
                {order.products.map((product) => {
                  return (
                    <React.Fragment>
                      <ViewOrders
                        key={product.id}
                        id={order.id}
                        name={product.name}
                        avatar={product.avatar}
                        description={product.description}
                        totalPrice={product.quantity * product.price}
                        price={product.price}
                        orderdOn={order.orderedOn}
                        quantity={product.quantity}
                      />
                      <hr />
                    </React.Fragment>
                  );
                })}
              </Container>
            );
          })}
      </React.Fragment>
    );
  };

  return (
    renderOrders()
    );
};

const mapStateToProps = (state) => {
  return {
    cartItemList: state.cartItemList,
  };
};

export default connect(mapStateToProps)(OrdersContainer);
