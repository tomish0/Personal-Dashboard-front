import React from 'react';
import "../../../../css/TasksLink.css"

function TasksLink() {
    return (
        <div className='tasks-link-container'> 
            <div className='input-checkbox-container'>
                <div className="input-dummy">Task 1</div>
                <div className="checkbox"></div>
            </div>
            <div className='input-checkbox-container'>
                <div className="input-dummy">Task 2</div>
                <div className="checkbox"></div>
            </div>
            <div className='input-checkbox-container'>
                <div className="input-dummy">Task 3</div>
                <div className="checkbox"></div>
            </div>
        </div>
    );
}

export default TasksLink;