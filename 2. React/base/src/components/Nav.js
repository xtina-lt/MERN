import React from 'react'

const Nav = props => {
    return (
        <nav>
            {props.children.map(e=>
                // eslint-disable-next-line
                <a href={e.href} target="_blank">
                    {e.title}
                </a>    
            )}
        </nav>
    )   
}

export default Nav