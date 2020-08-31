import React, { useState } from "react";
import classes from "./index.module.css";
import {
  Navbar,
  NavDropdown,
  InputGroup,
  Badge,
  Nav,
  FormControl,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faTimes,
  faShoppingCart,
  faHeart,
  faUser,
  faSignOutAlt,
  faClipboardList,
 
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actionTypes from "../../store/action";
import { getProductsListService } from "../../services/products.service";
import * as endpoints from "../../services/endpoints";
const TopNavbar = (props) => {

  const [searchValue, setSearchValue] = useState("");
  const [searchClicked,setSearchClicked] = useState(false);
  const { counter, setSearchList } = props;

  const changeHandler = (event) => {
    setSearchValue(event.target.value);
  };
  const searchClickHandler = () => {
    getProductsListService(endpoints.products, { search: searchValue }).then(
      (resp) => {
        setSearchList(resp.data, searchValue);
        setSearchValue("");
        setSearchClicked(!searchClicked);
      }
    );
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>E-Cart</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Form inline>
            <InputGroup>
              <FormControl
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
                type="text"
                value={searchValue}
                onChange={changeHandler}
              />
              <InputGroup.Prepend onClick={searchClickHandler}>
                <InputGroup.Text id="basic-addon1" className={classes.search}>
                  {searchClicked ? <FontAwesomeIcon  icon= {faTimes} /> : <FontAwesomeIcon  icon= {faSearch} /> }
                </InputGroup.Text>
              </InputGroup.Prepend>
            </InputGroup>
          </Form>
        </Nav>
        <Nav>
          <NavDropdown title="Arshi" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              <FontAwesomeIcon icon={faUser} />
              &nbsp; My Profile
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item >
              <Link to ="/orders"><FontAwesomeIcon icon={faClipboardList} />
              &nbsp; Orders</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">
              <FontAwesomeIcon icon={faUser} />
              &nbsp; Wish List
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              <FontAwesomeIcon icon={faSignOutAlt} />
              &nbsp; Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">
            <FontAwesomeIcon icon={faHeart} />
          </Nav.Link>
          <Nav.Link eventKey={2}>
            <Link to="/view-cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              <Badge pill variant="light" className={classes.badge}>
                {counter}
              </Badge>
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.cartCounter,
    searchList: state.searchList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setSearchList: (list, searchValue) =>
      dispatch({
        type: actionTypes.SEARCH_LIST,
        list: list,
        searchValue: searchValue,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNavbar);
