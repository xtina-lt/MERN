import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Find = props => {
    const {setHeader} = props
    setHeader("Animals")
    const [data, setData] = useState([])

    useEffect( ()=>{
        axios.get('http://localhost:8000/api/animals/find')
            .then( e=> setData(e.data) )
            .catch( e=> console.log(e) )
    },[] )

    return(
        <div>
            <h2>
                All Our Animals!
            </h2>
            <table>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Species
                    </th>
                    <th>
                        Age
                    </th>
                    <th>
                        Interests
                    </th>
                    <th>
                        createdAt
                    </th>
                </tr>
                {
                    data.map((e,i) => 
                        <tr key={i}>
                        <td>
                            {e._id}
                        </td>
                        <td>
                            <a href={"/animal/" + e._id }>
                                {e.name}
                            </a>
                        </td>
                        <td>
                            {e.species}
                        </td>
                        <td>
                            {e.age}
                        </td>
                        <td>
                            {e.interests.join(', ')}
                        </td>
                        <td>
                            {e.createdAt}
                        </td>
                        </tr>
                    )
                }

            </table>
        </div>
    )
}

export default Find