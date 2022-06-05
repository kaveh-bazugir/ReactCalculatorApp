import React, { useState } from "react";

const CalDisplay = () => {

    const [counter, setCounter] = useState(0);

    const Increament = () => {
        setCounter( counter + 1 );
    }

    const Decreament = () => {
       if(counter > 0) setCounter( counter -1 );
    }

    return (
        <>
            <p>{counter}</p>
            <button onClick={Increament}> Increament </button>&nbsp;
            <button onClick={Decreament}> Decreament </button>
            <br />
            <br />
        </>
    )
};


export default CalDisplay;
