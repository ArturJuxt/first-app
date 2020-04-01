import React from 'react';
import s from './Dialog.module.scss';
import DialogName from './Names/Names';
import DialogMessage from './Messages/Messages';

function Dialog(props) {
  const { users, messages } = props;
  const nameElements = users.map((u) => <DialogName name={u.name} id={u.id} />);
  const messageElements = messages.map((m) => (
    <DialogMessage message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialog_N}>{nameElements}</div>
      <div className={s.Dialog_M}>{messageElements}</div>
    </div>
  );
}

export default Dialog;
