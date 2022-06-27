import React from "react";
import Spinner from "./Spinner";

const Card = ({loadingData, showData, weather, forecast}) => {

    if(loadingData){
        return <Spinner />
    }
   
    return(

);
}
export default Card;