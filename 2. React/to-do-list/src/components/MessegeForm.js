import React, {useState} from  'react';

const MessegeForm = (props) => {
    // VALUES
    // message
    const [msg, setMsg] = useState("");
    // submit
    const [isSubmit, setSubmit] = useState(false);
    // VALIDATIONS
    // msg
    const validateMsg = () => { return (msg.length < 2) ? false : true; }
    // submit
    const validateAll=()=>{ return (validateMsg()) ? true : false; }
    

    // // HANDLESUMBIT
    const handle = e => {
        // always preventDefault
        e.preventDefault();

        if (validateAll()) {
            // CALL METHOD FROM APP
            // send msg as arg
            props.fx( msg );
            setMsg("");
            setSubmit(true);
        } else {
            console.log("reject");
        }
    }

    // RETURN
    return (
        <div>
            <form onSubmit={ handle }>
                {/* HEADER */}
                <h2>
                    Message Form
                </h2>
                {/* success */}
                {(isSubmit) ? <h3>Success!</h3> : <h3>Please submit</h3>}
                {/* MESSAGE */}
                <label>
                    Message
                </label>
                {/* validate */}
                {(!validateMsg() && msg.length > 0) ? <p><span className='accent'>Must be greater than 2!</span></p> : null}
                {/* message input */}
                <textarea rows="4" cols="50" placeholder="Talk to me" value={msg} 
                    onChange={(e)=> setMsg(e.target.value)}></textarea>
                {/* SUBMIT */}
                <input type="submit" value="Lets Go!"/>
            </form>
            {msg}
        </div>
    )
}

export default MessegeForm