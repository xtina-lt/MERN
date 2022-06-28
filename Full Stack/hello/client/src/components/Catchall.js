import React from 'react'

const Catchall = props => {
    const { setHeader } = props;
    setHeader("Oops");

    return (
        <div>
            <h2>
                ....Here's a cupcake while you wait
            </h2>
            <h2>
                while you wait!
            </h2>
            <span className='emoji'>🧁</span>
        </div>
    );
}

export default Catchall