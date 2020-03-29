import React from 'react';
import s from './Messages.module.css';

function Messages (props) {
    return (
       <div className={s.messages}>
            <div>
                {props.messages}
            </div>
       </div>
    );
}


export default Messages