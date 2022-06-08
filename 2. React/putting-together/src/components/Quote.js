import React from 'react';

const Quote = (props) => {
    return (
        <div>
            {/* <h2>
                XTINA.CODES
            </h2>
            <ul>
                <li>
                    Coding experience: 1 year.
                </li>
                <li>
                    Currently: conquering world.
                </li>
                <li>
                    <img src="https://i.pinimg.com/564x/fb/43/d0/fb43d01060509d93eda18e4b3b65c1e8.jpg" alt="inspirational"></img>
                </li>
            </ul> */}
            <h1>
                { props.title }
            </h1>
            <h2>
                "{ props.desc }!"
            </h2>
            <img src={ props.img } alt="quote"/>
        </div>
    );
}

export default Quote;