// use effect for reuests,state for real-time variables
import React, {useEffect, useState} from 'react'
// use for requests to db
import axios from 'axios'
// get parameter
import {useParams} from "react-router-dom"

const FindOne = props => {
    // initialize state as empty object for data
    const [data, setData] = useState({})
    // get id from param
    const {id} = useParams();
    // change header using data info
    const {setHeader} = props
    setHeader(data.name)

    // get data from api
    useEffect( ()=>{
        axios.get('http://localhost:8000/api/animal/find/' + id)
            .then( e => setData(e.data) )
            .catch( e => console.log(e) )
    },[] )

    // show data
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
                            createdAt
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
                        {data.createdAt}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default FindOne