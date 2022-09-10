import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialState = {
    posts: [
        {id: "1", message: "Hello!", likeCount: 0},
        {id: "2", message: "Olleh", likeCount: 7},
    ],
    newPostText: 'kama',
    profile: null,
    status: '',
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.text,
                likeCount: 0
            }
            return  {
                ...state,
                posts: [...state.posts, newPost],
            }
            }
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_STATUS:
            return {...state, status: action.status}
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos }}
        default:
            return state
    }
}

export const addPostAC = (text) => ({type: ADD_POST, text})
export const updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response.data))
        })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}

export const savePhoto = (file) => (dispatch) => {
    profileAPI.savePhoto(file)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos))
            }
        })
}

export const saveProfile = (profile) => (dispatch, getState) => {
    const userId = getState().auth.userId
    profileAPI.saveProfile(profile)
        .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(getProfile(userId))
            } else {
                console.log(response.data.messages[0])
            }
        })
}

export default profileReducer