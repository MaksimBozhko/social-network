import React from 'react'
import {addPostAC, updateNewPostTextAC} from "../../../Redux/profileReducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


const mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
})

const mapDispatchToProps = (dispatch) => ({
    addPost: () => {
        dispatch(addPostAC())
    },
    updateNewPostText: (text) => {
        dispatch(updateNewPostTextAC(text))
    }
})


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;