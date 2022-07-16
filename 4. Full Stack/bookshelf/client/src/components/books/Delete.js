import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Delete = props => {
    const navigate = useNavigate()
    const {id, list, setList} = props

    const removeFromDom = id => {
        axios.delete(`http://localhost:8000/api/book/${id}`)
            .then( res => {
                setList(list.filter(e => e._id != id))
            })
            .catch( e => console.log(e) )
    }

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/book/${id}`)
            .then(res => {
                removeFromDom(id);
                navigate('/books')
            } )
            .catch( res => console.log(res) )
    }
    return(
        <button onClick={handleDelete}>
            Delete
        </button>
    )
}

export default Delete