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
    
    //this function will render cards
    const renderCard =() =>{
      return(
        <Card className={classes.cards}>
        <Card.Img 
          className={classes.cardsImages} 
          variant="top" 
          src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Price: Rs {price}</Card.Text>
          <Row>
              <Col xs={6}>
                <Button 
                  onClick = {props.addToCart}
                  variant="warning">
                    <FontAwesomeIcon 
                      icon={faShoppingCart} />&nbsp;Add 
                  </Button>
                </Col>
              <Col xs={6}>
                <Button 
                  className={classes.cardsButton}>
                    <FontAwesomeIcon 
                      icon={faShoppingBag} />&nbsp;Buy 
                </Button>
              </Col>
          </Row>
        </Card.Body>
      </Card>
      )
    }
    return ( 
      renderCard()
    );
  }

export default Cards;
