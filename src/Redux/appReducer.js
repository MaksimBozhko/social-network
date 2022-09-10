import {authAPI, usersAPI} from "../api/api";
import {setUsers, toggleIsFetching} from "./usersReducer";
import {getAuthUserData} from "./authReducer";

const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS'

let initialState = {
    initialized: false
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initialisedSuccess = () => ({ type: INITIALIZE_SUCCESS })

export const initializedApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())

    promise.then(() => {
        dispatch(initialisedSuccess())
    })
}

export default appReducer