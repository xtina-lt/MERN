import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CreateForm = (props) => {
    /*************
     * VARIABLES *
     *************/
    // faker id
    const faker = require('faker')
    const[_id, setId] = useState(faker.datatype.uuid())
    // other object variables
    const[name, setName] = useState(faker.name.firstName())
    const[species, setSpecies] = useState(faker.animal.type())
    const[age, setAge] = useState(faker.datatype.number(20))
    const[interests, setInterests] = useState(['sleep, eat'])
    const[createdAt, setCreatedAt] = useState(Date())
    // success
    const[success, setSuccess] = useState(false)
    // navigation
    const navigate = useNavigate()
    // initialize setheader function from props state
    const {setHeader} = props

    /**************************
     *         LOGIC          *
     **************************/
    // change header using data info
    setHeader("Create")
    
    // update, reset random inputs, change success, navigate away
    const handleSubmit = e => {
        // prevent default
        e.preventDefault();
        // post request
        axios.post('http://localhost:8000/api/animal/create',
            {_id, name, species, age, interests, createdAt}
        )
            .then( e =>console.log(e.data) )
            .catch( e =>console.log(e) )
        // reset
        setId(faker.datatype.uuid())
        setName(faker.name.firstName())
        setSpecies(faker.animal.type())
        setAge(faker.datatype.number(20))
        setInterests(['sleep, eat'])
        setCreatedAt(Date())
        setSuccess(true)
        navigate('/animals')
    }

    /***********************
     *    USER INTERFACE   *
     **********************/
    return(
        <>
            <div className='minWidth'>
                {/* show success */}
                {success && "Animalistic Success!"}
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
                    </label>
                    <label>
                        Species:
                        <input type="text" value={species} onChange={e=>setSpecies(e.target.value)}/>
                    </label>
                    <label>
                        Age:
                        <input type="number" value={age} onChange={e=>setAge(e.target.value)}/>
                    </label>
                    <label>
                        Interests:
                        <input type="text" value={interests} onChange={e=>setInterests(e.target.value.split(","))}/>
                    </label>
                    <input type="submit"/>
                </form>
            </div>
            <div>
                <h3>
                    Inputs:
                </h3>
                {name}
                <br/>
                {species}
                <br/>
                {interests}
                <br/>
                {createdAt}
            </div>
        </>
    )
}

export default CreateForm