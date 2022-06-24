import React from 'react';
import { useParams } from "react-router"; 

const Location = props => {
    // GET VALUES FROM PARMS
    const { city, num } = useParams();
    // chnange header
    const { setHeader } = props;
    setHeader(city.toUpperCase())
    // EVALUATE PARAM (CITY * N)
    const arr = [];
    for (let i = 0; i < num; i++) { arr.push(city) }
    return (
        <>
            {/* READ EVALUATION FROM ARR as div*/}
            {arr.map((e, i) =>
                <div key={i}>
                    4th of July bash in <span className="accent"> {e} </span>!
                </div>
            )}
        </>
    )
}

export default Location