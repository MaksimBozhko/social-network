import React from 'react'
import user from '../assets/images/user.png'
import s from './User.module.css'
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";
import Paginator from "../common/Paginator/Paginator";

const Users = (props) => {


    return <div>
        <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                   currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img className={s.userPhoto} src={user}/>
                            </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {props.unfollow(u.id)}}>unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {props.follow(u.id)}}>follow</button>}
                    </div>
                </span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.id}</div>
                    <div>{u.status}</div>
                </span>
            </div>)
        }
    </div>

}

export default Users;