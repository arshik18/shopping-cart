import React from "react";
import {Card,Button,Row,Col} from 'react-bootstrap';
import classes from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShoppingCart,
    faHeart,
    faShoppingBag
  } from "@fortawesome/free-solid-svg-icons";

const Cards = (props) => {

    const {image, description, name, price} = props;
    return ( 
      <Card className={classes.cards}>
        <FontAwesomeIcon 
          icon={faHeart} 
          className={classes.cardsHeartIcon}/>
        <Card.Img 
          className={classes.cardsImages} 
          variant="top" 
          src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Price: Rs {price}</Card.Text>
          <Row>
              <Col sm={5}>
                <Button 
                  onClick = {props.addToCart}
                  variant="warning">
                    <FontAwesomeIcon 
                      icon={faShoppingCart} />&nbsp;Add 
                  </Button>
                </Col>
              <Col sm={4}>
                <Button 
                  className={classes.cardsButton}>
                    <FontAwesomeIcon 
                      icon={faShoppingBag} />&nbsp;Buy 
                </Button>
              </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }

export default Cards;
