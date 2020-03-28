import React from 'react';
import s from './Dialog.module.css';
import Names from './Name/Names';
import Messages from './Message/Messages';

function Dialog () {
    return (
       <div>
            <Names />
            <Messages />
       </div>
    );
}

export default Dialog