import React, {useEffect} from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../Redux/authReducer";

const Header = (props) => {
    return <div className='header'>
        Header
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>logout</button></div>
                : <NavLink to={'/login'}>login</NavLink> }
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {getAuthUserData, logout})(Header);