import React from 'react'

const Coin = props => {
    // header
    const {header, setHeader} = props;
    setHeader("Coin Log");

    // PROGRAM
    // generate random coin
    const getCoin = () => { return (Math.random() > 0.5) ? "heads" : "tails"; }
    // promise
    const play = () => {
        return new Promise((resolve, reject) => {
            // logic
            let heads = 0;
            let count = 0;
            let max = 5;
            while (heads < 5) {
                let result = getCoin()
                console.log(`${result} was flipped`)
                if (result === "heads") heads++;
                count++
            }
            console.log(`It took ${count} tries to get 5 heads!`);
            // resolve reject
            (count < max) ? resolve('just in time') : reject('maxed out');
        })
    }
    // invoke
    play()
    .then(e => console.log(e))
    .catch(e => console.log(e))
    return(
        <>
        Coining
        </>
    )
}

export default Coin