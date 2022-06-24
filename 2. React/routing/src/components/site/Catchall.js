import React from 'react'

const Catchall = props => {
    const { setHeader } = props;
    setHeader("Oops");

    return (
        <div>
            <h2>
                ....Here's some dessert
            </h2>
            <h2>
                while you wait!
            </h2>
            <img src="https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2021/05/Red-white-and-blue-jello-shots-hero-18-500x500.jpg" alt="red white blue jello" />
        </div>
    );
}

export default Catchall