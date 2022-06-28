import React, {useState} from 'react'
import axios from 'axios'

const CreateForm = (props) => {
    const {setHeader} = props;
    setHeader('Animal');

    const faker = require('faker')
    const[_id, setId] = useState(faker.datatype.uuid())
    const[name, setName] = useState(faker.name.firstName());
    const[species, setSpecies] = useState(faker.animal.type());
    const[age, setAge] = useState(faker.datatype.number(20));
    const[interests, setInterests] = useState(['sleep, eat'])
    const[createdAt, setCreatedAt] = useState(Date())
    const[success, setSuccess] = useState(false)
    
    const handleSubmit = e => {
        // prevent default
        e.preventDefault();
        // post request
        axios.post('http://localhost:8000/animals/create',
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
    }
    return(
        <>
            <div className='minWidth'>
                <h2>
                    Create Animal
                </h2>
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
                        <input type="text" value={interests} onChange={e=>setInterests(e.target.value)}/>
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