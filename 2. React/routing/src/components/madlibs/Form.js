import React, {useState} from "react";
import { useNavigate} from "react-router-dom";

const Form = props => {
    // 1 ) VALUES
    // get props
    const {setData, setHeader} = props;
    // change header
    setHeader("Form")
    // INITIATE STATE FOR FORM INPUT
    const [color, setColor] = useState("red");
    // use default placeholder
    const [one, setOne] = useState("Easter Bunny");
    const [two, setTwo] = useState("bum");
    const [three, setThree] = useState("Pies, fies, and Fourth of July");
    const [num, setNum] = useState("50");
    // INITTE REDIRECT
    const navigate = useNavigate();

    // 2 ) HANDLE SUBMIT
    const handleSubmit = e => {
        // prevent reload
        e.preventDefault();
        // pass state
        setData({one, two, three, color, num});
        // redirect
        navigate("/results");
    }

    // 3) RETURN
    return(
        <div>
            <form onSubmit={handleSubmit}>
                {/* input 1 */}
                <label>
                <select onClick={((e)=>{setOne(e.target.value)})}>
                        <option value="Easter Bunny">
                            Easter Bunny
                        </option>
                        <option value="Cupid">
                            Cupid
                        </option>
                        <option value="Mrs. Claus">
                            Mrs.Claus
                        </option>
                    </select>
                </label>
                {/* input 2 */}
                <label>
                    Body Part:
                    <input required type="text" onChange={((e)=>{setTwo(e.target.value)})}/>
                </label>
                {/* input color */}
                <label>
                    Color:
                    <input required type="text" onChange={(e=>setColor(e.target.value))}/>
                </label>
                {/* input number */}
                <label>
                    Number:
                    <input required type="number" onChange={(e=>setNum(e.target.value))}/>
                </label>
                {/* input three */}
                <label>
                    <select onClick={((e)=>{setThree(e.target.value)})}>
                        <option value="Pies, fies, and Fourth of July">
                            Pies, fies, and Fourth of July!
                        </option>
                        <option value="My favorite color is freedom">
                            My favorite color is freedom.
                        </option>
                        <option value="Stayin’ fly on the Fourth of July">
                            Stayin’ fly on the Fourth of July.
                        </option>
                        <option value="U.S. of Yay">
                            U.S. of Yay!
                        </option>
                    </select>
                </label>
                <input type="submit" value="Talk to me.."/>
            </form>
        </div>
    )
}

export default Form;