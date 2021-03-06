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
//import ReactTooltip from 'react-tooltip';

const TopNavbar = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
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

  const renderTopNav = () => {
    return (
      <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand data-tip="Home Page">E-Cart</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Form inline>
              <InputGroup data-tip="Search">
                <FormControl
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                  type="text"
                  value={searchValue}
                  onChange={changeHandler}
                />
                <InputGroup.Prepend  onClick={searchClickHandler}>
                  <InputGroup.Text id="basic-addon1" className={classes.search}>
                    {searchClicked ? (
                      <FontAwesomeIcon icon={faTimes} />
                    ) : (
                      <FontAwesomeIcon icon={faSearch} />
                    )}
                  </InputGroup.Text>
                </InputGroup.Prepend>
              </InputGroup>
            </Form>
          </Nav>
          <Nav data-tip="Profile">
            <NavDropdown title="Arshi" id="collasible-nav-dropdown">
              <NavDropdown.Item >
                <FontAwesomeIcon icon={faUser} />
                &nbsp; My Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/orders">
                  <FontAwesomeIcon icon={faClipboardList} />
                  &nbsp; Orders
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                <FontAwesomeIcon icon={faUser} />
                &nbsp; Wish List
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                <FontAwesomeIcon icon={faSignOutAlt} />
                &nbsp; Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link >
              <FontAwesomeIcon icon={faHeart} />
            </Nav.Link>
            <Nav.Link eventKey={2} data-tip="Cart">
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
      
    </React.Fragment>
    );
  };
  return renderTopNav();
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
