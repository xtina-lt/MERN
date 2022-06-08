import React from 'react';

const Person = (props) => {
    return (
        <div>
            <ul>
                <li>
                    <h1>
                        {props.last} , {props.first}
                    </h1>
                </li>
                <li>
                    Experience: {props.experience}
                </li>
                <li>
                    Favorite Language: {props.lang}
                </li>
                <span className = "emoji">
                    {props.icon}
                </span>
            </ul>
        </div>
    );
}

export default Person