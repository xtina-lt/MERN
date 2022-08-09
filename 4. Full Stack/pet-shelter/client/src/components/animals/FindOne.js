// use effect for reuests,state for real-time variables
import React, {useEffect, useState} from 'react'
// use for requests to db
import axios from 'axios'
// navigate once form is sumbitted, get parameter
import {useNavigate, useParams} from "react-router-dom"

const FindOne = props => {
    /*************
     * VARIABLES *
     *************/
    // initalize id from param variable
    const {id} = useParams();
    // initialize state as empty object for data
    const [data, setData] = useState({})
    // initialize setheader function from props state
    const {setSubtitle} = props
    // use navigate
    const navigate = useNavigate();

    /**************************
     *         LOGIC          *
     **************************/
    // change subtitle usin data
    setSubtitle("Details about: " + data.name)

    // get data from api
    useEffect( ()=>{
        axios.get(`http://localhost:8000/api/animal/${id}`)
            .then( e => setData(e.data) )
            .catch( e => console.log(e) )
    },[] )

    // delete function
    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/animal/${id}`)
            .then( e => navigate('/') )
            .catch( e => console.log(e) )
    }

    /***********************
     *    USER INTERFACE   *
     **********************/
    return(
            <div>
                <button onClick={handleDelete}>
                    🏠Adopt
                </button>
                <h2>
                    Type:
                </h2>
                    {data.species}
                <br/>
                <h2>
                    Description
                </h2>
                    {data.description}
                <br/>
                <h2>
                    Skills
                </h2>
                    {data.skills}
            </div>
    )
}

export default FindOne