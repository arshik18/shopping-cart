import React, {Fragment } from "react";
import Carousels from "../../components/common/Carousels";
import CardsComponent from "../../containers/Cards";
import { Container } from "react-bootstrap";
import classes from "./index.module.css";

const Home = (props) => {

  return (
    <Fragment >
      <Carousels />
      <Container fluid className={classes.homeContainer}>
        <CardsComponent />
      </Container>
    </Fragment>
  );
};

export default Home;
