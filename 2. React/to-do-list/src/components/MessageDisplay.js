import React, {useState} from  'react';

const MessageDisplay = (props) => {
    return (
        <div>
            <h2>
                Current Message:
            </h2>
            <pre>{props.message}</pre>
        </div>
    )
}

export default MessageDisplay