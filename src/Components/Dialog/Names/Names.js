import React from 'react';
import s from './Names.module.scss';
import { NavLink } from 'react-router-dom';

function DialogName(props) {
    let path = "/dialog/" + props.id
    return (
        <div className={s.dialogName}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogName