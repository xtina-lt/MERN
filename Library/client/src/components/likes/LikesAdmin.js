import React, {useEffect, useState} from "react"
import axios from "axios"
import Form from "./Form"

const LikesAdmin = props => {
    const [likes, setLikes] = useState([])

    useEffect( ()=> {
        axios.get('http://localhost:8000/api/likes')
            .then( res => setLikes(res.data) )
            .catch( res => console.log(res) )
    }, [] )

    return(
        <div className="no-background">
            <h2>
                Likes
            </h2>
            { likes.map( (obj, i) =>
            <div key={i}>
                <Form likes={likes} setLikes={setLikes} old={obj} submit={'Update'}/>
            </div>
            )}
            <h2>
                Create New Like
            </h2>
            <div>
                <Form likes={likes} setLikes={setLikes}/>
            </div>
        </div>
    )
}

export default LikesAdmin