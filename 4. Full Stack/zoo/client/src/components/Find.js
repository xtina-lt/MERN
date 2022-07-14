import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Find = props => {
    /*************
     * VARIABLES *
     *************/
    // intiate blank state for data
    const [data, setData] = useState([])
    // initiate setHeader method from props
    const {setHeader} = props

    /**************************
     *         LOGIC          *
     **************************/
    // change header using data info
    setHeader("Animals")

    // get request with useEffect
    useEffect( ()=>{
        axios.get('http://localhost:8000/api/animals/find')
            .then( e=> setData(e.data) )
            .catch( e=> console.log(e) )
    },[] )

    /***********************
     *    USER INTERFACE   *
     **********************/
    return(
        <div>
            <h2>
                All Our Animals!
            </h2>
            <table>
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Species
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Interests
                        </th>
                        <th>
                            Last Change
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map((e,i) => 
                        <tr key={i}>
                        <td>
                            {e._id}
                        </td>
                        <td>
                            <a href={"/animal/" + e._id }>
                                {e.name}
                            </a>
                        </td>
                        <td>
                            {e.species}
                        </td>
                        <td>
                            {e.age}
                        </td>
                        <td>
                            {e.interests.join(', ')}
                        </td>
                        <td>
                            {/* if no update is avail-return createdAt, if created at is the same as updated at-return createdAt, else updatedat is different than created at-return updatedAt */}
                            {(e.createdAt && !e.updatedAt) ? e.createdAt : (e.createdAt == e.updatedAt) ? e.createdAt : e.updatedAt}
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