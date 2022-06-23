import React, {useState, useEffect} from 'react'

const PokemonAPI = props => {
    // ********** //
    // * header * //
    // ********** //
    const {setHeader} = props;
    setHeader("Pokemon API");

    // *********** //
    // * program * //
    // *********** //
    const [state, setState] = useState([])
    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(e=>{return e.json()})
        .then(e=>setState(e.results))
    },[])


    return(
        <>
            {state.map((e,i)=>
                <div key={i}>
                    {e.name}
                </div>
            )}
        </>
    )
}

export default PokemonAPI;