//  Good for knowlege, less lines in my validations. See More forms project on github.

import React, { useReducer } from 'react';

// JSON OBJECT for initial values
const initialState = {
    email: {
        value: "",
        error: ""
    },
    password: {
        value: "",
        error: "" 
    },
    isSubmit: false
}

// REDUCE
//  {type: function, payload: value}
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_EMAIL":
            return {
                ...state,
                email: {
                    ...state.email, 
                    // value for set value 
                    value: action.payload
                }
            }
        case "SET_EMAIL_ERROR":
            return {
                ...state,
                email: {
                    ...state.email,
                    // error for errors
                    error: action.payload
                }
            }
        case "SET_PASSWORD":
            return {
                ...state,
                password: {
                    ...state.password,
                    value: action.payload 
                }
            }
        case "SET_PASSWORD_ERROR":
            return {
                ...state,
                password: {
                    ...state.password,
                    error: action.payload
                }
            }
        case "SET_SUBMIT":
            return {
                ...state,
                isSubmit: action.payload
            }
        default:
            return state;
    }
}
 
export default () => {
    // use reducer -> args : reducer from above and intital state
    // return state from above and dispatch from below
    // Object { email: {…}, password: {…}, isSubmit: false }
    // email: Object { value: "", error: "" }​
        // password: Object { value: "", error: "" }
    // isSubmit: false ​
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);
   
    const handleEmailChange = (e) => {
        //  if not validated
        if (e.target.value.length < 5) { 
            dispatch({
                type: "SET_EMAIL_ERROR",
                payload: "Email must be at least 5 characters"
            });
        } else {
        // if validate 
        dispatch({
                type: "SET_EMAIL_ERROR",
                payload: ""
            });
        }
        // ALWAYS set value
        dispatch({
            type: "SET_EMAIL", 
            payload: e.target.value 
        });
    }
    const handlePasswordChange = (e) => {
        if (e.target.value.length < 5) { 
            dispatch({
                type: "SET_PASSWORD_ERROR",
                payload: "Password must be at least 5 characters"
            });
        } else {
            dispatch({
                type: "SET_PASSWORD_ERROR", 
                payload: ""
            });
        }
        dispatch({
            type: "SET_PASSWORD_VALUE",
            payload: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // When form is submitted, dispatch action to set setSubmittedBoolean to true, indicating form submission
        dispatch({
            type: "SET_SUBMIT",
            payload: true
        })

        console.log(JSON.stringify(state)); 
    }

    return (
        <div>
            {(state.isSubmit) ? <h3> Form has been submitted! </h3> : null}
            <form onSubmit={handleSubmit}>
                {/* email */}
                <label htmlFor="email">
                    Email
                </label>
                {(state.email.error !== null) ? <p>{state.email.error}</p> : null} 
                <input type="text" id="email" onChange={(e) => handleEmailChange(e)}/>
                {/* password */}
                <label htmlFor="password">
                    Password
                </label>
                {(state.email.error !== null) ? <p>{state.email.error}</p> : null}
                <input type="password" id="password" onChange={(e) => handlePasswordChange(e)} />
                {/* submit */}
                <input type ="submit" value="submit"/>
            </form>
        </div>
    );
}
