import React from 'react';

function WelcomeMessage(props) {
    return (
        <div>
            Good day {props.username}
        </div>
    );
}

export default WelcomeMessage;