import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Getter = () => {
    // before cprs
    const [state, setState] = useState('...Loading')
    useEffect( ()=> {
        axios.get("http://localhost:8000/getme")
            .then(e=>setState(e.data.key))
            .catch(e=>console.log(e))
    }, [])
    return (
        <div>
            <h2>
                State From Backend: {state}
            </h2>
        </div>
    )
}

export default Getter