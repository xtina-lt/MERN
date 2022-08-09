import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Create = (props) => {
    /*************
     * VARIABLES *
     *************/
    const[name, setName] = useState('')
    const[species, setSpecies] = useState('')
    const[description, setDescription] = useState('')
    const[skills, setSkills] = useState([])
    const[createdAt, setCreatedAt] = useState(Date())
    const[updatedAt, setUpdatedAt] = useState(Date())
    // messages for errors
    const[errors, setErrors] = useState({})
    // navigation
    const navigate = useNavigate()
    // initialize setheader function from props state
    const {setSubtitle} = props

    /**************************
     *         LOGIC          *
     **************************/
    // change header using data info
    setSubtitle("Know a pet needing a home?")
    
    // update, reset random inputs, change success, navigate away
    const handleSubmit = e => {
        // prevent default
        e.preventDefault();
        // post request
        axios.post('http://localhost:8000/api/animals/',
            {name, species, description, skills, createdAt, updatedAt}
        )
            .then( e => navigate('/') )
            .catch( e => {setErrors(e.response.data.errors)
            console.log(e.response.data.errors)} )
    }

    /***********************
     *    USER INTERFACE   *
     **********************/
    return(
        <>
            <div className='minWidth'>
                <form>
                    <label>
                        Name:
                        <br/>
                        {errors.name && <span className='accent'>{errors.name.message}</span>}
                        <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
                    </label>
                    <label>
                        Species:
                        <br/>
                        {errors.species && <span className='accent'>{errors.species.message}</span>}
                        <input type="text" value={species} onChange={e=>setSpecies(e.target.value)}/>
                    </label>
                    <label>
                        Description:
                        <br/>
                        {errors.description && <span className='accent'>{errors.description.message}</span>}
                        <input type="text" value={description} onChange={e=>setDescription(e.target.value)}/>
                    </label>
                    <label>
                        skills:
                        <br/>
                        {errors.skills && <span className='accent'>{errors.skills.message}</span>}
                        <input type="text" value={skills} onChange={e=>setSkills(e.target.value.split(","))}/>
                    </label>
                    <button onClick={handleSubmit}>
                        🐰 Add Pet
                    </button>
                </form>
            </div>
        </>
    )
}

export default Create