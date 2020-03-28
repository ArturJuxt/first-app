import React from 'react';
import s from './DownPost.module.css';

function DownPost (props) {
    return (
       <div className={s.DownPost}>
            <div className={s.item}>
                {props.message}
            </div>
        </div>
    );
}

export default DownPost