import React from "react";

const Yay = () => {
    const emojis = ['🙈','🙊', '🙉','🦁','🐶','🐺','🐱','🐯','🦒','🐮','🦝','🦊','🐷','🐭','🐰','🐸','🐨','🐻','🐼','🐴','🐔']
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