import React from 'react'

const Catchall = props => {
    const { setHeader } = props;
    setHeader("Oops");

    return (
        <div>
            <h2>
                Page not found!
            </h2>
            <h3>
                Keep reading..
            </h3>
            <span className='emoji'>📖</span>
        </div>
    );
}

export default Catchall