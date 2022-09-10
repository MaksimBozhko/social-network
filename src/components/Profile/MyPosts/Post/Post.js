import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return <div className={s.post}>
            <img src="https://millionstatusov.ru/pic/statpic/all8/5e04c21a52a39.jpg"/>
        {props.message}
        <div>
            <span>like:{props.likesCount}</span>
        </div>
    </div>
}

export default Post;