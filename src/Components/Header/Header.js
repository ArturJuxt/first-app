import React from 'react';
import s from './Header.module.scss';

function Header() {
  return (
    <div className={s.header}>
      <div>
        <img
          alt="imige"
          src="https://judoforpeace.net/WebRoot/vilkasfi02/Shops/2017042517/MediaGallery/International-Judo-Federation-IJF-logo.png"
        />
      </div>
    </div>
  );
}

export default Header;
