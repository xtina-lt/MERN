import React from 'react'

const Home = props => {
    const { setHeader } = props;
    setHeader("Fun with Routing");
    return (
        <div>
            <h2>
                Home Sweet Home
            </h2>
            <img src="https://www.funimada.com/assets/images/cards/big/4-july-8.gif" alt="happy 4th" />

        </div>

    );
}

export default Home