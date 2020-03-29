import React from 'react';
import { Link } from 'react-router-dom';
import s from './Names.module.css';


function Names (props) {
    let path = "/doalog/" + props.id;
    return (
       <div className={s.names}>
           <div>
               <Link to={path}>{props.name}</Link>
            </div>
       </div>
    );
}


export default Names