import React from "react";

const Yay = () => {
    //  VARIABLES
    const emojis = ['🙈','🙊', '🙉','🦁','🐶','🐺','🐱','🐯','🦒','🐮','🦝','🦊','🐷','🐭','🐰','🐸','🐨','🐻','🐼','🐴','🐔']
    
    // USER INTERFACE
    return(
        <>
            {
                emojis.map((e,i)=>
                    <div key={i}>
                        <span className='emoji'>
                            {e}
                        </span>
                    </div>
                )
            }
        </>
    )
}

export default Yay