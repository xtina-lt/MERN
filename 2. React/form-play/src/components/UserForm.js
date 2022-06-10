import React, {useState} from 'react';
// uppercase and lowercase
// digits 0-9
// characters ! # $ % & ' * + - / = ? ^_ ` { | } ~
// charcter ".", not first or last, doesnt occur twice
// eslint-disable-next-line
const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const reP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

const UserForm = (props) =>{
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [confirmE, setConfirmE] = useState("");
    const [password, setPassword] = useState("");
    const [confirmP, setConfirmP] = useState("");
    const [isSubmit, setSubmit] = useState(false);

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {first, last, email, confirmE, password, confirmP};
        console.log("Welcome, ", newUser);
        setFirst("");
        setLast("");
        setEmail("");
        setConfirmE("");
        setPassword("");
        setConfirmP("");
        setSubmit(true);
    }

    const getSumbit = () => {return (isSubmit) ? "Thanks for sumbitting!" : "Please submit...";}

    return(
        <div>
            <h3>
                {getSumbit()}
            </h3>
            <form onSubmit = { createUser }>
                {/* first name */}
                <label>
                    First Name:
                </label>
                {(first.length < 2 && first.length > 0)? <p>Try 🥈 characters.</p>: null}
                <input type="text" value={first} onChange={(e)=> setFirst(e.target.value)}/>
                {/* last name */}
                <label>
                    Last Name:
                </label>
                {(last.length < 2 && last.length > 0)? <p>Try 🥈 characters.</p>: null}
                <input type="text" value={last} onChange={(e)=> setLast(e.target.value)}/>
                {/* email */}
                <label>
                    Email
                </label>
                {(!email.match(re) && email.length > 0) ? <p>Try a VALID email 👼.</p> : null}
                <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                {/* confirm email */}
                <label>
                    Confirm Email
                </label>
                {(confirmE !== email && confirmE.length > 0) ? <p>Let's play the matching game</p> : null}
                <input type="text" value={confirmE} onChange={(e)=> setConfirmE(e.target.value)}/>
                {/* password */}
                <label>
                    Password:
                </label>
                {(!password.match(reP) && password.length > 0) ? <p>Must be: 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character.</p> : null}
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                {/* check password */}
                <label>
                    Confirm Password:
                </label>
                {(confirmP !== password && confirmP.length > 0) ? <p>Let's play the matching game</p> : null}
                <input type="password" value={confirmP} onChange={(e)=> setConfirmP(e.target.value)}/>
                {/* submit */}
                <input type ="submit" value="Register"/>
            </form>

            <table>
                <tr>
                    <td>
                        Name:
                    </td>
                    <td>
                        {last}, {first}
                    </td>
                </tr>
                <tr>
                    <td>
                        Email
                    </td>
                    <td>
                        {email}
                    </td>
                </tr>
                <tr>
                    <td>
                        Password
                    </td>
                    <td>
                        {password}
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default UserForm

