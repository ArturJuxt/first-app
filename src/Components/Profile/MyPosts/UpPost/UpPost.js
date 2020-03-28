import React from 'react';
import s from './UpPost.module.css';

function UpPost () {
    return (
       <div className={s.UpPost}>
            <div className={s.fon}>
                <img alt="imag" src='https://sevres-associatif.fr/cos-judo/files/2012/04/fond-ecran-cos-judo.jpg' />
            </div>
            <div className={s.avatar}>
                <img alt="imag" src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfnh15ypu2eIqVVT2nPPK0U-aNANPFCtNVJOfPKnE581Vpotcx' />
                Ava + description
            </div>
            <div>
                My posts
            </div>
            <div>
                New posts
            </div>
            <div>
                <textarea></textarea>
                <button>Add</button>
            </div>
       </div>
    );
}


export default UpPost