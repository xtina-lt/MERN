import React from 'react'

const Home = props => {
    const { setHeader } = props;
    setHeader("Fun with Routing");
    return (
        <div>
            <h2>
                Home Sweet Home
            </h2>
            <img src="https://c.tenor.com/Iqb45zQ3LBMAAAAM/dog-study.gif" alt="happy 4th" />

        </div>

    );
}

export default Home