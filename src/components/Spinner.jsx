import React from "react";
import '../assets/css/Spinner.css'

const Spinner = () => {

    return(
        <div className="lds-hourglass">
            <div></div>
            <div></div>
        </div>
    );
}

export default Spinner;