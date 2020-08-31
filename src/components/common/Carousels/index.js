import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import shoes from '../../../assets/images/shoes.jpg';
import bags from '../../../assets/images/bags.jpg';
import mobile from '../../../assets/images/mobile.jpg';
import classes from "./index.module.css";
import Container from 'react-bootstrap/Container'

const Carousels = (props) => {
  
    return (
      <Container fluid className={classes.container}>
      <Carousel>
        <Carousel.Item className={classes.containerItem} interval={1000}>
          <img 
            className="d-block w-100"
            src={shoes}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>30% Off on Shoes</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={classes.containerItem} interval={500}>
          <img
            className="d-block w-100"
            src={bags}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Flat 50% off on Bags</h3>
            <p>Baggit, Butterfly and many more..</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={classes.containerItem}>
          <img
            className="d-block w-100"
            src={mobile}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Buy Phone and get Netflix subscription free</h3>
            <p>
              Redmi Note 9 Pro, Honor 20i and more
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Container>
    );
  }

export default Carousels;
