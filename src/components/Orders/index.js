import React from "react";
import "./index.module.css";
import { Row, Col, Card } from "react-bootstrap";
import classes from "./index.module.css";
import Moment from "react-moment";
const Orders = (props) => {

  const { name, avatar, description, price,createdAt } = props;
  const toUpperCaseFilter = (date) => {
    return date.toUpperCase();
};
  return (
    <Row className={classes.orderRow}>
      <Col className={classes.imageCol} xs="3">
        <Card className={classes.ordersCard}>
          <Card.Img src={avatar} />
        </Card>
      </Col>
      <Col xs="4">
        <p className={classes.labelName}>{name}</p>
        <p>{description}</p>
      </Col>
      <Col xs="2" className={classes.labelName}>
        <p>₹: {price}</p>
      </Col>
      <Col className={classes.labelName}>
        <p>Ordered On: <Moment className={classes.date} format="D MMM YYYY"date={createdAt} /> </p>
        <p>Delivery Expected: <Moment 
          className={classes.date}
          format="D MMM YYYY"
          add={{days:5}}
          date={createdAt} 
          filter={toUpperCaseFilter}/></p>
      </Col>
    </Row>
  );
};

export default Orders;
