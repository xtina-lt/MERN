import React, {useState} from "react"
import axios from "axios"

const Form = ({ likes, setLikes, old, logged, submit }) => {
    const [like, setLike] = useState( old || {desc: '', url: ''} )
    const[success, setSuccess] = useState(false);

    const handleUpdate = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/like/${like._id}`, {_id: like._id, desc: like.desc, url: like.url, users: like.users})
            .then( e => {setSuccess(true); setLikes([...likes, e.data])} )
            .catch( e => console.log('wrong'))
    }

    const handleCreate = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/likes/create', {desc: like.desc, url: like.url, users: []})
            .then( e => { setLikes([...likes, e.data]);
                            setLike({desc: '', url: ''});
            } )
            .catch( e => console.log('wrong'))
    }

    return(
        <form onSubmit={(old) ? handleUpdate : handleCreate} >        
            {success && <span className='accent'>Success!<br/></span>}
        <label>
            Description:
            <input type="text" value={like.desc} onChange={ e => setLike({...like, desc: e.target.value}) } />
        </label>
        <label>
            url:
            <input type="text" value={like.url} onChange={ e => setLike({...like, url: e.target.value}) } />
        </label>
        <input type="submit" value={submit || 'Create'}/>
        </form>
    )
}

export default Form