import React from 'react';
import s from './Messages.module.scss';

function DialogMessage(props) {
    return (
        <div className={s.dialogMessage}>
            {props.message}
        </div>
    );
}

export default DialogMessage