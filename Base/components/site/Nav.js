import React from 'react'

const Nav = props => {
    return (
        <nav>
            {props.children.map((e,i)=>
                // eslint-disable-next-line
                <a key={i} href={e.href}>
                    {e.title}
                </a>    
            )}
        </nav>
    )   
}

export default Nav
