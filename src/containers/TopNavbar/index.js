import React, { useState } from 'react';
import TopNavbar from '../../components/TopNavbar';
import {getProductsListService} from '../../services/products.service';

const TopNavbarContainer = () =>{

    const searchClickHandler = () =>{
        console.log("hi");
        getProductsListService.then(resp=>{
            console.log("seacrh",resp);
        })

    }
    return(
        <TopNavbar 
        searchClickHandler={searchClickHandler}   
        />
    )
}

const setStateToProps = (state) =>{
    return{
        searchKey : state.searchKey
    }
}

export default TopNavbarContainer;
