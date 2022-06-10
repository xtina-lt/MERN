import React, {useState} from 'react';

const UserForm = (props) =>{
    const [uName, setUName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmE, setConfirmE] = useState("");
    const [password, setPassword] = useState("");
    const [confirmP, setConfirmP] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {uName, email, confirmE, password, confirmP};
        console.log("Welcome, ", newUser);
        setUName("");
        setEmail("");
        setConfirmE("");
        setPassword("");
        setConfirmP("");
    }

    return(
        <div>
            <form onSubmit = { createUser }>
                <label>
                    Username:
                </label>
                <input type="text" value={uName} onChange={(e)=> setUName(e.target.value)}/>
                <label>
                    Email
                </label>
                <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <label>
                    Confirm Email
                </label>
                <input type="text" value={confirmE} onChange={(e)=> setConfirmP(e.target.value)}/>
                <label>
                    Password:
                </label>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <label>
                    Confirm Password:
                </label>
                <input type="confirmP" value={confirmP} onChange={(e)=> setConfirmP(e.target.value)}/>
                <input type ="submit" value="Register"/>
            </form>

            <table>
                <tr>
                    <td>
                        User Name:
                    </td>
                    <td>
                        {uName}
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

