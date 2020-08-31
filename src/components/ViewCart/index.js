import React from "react";
import classes from "./index.module.css";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import * as actionTypes from '../../store/action';

const ViewCart = (props) => {
  const { cartItemList, totalPrice, onDeleteItem, onQuantityChange,placeOrder } = props;
  return (
    <Container className={classes.viewCartContainer}>
      <Row className={classes.viewCartRow}>
        <Col lg="7" className={classes.cartItemDisplay}>
          <Row>
            <Col className={classes.labelCart}>
              My Cart ({props.cartCounter})
            </Col>
          </Row>
          <hr />
          {cartItemList.length === 0 ? (
            <p className={classes.labelCart}>Please add Item to Cart</p>
          ) : (
            cartItemList.map((listItem) => {
              return (
                <React.Fragment key={listItem.id}>
                  <Row >
                    <Col className={classes.imageCol} xs="4">
                      <Card>
                        <Card.Img src={listItem.avatar} />
                      </Card>
                    </Col>
                    <Col xs="4">
                      <p className={classes.labelName}>{listItem.name}</p>
                      <p>{listItem.description}</p>
                      <p>Price: {listItem.price}</p>
                    </Col>
                      <Row>
                        <Col>
                         {/*  <Form.Label>Quantity</Form.Label> */}
                          <Form.Control
                            as="select"
                            size="sm"
                            custom
                            onChange={(event) =>
                              onQuantityChange(event.target.value, listItem.id)
                            }
                            value={listItem.quantity}
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Form.Control>
                        </Col>
                        <Col className={classes.delete}>
                          <Button variant="link" onClick={() => onDeleteItem(listItem.id)}>
                            Delete
                          </Button>
                        </Col>
                      </Row>
                   
                  </Row>
                  <hr />
                </React.Fragment>
              );
            })
          )}
          {cartItemList.length > 0 && (
            <Row className={classes.ordersRow}>
              <Col>
               <Button onClick={placeOrder} className={classes.orderBtn}>Place Order</Button>
              </Col>
            </Row>
          )}
        </Col>
        <Col lg="1" className={classes.midcol}></Col>
        <Col lg="4" className={classes.subTotalCol}>
          <Row>
            <Col className={classes.labelCart}>Price Detail</Col>
          </Row>
          <hr />
          {cartItemList &&
            cartItemList.map((listItem) => {
              return (
                <React.Fragment key={listItem.id}>
                  <Row key={listItem.id}>
                    <Col>
                      {listItem.name} x {listItem.quantity}
                    </Col>
                    <Col>₹: {listItem.price * listItem.quantity} </Col>
                  </Row>
                  <hr />
                </React.Fragment>
              );
            })}
          <Row className={classes.amountRow}>
            <Col className={classes.labelCart}>Total Amount</Col>
            <Col className={classes.labelCart}>₹: {totalPrice}</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    totalPrice: state.totalPrice,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteItem: (id) => {
      dispatch({ type: actionTypes.DELETE_ITEM_FROM_CART, id: id });
    },
    onQuantityChange: (quantity, id) =>
      dispatch({ type: actionTypes.ON_QUANTITY_CHANGE, quantity: quantity, id: id }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewCart);
