import React from 'react';
import s from './Names.module.css';

function Names (props) {
    return (
       <div className={s.names}>
           <div>
               {props.names}
            </div>
       </div>
    );
}


export default Names