import React, {useState} from 'react'
import axios from 'axios'

const BookForm = props => {
    const {onSubmitProp, data} = props
    console.log(data)

    // VARIABLES
    // title : String,
    // author : String,
    // pages : Number,
    // genre : String,
    // createdAt : Date,
    // updateAt : Date
    const[title, setTitle] = useState(data.title)
    const[author, setAuthor] = useState(data.author)
    const[pages, setPages] = useState(data.pages)
    const[genre, setGenre] = useState(data.genre)
    const[read, setRead] = useState(false)
    const[url, setUrl] = useState(data.url)
    const[createdAt, setCreatedAt] = useState(data.createdAt)
    const[updateAt, setUpdateAt] = useState(Date())

    // // LOGIC
    const handleSubmit = e => {      
        e.preventDefault()
        console.log(read)
        onSubmitProp(e, {title, author, pages, genre, read, url, createdAt, updateAt})
    }

    // UI
    return(
        <div>
            <form onSubmit={handleSubmit} className='min-width'>
                <label>
                    Title:
                    <input type="text" value={title} onChange={e=>setTitle(e.target.value)}/>
                </label>
                <label>
                    Author:
                    <input type="text" value={author} onChange={e=>setAuthor(e.target.value)}/>
                </label>
                <label>
                    Pages:
                    <input type="number" value={pages} onChange={e=>setPages(e.target.value)}/>
                </label>
                <label>
                    Genre:
                    <select value={genre} onChange={e=>setGenre(e.target.value)}>
                        <option value="">
                            Select One
                        </option>
                        <option value="thriller">
                            thriller
                        </option>
                        <option value="education">
                            education
                        </option>
                        <option value="feel good">
                            feel good
                        </option>
                    </select>
                </label>
                <label>
                    Completed?
                    <input type='checkbox' checked={read} onChange={e=>setRead(e.target.checked)}/>
                </label>
                <label>
                    Url:
                    <input type="text" value={url} onChange={e=>setUrl(e.target.value)}/>
                </label>
                <input type="submit" value="Tell me a story..."/>
            </form>
        </div>
    )
}

export default BookForm