import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'

const Navbar = () => {
    return <div className={s.navbar}>
        <div className={s.item}>
            <NavLink to='/profile'> Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs'> Message</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/News'>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/users'> Users</NavLink>
        </div>
    </div>
}

export default Navbar;