import React, {useState} from 'react';
// uppercase and lowercase
// digits 0-9
// characters ! # $ % & ' * + - / = ? ^_ ` { | } ~
// charcter ".", not first or last, doesnt occur twice
// eslint-disable-next-line
const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const reP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

const UserForm = (props) =>{
    // *************** 
    // * FORM VALUES * 
    // *************** 
    // first name
    const [first, setFirst] = useState("");
    const validateFirst = () => {return (first.length < 2) ? false : true;}
    // last name
    const [last, setLast] = useState("");
    const validateLast = () => {return (last.length < 2) ? false : true;}
    // email
    const [email, setEmail] = useState("");
    const validateEmail = () => {return ( email.match(re) ) ? true : false; }
    // confirm email
    const [confirmE, setConfirmE] = useState("");
    const validateConfirmE = () => {return ( email.match(confirmE) ) ? true : false; }
    // passsword
    const [password, setPassword] = useState("");
    const validatePassword = () => {return ( password.match(reP) ) ? true : false; }
    // confirm password
    const [confirmP, setConfirmP] = useState("");
    const validateConfirmP = () => {return ( confirmP.match(password)) ? true : false; }
    // submit
    const [isSubmit, setSubmit] = useState(false);
    const validateAll=()=>{return (validateFirst() && validateLast() && validateEmail() && validateConfirmE() && validatePassword() && validateConfirmP()) ? true : false;}

    // *************** 
    // * USER OBJECT * 
    // *************** 
    const createUser = (e) => {
        // stop reload
        e.preventDefault();

        // create the user object
        const user = {first, last, email, confirmE, password, confirmP};
        setFirst("");
        setLast("");
        setEmail("");
        setConfirmE("");
        setPassword("");
        setConfirmP("");

        // CHECK IF ALL INPUTS ARE VALID
        // either sumbit or reject
        if (validateAll()) {
            console.log("Welcome, ", user);
            setSubmit(true); 
        } else {
            console.log("reject form");
        }
    }

    // **************** 
    // * CHECK SUBMIT * 
    // ****************
    const getSumbit = () => {return (isSubmit) ? "Thanks for sumbitting!" : "Please submit...";}

    return(
        <main>
            <div>
                <h2>
                    {getSumbit()}
                </h2>
                <form onSubmit = { createUser }>
                    {/* first name */}
                    <label>
                        First Name:
                    </label>
                    {(!validateFirst() && first.length > 0)? <p>Try 🥈 characters.</p>: null}
                    <input type="text" value={first} onChange={(e)=> setFirst(e.target.value)}/>
                    {/* last name */}
                    <label>
                        Last Name:
                    </label>
                    {(!validateLast() && last.length > 0)? <p>Try 🥈 characters.</p>: null}
                    <input type="text" value={last} onChange={(e)=> setLast(e.target.value)}/>
                    {/* email */}
                    <label>
                        Email
                    </label>
                    {(!validateEmail() && email.length > 0) ? <p>Try a VALID email 👼.</p> : null}
                    <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    {/* confirm email */}
                    <label>
                        Confirm Email
                    </label>
                    {(!validateConfirmE() && confirmE.length > 0) ? <p>Let's play the matching game🎮.</p> : null}
                    <input type="text" value={confirmE} onChange={(e)=> setConfirmE(e.target.value)}/>
                    {/* password */}
                    <label>
                        Password:
                    </label>
                    {(!validatePassword() && password.length > 0) ? <p>Must be: 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character.</p> : null}
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    {/* check password */}
                    <label>
                        Confirm Password:
                    </label>
                    {(!validateConfirmP() && confirmP.length > 0) ? <p>Let's play the matching game🎮.</p> : null}
                    <input type="password" value={confirmP} onChange={(e)=> setConfirmP(e.target.value)}/>
                    {/* submit */}
                    <input type ="submit" value="Register"/>
                </form>
            </div>
            <div>
                <h2>
                    In the Works...
                </h2>
                <img src = "https://emojipedia-us.s3.amazonaws.com/source/skype/289/cupcake_1f9c1.png" alt="cupcake"/>
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
        </main>
    )
}

export default UserForm

