import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie';

const Nav = props => {
    const [logged, setLogged] = useState(null)
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/user-current', { withCredentials: true })
            .then(res => {setLogged(res.data);})
            .catch(res => console.log('not logged in'))
    }, []);

    const handleLogout = e => {
        axios.post('http://localhost:8000/api/logout', {withCredentials:true})
            .then(res => setLogged(null))
            .catch(res => console.log(res))
    }

    return (
        <nav>
            <a href="/">
                Home
            </a>
            <a href="https://github.com/xtina-lt">
                GitHub
            </a>
            {
                (logged) ? 
                    <>
                    <a href={`/dash/${logged._id}`}>
                    Dash 💜 <span id='stars'>{Cookies.get('stars')}</span>
                    </a> 
                    <a onClick={handleLogout}>
                        Logout
                    </a>
                    </>
                    :
                    <a href="/login">
                        Login
                    </a>
            }
        </nav>
    )
}

export default Nav