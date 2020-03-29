import React from 'react';
import { Link } from 'react-router-dom';
import s from "./Navbar.module.css"

function Navbar() {

    return (
        <div className={s.navbar}>
            <div>
                <h1>Judo</h1>
            </div>
            <div className={s.item}>
                <Link to="/profile">Profile</Link>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <Link to="/dialog">Dialog</Link>
            </div>
            <div className={s.item}>
                <Link to="/news">News</Link>
            </div>
            <div className={s.item}>
                <Link to="/music">Music</Link>
            </div>
            <div className={s.item}>
                <Link to="/settings">Settings</Link>
            </div>
        </div>
    );
}

export default Navbar