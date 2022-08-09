import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserDash from "../users/UserDash";
import AdminDash from '../users/AdminDash'

const Dashboard = ({setHeader}) => {
    const {id} = useParams()
    const [logged, setLogged] = useState({})
    useEffect(() => {
        axios.get('http://localhost:8000/api/user-current', { withCredentials: true })
            .then(res => {setLogged(res.data)})
            .catch(res => console.log('not logged in'))
    }, []);
    setHeader(logged.first)
    return(
        <>
            { (id !== '62eff898d04c81a9b5d3f44c') ? <UserDash id={id}/> : <AdminDash/> }
        </>
    )
}

export default Dashboard