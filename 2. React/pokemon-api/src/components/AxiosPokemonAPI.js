import React, {useState, useEffect} from 'react'
import axios from 'axios'

const AxiosPokemonAPI = props => {
    // ********** //
    // * header * //
    // ********** //
    const {setHeader} = props;
    setHeader("Axios Pokemon API");

    // *********** //
    // * program * //
    // *********** //
    const [state, setState] = useState([])
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(e=>setState(e.data.results))
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

export default AxiosPokemonAPI;