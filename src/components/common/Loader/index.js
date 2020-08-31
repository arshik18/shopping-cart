import React,{useState} from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './index.module.css';
import classes from './index.module.css';

 const LoaderSpinner = () =>{
     const [loading,setLoading] = useState(false);
    return(
    [ 
        loading ? <Loader className={classes.loader}
            type="Bars"
            color="#00BFFF"
            height={100}
            width={100}
         />: null,
         ()=>setLoading(true),
         ()=>setLoading(false)

    ])
        
       
 }
 
 export default LoaderSpinner;