import React from 'react';
import s from "./Header.module.scss";

function Header () {
    return (
       <div className={s.header}>
           <img alt="imige" src="https://judoforpeace.net/WebRoot/vilkasfi02/Shops/2017042517/MediaGallery/International-Judo-Federation-IJF-logo.png" />
       </div>
    );
}



export default Header