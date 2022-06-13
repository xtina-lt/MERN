import React, {useState} from 'react'

const Form = (props) =>{
    const [input, setInput] = useState("");

    const handle = (e) => {
        e.preventDefault();
        setInput("");
        document.getElementById("blocks").innerHTML += `<div class='block' style="background-color:${input}">${input}</div>`;
    }

    return (
        <main>
            <div>
                <form onSubmit={handle}>
                    {/* input */}
                    <label>
                        <h2>
                            Color my world....
                        </h2>
                    </label>
                    <input type ="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                    {/* submit */}
                    <input type = "submit" value="Go!"/>
                </form>
            </div>

            <div id="blocks">

            </div>
        </main>
    )
}

export default Form