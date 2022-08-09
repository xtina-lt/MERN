import React from 'react'

const Catchall = ({setHeader}) => {
    setHeader('Ooops')
    return (
        <>
            <div>
                <span className="accent">
                    Page not found.....
                <br/>
                <h1>
                    Here's a cupcake though!
                </h1>
                </span>
                <br/>
                <span className="emoji">
                    🧁
                </span>
            </div>
            <div>
                <span className="accent">
                    Incase nobody told you today...
                    <br/>
                    <h1>
                        You're AWESOME!!
                    </h1>
                </span>
                <br/>
                <span className="emoji">
                    🧁
                </span>
            </div>
        </>
    )
}

export default Catchall