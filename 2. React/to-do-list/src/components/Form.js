import React, {useState} from 'react'

const Form = props => {
    const {list, setList} = props;
    const [input, setInput] = useState("");

    const submit = (e) => {
        e.preventDefault();
        setList([...list,
            {content: input, complete : false}
        ])
    }

    return (
        <div>
            <h2>
                Add Item:
            </h2>
            <form onSubmit = {submit}>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
                <input type="Submit" value="Do"/>
            </form>
            {input}
        </div>
    )
}

export default Form