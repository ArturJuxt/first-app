import React from 'react';
import s from "./Navbar.module.css"

function Navbar() {

    return (
        <div className={s.navbar}>
           <div>
               <h1>Judo</h1>
            </div>
           <div className={s.item}>
               <a href='/profile'>Profile</a>
            </div>
           <div className={`${s.item} ${s.active}`}>
              <a href='/dialog'>Message</a>
            </div>
           <div className={s.item}>
               <navlink><a href="/news">News</a></navlink>
            </div>
           <div className={s.item}>
               <navlink><a href="/music">Music</a></navlink>
            </div>
           <div className={s.item}>
               <navlink><a href="/setings">Setings</a></navlink>
            </div>
        </div>
    );
}

export default Navbar