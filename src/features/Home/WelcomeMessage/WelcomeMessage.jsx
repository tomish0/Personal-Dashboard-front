import React from 'react';
import "../../../css/WelcomeMessage.css"

function WelcomeMessage(props) {
    return (
        <h1>
            Good day {props.username}
        </h1>
    );
}

export default WelcomeMessage;