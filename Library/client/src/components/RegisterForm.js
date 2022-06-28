import React, {useState} from 'react'
import axios from 'axios'

const RegisterForm = () => {
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [createdAt ] = useState(Date())
    const [updatedAt ] = useState(Date())

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/register', {
            first,   
            last,
            email,
            password,
            createdAt,
            updatedAt      
        })
            .then(res=>{
                console.log(res); 
                console.log(res.data);
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type='text' onChange={e=>setFirst(e.target.value)}/>
                </label>
                <label>
                    Last Name:
                    <input type='text' onChange={e=>setLast(e.target.value)}/>
                </label>
                <label>
                    Email:
                    <input type='text' onChange={e=>setEmail(e.target.value)}/>
                </label>
                <label>
                    Password:
                    <input type='text' onChange={e=>setPassword(e.target.value)}/>
                </label>
                <input type='submit' value='register'/>
            </form>
        </div>
    )
}

export default RegisterForm