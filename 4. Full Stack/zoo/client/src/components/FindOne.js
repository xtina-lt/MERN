// use effect for reuests,state for real-time variables
import React, {useEffect, useState} from 'react'
// use for requests to db
import axios from 'axios'
// get parameter
import {useParams} from "react-router-dom"

const FindOne = props => {
    /*************
     * VARIABLES *
     *************/
    // initalize id from param variable
    const {id} = useParams();
    // initialize state as empty object for data
    const [data, setData] = useState({})
    // initialize setheader function from props state
    const {setHeader} = props

    /**************************
     *         LOGIC          *
     **************************/
    // change header using data info
    setHeader(data.name)

    // get data from api
    useEffect( ()=>{
        axios.get(`http://localhost:8000/api/animal/${id}`)
            .then( e => setData(e.data) )
            .catch( e => console.log(e) )
    },[] )

    /***********************
     *    USER INTERFACE   *
     **********************/
    return(
            <div>
                <h2>
                    Find your friend!
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
                                Changed
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            {data._id}
                        </td>
                        <td>
                            {data.name}
                        </td>
                        <td>
                            {data.species}
                        </td>
                        <td>
                            {data.age}
                        </td>
                        <td>
                            {data.interests}
                        </td>
                        <td>
                            {/* if no update is avail-return createdAt, if created at is the same as updated at-return createdAt, else updatedat is different than created at-return updatedAt */}
                            {(data.createdAt && !data.updatedAt) ? data.createdAt : (data.createdAt == data.updatedAt) ? data.createdAt : data.updatedAt}
                        </td>
                    </tr>
                    </tbody>
                </table>
                <br/>
                <a href={`/animal/${data._id}/update`}>
                    <button>
                        Update
                    </button>
                </a>
            </div>
    )
}

export default FindOne