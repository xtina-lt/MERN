import React, {useState} from 'react';
// const handleClick = () => {
//     console.log(`this is:clicked ${this.id}`);
// }

const Person = (props) => {
    //USE STATE USE CASES
    // count
    const [ count, setCount ] = useState(props.experience);
    // string
    const [text, setText] = useState("");
    // string
    const [knock, setKnock] = useState({
        greeting: "Knock knock, "
    });
    // object
    const [state, setState] = useState({
        items: ['tofu', 'impossible burger'],
        totalPrice: 0.00
    });
    // arr
    const [arr, setArr] = useState([10,20]);
    const manipulate = () => {
        let x = arr;
        for(let i=1; i<=5; i++) x.push(i);
        setState(x);
    }



    return (
        <div>
            <ul>
                <li>
                    <h1>
                        {props.last} , {props.first}
                    </h1>
                </li>
                <li>
                    Experience: {count} months.
                </li>
                <li>
                    Favorite Language: {props.lang}
                </li>
                <span className = "emoji">
                    {props.icon}
                </span>
            </ul>

            <div>
                <button onClick={() => setCount(count+1)}>
                    Add Experience
                </button>

                <button onClick={() => setText((text === "")? "something" : "" )}>
                    {text}
                </button>

                <button onClick={() => setKnock({ greeting: knock.greeting + "JS IS AWESOME" }) }>
                    {knock.greeting}
                </button>

                <button onClick={() => setState({ items: state.items, totalPrice: state.totalPrice + 10.99 })}>
                    {state.items} , {state.totalPrice}
                </button>

                <button onClick={ () => manipulate() }>
                    {arr.join(",")}
                </button>

            </div>
        </div>
    );
}

export default Person