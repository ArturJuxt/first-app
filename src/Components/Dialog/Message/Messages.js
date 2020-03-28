import React from 'react';
import s from './Messages.module.css';

function Messages () {
    return (
       <div className={s.messages}>
            <div>message 1</div>
            <div>Message 2</div>
            <div>message 3</div>
            <div>message 4</div>
       </div>
    );
}


export default Messages