import React from 'react';
import Home from './containers/Home';
import './App.css';
import {Route} from 'react-router-dom';
import TopNavbarContainer from './components/TopNavbar'
import ViewCartContainer from './containers/ViewCart';
import OrdersContainer from './containers/Orders';
import Toast from './components/common/Toast';

function App() {
  return (
    <React.Fragment>
    <TopNavbarContainer/>
    <Route path="/" exact component ={Home}/>
    <Route path="/view-cart" exact component ={ViewCartContainer}/>
    <Route path="/orders" exact component ={OrdersContainer}/>
    <Toast/>
    </React.Fragment>
  );
}

export default App;
