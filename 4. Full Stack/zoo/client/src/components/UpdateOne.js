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
    // get id from param 
    // {/animal/:id/update}
    const {id} = useParams();
    // use navigate
    const navigate = useNavigate();
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
            .then( e => setData( e.data ) )
            .catch( e => console.log(e) )
    },[] )

    // delete function
    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/animal/${id}`)
            .then( e => navigate('/animals') )
            .catch( e => console.log(e) )
    }

    // submit form, update data
    const handleSubmit = e => {
        // prevent default
        e.preventDefault();
        // update and navigate back to object's page
        axios.put( `http://localhost:8000/api/animal/${id}`, {data} )
            .then( e => navigate(`/animal/${id}`) )
            .catch( e =>console.log(e) )
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
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={data.name} onChange={ (e)=> setData({...data, name:e.target.value}) }/>
                    </label>
                    <label>
                        Species:
                        <input type="text" value={data.species} onChange={ (e)=> setData({...data, species:e.target.value}) }/>
                    </label>
                    <label>
                        Age:
                        <input type="number" value={data.age} onChange={ (e)=> setData({...data, age:e.target.value}) }/>
                    </label>
                    <label>
                        Interests:
                        <input type="text" value={data.interests} onChange={ (e)=> setData( {...data, interests:e.target.value.split(',')} ) }/>
                    </label>
                    <input type="submit"/>
                </form>
            </div>

            <div>
                <h3>
                    Inputs:
                </h3>
                {data._id}
                <br/>
                {data.name}
                <br/>
                {data.species}
                <br/>
                {data.interests}
                <button onClick={handleDelete}>
                    Delete
                </button>
            </div>

        </>
    )
}

export default UpdateOne