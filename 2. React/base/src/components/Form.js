import React,{useState} from 'react'

const Form = props => {
// 1) create varibles
    // a) get output from app
    const {output,setOutput} = props;
    // b) form input
    const [input,setInput] = useState("");
    // c) submit status
    const [submit,setSubmit] = useState(false);
// 2) verify
    const vInput = () => {return(input.length > 2)? true : false}
// 3) handle submit
    const handle = (e) => {
        // a) prevent default
        e.preventDefault();
        // b) create object
        setOutput(input)
        // c) verify and handle
        if (vInput) {
            // change submit
            setSubmit(true);
            // clear inputs
            setInput("");
        } else {
            console.log('reject');
        }
    }

    return(
        <div>
            <form onSubmit={handle}>
                {(submit) ? "Thanks for submitting" : "Please Submit.."}
                <label>
                    <input type="text" onChange={e=>setInput(e.target.value)}/>
                </label>
                <input type="submit" value="lets goo"/>
            </form>
            {input}
        </div>
    )
}

export default Form