import React from 'react';
import s from './Dialog.module.scss';
import DialogName from './Names/Names';
import DialogMessage from './Messages/Messages';

function Dialog(props) {

    let nameElements = props.users.map( u => <DialogName name={u.name} id={u.id} />);
    let messageElements = props.messages.map( m => <DialogMessage message={m.message} id={m.id} />);
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_N}>
                { nameElements }
            </div>
            <div className={s.Dialog_M}>
                { messageElements }
            </div>
        </div>
    );
}

export default Dialog