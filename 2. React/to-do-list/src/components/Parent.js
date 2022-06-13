import React from 'react'

const Parent = (props) => {
    return (
        <div>
            <h2>
                {props.title}
            </h2>
            <ul>
                <li>
                    <h3>
                        My Children:
                    </h3>
                </li>
                {props.children.map(e=><li>{e}</li>)}
            </ul>
        </div>
    );
    
}

export default Parent;