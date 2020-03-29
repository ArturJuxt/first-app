import React from 'react';
import s from './Names.module.css';

function Names (props) {
    console.log(props);
    return (
       <div className={s.nemes}>
           <div>
               {props.names}
            </div>
       </div>
    );
}


export default Names