import React, {useEffect, useState} from 'react'
import axios from 'axios'
import BookForm from './Form'
import Delete from './Delete'

const Books = props => {
    /*************
     * VARIABLES *
     *************/
    const [list, setList] = useState([])

    /**************************
     *         LOGIC          *
     **************************/
    useEffect( () => {
        axios.get('http://localhost:8000/api/books')
            .then( e => setList(e.data) )
            .catch( e => console.log(e) )
    }, [] )

    const createObj = (e, obj) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/book`, obj)
            .then( res => setList([...list, res.data]) )
            .catch( res => console.log("error:" + res) )
    }

    /***********************
     *    USER INTERFACE   *
     **********************/
    return(
        <>
        <BookForm onSubmitProp={createObj} data={{}}/>

        <div className='container'>
        {list.map((e,i)=>
            <div key={i} className='book'>
                <h2>
                    {e.title}
                </h2>
                <img src={e.url}/>
                <span className='accent'>Author: </span> {e.author}
                <br/>
                <span className='accent'>Pages: </span> {e.pages}
                <br/>
                <span className='accent'>Genre: </span> {e.genre}
                <br/>
                <span className='accent'>Read: </span>
                {(e.read) ? "All Done" : "Still Working!"}
                <br/>
                <span className='accent'>Changed: </span>
                {
                    (e.createdAt === e.updatedAt) ? e.createdAt : e.updatedAt
                }
                <br/>
                <a href={`/book/${e._id}`}>
                    <button>
                        Edit
                    </button>
                </a>
                <Delete id={e._id} list={list} setList={setList}/>
                {/* <button onClick={removeFromDom(e._id)}>
                    Delete
                </button> */}
            </div>
        )}
        </div>
        </>
    )
}

export default Books