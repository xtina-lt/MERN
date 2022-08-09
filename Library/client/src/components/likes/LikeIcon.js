import React, {useState, useEffect} from "react";
import axios from 'axios'
import Cookies from "js-cookie";

const LikeIcon = ({id}) => {
    const [like, setLike] = useState({})
    const [user, setUser] = useState({})
    // const [cookie, setCookie] = useState(Number(Cookies.get('stars'))) 

    // get like by id
    useEffect( ()=>{
        axios.get(`http://localhost:8000/api/like/${id}`)
            .then( res => setLike(res.data) )
            .catch( res => console.log(res) )
    },[] )
    // get user token
    useEffect(() => {
        axios.get('http://localhost:8000/api/user-current', { withCredentials: true })
            .then(res => {setUser(res.data);})
            .catch(res => console.log('not logged in'))
    }, []);
    

    const handleClick = e => {
        e.preventDefault()
        // update like
        axios.put(`http://localhost:8000/api/like/${like._id}`, {...like, users: [...like.users, user._id || 'guest']})
            .then( res => setLike(res.data))
        // update cookie
        // Set-Cookie: flavor=choco; SameSite=None; Secure
        document.cookie = `stars=${Number(Cookies.get('stars'))+1}`
        // update navbar
        document.getElementById('stars').innerHTML=`${Number(Cookies.get('stars'))}`
    }

    return(
        <button onClick={e => handleClick(e)} className={'like-button'}>
            🤍{(like.users) ? like.users.length : 0}
        </button>
    )
}

export default LikeIcon