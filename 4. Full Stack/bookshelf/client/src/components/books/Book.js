import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import BooksForm from './Form'
import Delete from './Delete'

const Book = props => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [data, setData] = useState({})
    const [status, setStatus] = useState(false)

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/book/${id}`)
            .then( e => {
                setData(e.data);
                setStatus(true);
            })
            .catch( e => console.log(e) )
    },[])

    const updateOne = (e, obj) => {
        e.preventDefault()
        console.log('update obj')
        console.log('obj' + obj.title)
        axios.put(`http://localhost:8000/api/book/${id}`, obj)
            .then( res => {
                setData(res.data)
                setStatus(true);
                navigate('/books')
            } )
            .catch( res => console.log(res) )
    }

    return(
        <>
            <div>
                <h2>{data.title}</h2>
                <img src={data.url}/>
                <br/>
                <span className='accent'>Author: </span> {data.author}
                <br/>
                <span className='accent'>Pages: </span> {data.pages}
                <br/>
                <span className='accent'>Genre: </span> {data.genre}
                <br/>
                <span className='accent'>Read: </span> {(data.read) ? "All Done" : "Still Working!"}
                <br/>
                <span className='accent'>Created At: </span> {data.createdAt}
                <br/>
                <span className='accent'>Updated At: </span> {data.updatedAt}
                <Delete id={id}/>
            </div>
            {
                status && <BooksForm onSubmitProp={updateOne} data={data}/>
            }
        </>
    )
}

export default Book
