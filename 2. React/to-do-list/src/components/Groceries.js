import React from 'react'

const Groceries = (props) => {
    const list = ['tofu', 'impossible meat', 'blueberries']
    return (
        <div>
            <h2>
                Groceries
            </h2>
            <ul>
                {list.map( (val, i)=> 
                    <li>{i*2} : {val}</li>
                )}
            </ul>
        </div>
    )
}

export default Groceries