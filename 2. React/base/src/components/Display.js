import React, {useState} from 'react'

const Display = props => {
    const {output,setOutput} = props;
    console.log("I am in display props:", props);
    
    return(
        <div>
            {props.output}
        </div>
    )
}

export default Display