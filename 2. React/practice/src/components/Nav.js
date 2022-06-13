import React from 'react'

const Nav = props => {
    return (
        <nav>
            {props.links.map( (e)=>
                <a href={e.url} rel="noreferrer" target="_blank">
                    {e.name}
                </a>
            )}
        </nav>
    )
}

export default Nav