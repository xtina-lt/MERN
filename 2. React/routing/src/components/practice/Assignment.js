import React from 'react';
import { useParams } from "react-router"; 

const Assignment = props => {
    // header
    const { setHeader } = props;
    setHeader("Let's Play");
    // GET VALUES FROM PARAMETER
    const { x, color } = useParams();
    // EVALUATE OUTPUT
    const output = (isNaN(x)) ? [x.toUpperCase(), '(isNaN === true)', 'Thus, is a WORD'] : [x, 'isNaN === false', 'Thus, is a NUMBER'];

    return (
        // change color from param
        <div style={{ color: color }} >
            <ul>
                {/* show evaluation from param */}
                {output.map((e,i) => <li key={i}>{e}</li>)}
            </ul>
        </div>
    )
}

export default Assignment