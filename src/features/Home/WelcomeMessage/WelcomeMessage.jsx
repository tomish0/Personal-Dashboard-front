import React from 'react';
import "../../../css/WelcomeMessage.css"

function WelcomeMessage(props) {
    return (
        <h1>
            Good Day <span>{props.username}</span>
        </h1>
    );
}

export default WelcomeMessage;