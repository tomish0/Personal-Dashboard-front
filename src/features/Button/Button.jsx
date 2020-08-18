import React from 'react';

function Button(props) {
    return (
        <button onClick={props.onClick} className={`button ${props.className}`}>
            {props.btnMessage}
        </button>
    );
}

export default Button;