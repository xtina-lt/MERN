import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Find = props => {
    /*************
     * VARIABLES *
     *************/
    // intiate blank state for data
    const [data, setData] = useState([])
    // initiate variables method from props
    const {setLink, setSubtitle} = props

    /**************************
     *         LOGIC          *
     **************************/
    // change header using data info
    setLink({href:'/animal/new', title:'Create'})
    setSubtitle("These pets are looking for a good home...")

    // get request with useEffect
    useEffect( ()=>{
        axios.get('http://localhost:8000/api/animals/')
            .then( e=> setData(e.data) )
            .catch( e=> console.log(e) )
    },[] )

    /***********************
     *    USER INTERFACE   *
     **********************/
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Species
                        </th>
                        <th>
                            Options
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map((e,i) => 
                        <tr key={i}>
                        <td>
                            <h3>{e.name}</h3>
                        </td>
                        <td>
                            {e.species}
                        </td>
                        <td>
                            <span className='accent'>
                                <a href={`/animal/${e._id }`}>
                                View
                                </a>
                            </span>
                            | 
                            <span className='accent'>
                                <a href={`/animal/${e._id }/update`}>
                                Update
                                </a>
                            </span>
                        </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default Find