import React from 'react'
import Post from "./Post/Post";
import s from './MyPosts.module.css'
import {useForm} from "react-hook-form";
import {addPostAC} from "../../../Redux/profileReducer";

const   MyPosts = (props) => {

    const {
        register,
        formState: {errors, isValid},
        reset,
        handleSubmit
    } = useForm({
        mode: 'onChange'
    })
    let postsElements = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef()

    let AddPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }
    let onSubmit = (data) => {
        //console.log(data)
        //alert(JSON.stringify(data))
        props.addPostAC(data.newPostText)
        reset()
    }


    return <div className={s.postsBlock}>
        <h3>MyPosts</h3>
        <div>
            {/*<form onSubmit={handleSubmit(onSubmit)}>
                <textarea
                    {...register('newPostText',{
                        required: 'Field is required',
                        maxLength: {
                            value: 6,
                            message: 'max length'
                        }

                    })}/>
                {errors?.addPost && <div>{errors?.addPost.message}</div>}
                <input type="submit" disabled={!isValid}/>
            </form>*/}
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
            </div>
            <div>
                <button onClick={AddPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;