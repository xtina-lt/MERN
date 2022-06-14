import React from 'react';

const Select = props => {
    const { all, current } = props;

    return (
        <div>
            {all[current].content}
        </div>
    )
}

export default Select;