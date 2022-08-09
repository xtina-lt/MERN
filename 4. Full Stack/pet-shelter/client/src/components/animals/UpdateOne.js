// use effect for reuests,state for real-time variables
import React, {useEffect, useState} from 'react'
// use for requests to db
import axios from 'axios'
// navigate once form is sumbitted, get parameter
import {useNavigate, useParams} from "react-router-dom"

const UpdateOne = props => {
    /*************
     * VARIABLES *
     *************/
    // initialize state as empty object for data
    let [data, setData] = useState({})
    // get errors
    const [errors, setErrors] = useState({})
    // get id from param 
    const {id} = useParams();
    // use navigate
    const navigate = useNavigate();
    // initialize function from props state
    const {setSubtitle} = props

    /**************************
     *         LOGIC          *
     **************************/
    // change variable using data info
    setSubtitle('Edit: ' + data.name)

    // get data from api
    useEffect( ()=>{
        axios.get(`http://localhost:8000/api/animal/${id}`)
            .then( e => setData( e.data ) )
            .catch( e => console.log(e) )
    },[] )


    // submit form, update data
    const handleSubmit = e => {
        // prevent default
        e.preventDefault();
        // update and navigate back to object's page
        axios.put( `http://localhost:8000/api/animal/${id}/`, {data} )
            .then( e => navigate(`/animal/${id}`) )
            .catch( e => setErrors(e.response.data.errors) )
    }

    /***********************
     *    USER INTERFACE   *
     **********************/
    return(
        <>
            <div className='minWidth'>
                <h2>
                    Update
                </h2>
                <form>
                    <label>
                        Name:
                        <br/>
                        {errors.name && <span className='accent'>{errors.name.message}</span>}
                        <input type="text" value={data.name} onChange={ e => setData({...data, name:e.target.value}) }/>
                    </label>
                    <label>
                        Species:
                        <br/>
                        {errors.species && <span className='accent'>{errors.species.message}</span>}
                        <input type="text" value={data.species} onChange={ e => setData({...data, species:e.target.value}) }/>
                    </label>
                    <label>
                        Description:
                        <br/>
                        {errors.description && <span className='accent'>{errors.description.message}</span>}
                        <input type="text" value={data.description} onChange={ e => setData({...data, description:e.target.value}) }/>
                    </label>
                    <label>
                        Skills:
                        <br/>
                        {errors.skills && <span className='accent'>{errors.skills.message}</span>}
                        <input type="text" value={data.skills} onChange={ e => setData({...data, skills: e.target.value.split(",")}) }/>
                    </label>
                    <button onClick={handleSubmit}>
                        ✒️Edit Pet
                    </button>
                </form>
            </div>

        </>
    )
}

export default UpdateOne