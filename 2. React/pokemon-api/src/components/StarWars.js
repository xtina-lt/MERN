import React, {useState, useEffect} from 'react'
import Header from './Header';

const StarWars = props => {
    const {header, setHeader} = props;
    setHeader("Star Wars");
    const [state, setState] = useState([]);
    
    useEffect(()=> {
        fetch('https://swapi.dev/api/planets')
            .then(e=>{ return e.json() })
            .then((e)=> { 
                console.log(e.results);
                setState(e.results); 
            })
    }, []);
    return(
        <>
            {state.map((e,i)=>
                <div key={i}>
                    <h2>
                        {e.name}
                    </h2>
                    <ul>
                        <li>
                            <h3>
                                Climate:
                            </h3>
                                {e.climate}
                        </li>
                        <li>
                            <h3>
                                Gravity: 
                            </h3>
                                {e.gravity}
                        </li>
                        <li>
                            <h3>
                                Terrain: 
                            </h3>
                                {e.terrain}
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}

export default StarWars