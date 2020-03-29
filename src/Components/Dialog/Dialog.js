import React from 'react';
import './Dialog.module.css';
import Names from './Name/Names';
import Messages from './Message/Messages';

function Dialog () {
    return (
       <div>
            <Names names={'Artur'}/>
            <Names names={'Edgar'}/>
            <Names names={'Narek'}/>
            <Names names={'Aram'}/>
            <Names names={'Tiko'}/>
            <Names names={'Hayko'}/>
            <Messages messages={'message 1'}/>
            <Messages messages={'message 2'}/>
            <Messages messages={'message 3'}/>
            <Messages messages={'message 3'}/>
       </div>
    );
}

export default Dialog