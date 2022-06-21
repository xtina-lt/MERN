import React, {useState} from 'react'

const Display = props => {
    const {list, setList} = props;

    const change = (e) => {
        // change value
        e.complete = !e.complete;
        // update list
        let update = [...list];
        setList(update);
    }

    const getLine = obj => {if (obj.complete) return "line"}

    const deleteMe = (e) => {
        setList( list.filter( (obj, i) => {return obj.content !== e} ) );
    }

    return (
        <div>
            <h2>
                To Do List:
            </h2>
            <ul>
                {/* get every object in the list */}
                {list.map( (obj, index) =>
                    <li>
                        {/* checkbox */}
                        <input type="checkbox" onChange={(e)=>change(obj)} />
                        {/* text */}
                        <span className={getLine(obj)}>
                            {obj.content}
                        </span>
                        {/* delete button */}
                        <button className='inline smallBtn' onClick={(e) => deleteMe(obj.content)}>
                            Delete
                        </button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Display