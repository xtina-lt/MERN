import React from 'react'

const Catchall = props => {
    const { setHeader } = props;
    setHeader("Oops");

    return (
        <div>
            <h2>
                See No Page!
            </h2>
            <h3>
                ..try again
            </h3>
            <span className='emoji'>
                🙈
            </span>
        </div>
    );
}

export default Catchall