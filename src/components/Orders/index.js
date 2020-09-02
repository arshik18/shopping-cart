import React from "react";
import "./index.module.css";
import { Row, Col, Card } from "react-bootstrap";
import classes from "./index.module.css";
import Moment from "react-moment";
const Orders = (props) => {

  const { name, avatar, description, price,totalPrice,quantity } = props;
 
  const renderOrder = () =>{
    return(
      <Row className={classes.orderRow}>
      <Col className={classes.imageCol} xs="3">
        <Card className={classes.ordersCard}>
          <Card.Img src={avatar} />
        </Card>
      </Col>
      <Col xs="3">
        <p className={classes.labelName}>{name}</p>
        <p>{description}</p>
      </Col>
      <Col xs="2" className={classes.labelName}>
        <p>₹ {price} x {quantity}</p>
        <p></p>
        
      </Col>
      <Col className={classes.labelName}>
        <p>Total Price: ₹ {totalPrice}</p>
      </Col>
    </Row>
    )
  }
  return (
    renderOrder()
  );
};

export default Orders;
