import React, {useEffect} from 'react'

const PokemonAPI = props => {
    // ********** //
    // * header * //
    // ********** //
    const {setHeader} = props;
    setHeader("Pokemon API");

    // ********** //
    // * program * //
    // ********** //
    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(e=>{return e.json()})
        .then(e=>{console.log(e.results)})
    },[])


    return(
        <>
        </>
    )
}

export default PokemonAPI;