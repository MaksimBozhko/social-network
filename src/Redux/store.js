/*
/!*
import profilereducer from "./profile-reducer";
import dialogsreducer from "./dialogs-reducer";
import sidebarreducer from "./sidebar-reducer";
*!/
import {observe} from "web-vitals/dist/modules/lib/observe";
import profilereducer from "./profilereducer";



let store = {
    _state: {
        profilepage: {
            posts: [
                {id: "1", message: "hello!", likecount: 0},
                {id: "2", message: "olleh", likecount: 7},
            ],
            newposttext: 'kama'
        },
        dialogspage: {
            dialogs: [
                {id: "1", name: "maksim"},
                {id: "2", name: "ivan"},
                {id: "3", name: "oleh"},
                {id: "4", name: "oksenia"},
            ],
            messages: [
                {id: "1", message: "hello!"},
                {id: "2", message: "how are you?"},
                {id: "3", message: "i'am ok)"},
            ],
            newmessagetext: 'kama'
        },
        sidebar: {}
    },
    _callsubsriber() {
        //console.log('state changed')
    },

    getstate() {
        return this._state
    },
    subscribe(observer) {
        this._callsubsriber = observer; //observer
    },
    dispatch(action) {
        switch (action.type) {
            case add_post:
                let newpost = {id: "5", message: state.newposttext, likecount: 0}
                state.posts.push(newpost)
                state.newposttext = ''
                return state
            case update_new_post_text:
                state.newposttext = action.newtext
                return state
            default:
                return state
        }
    }


    /!*dispatch(action) {
        this._state.profilepage = profilereducer(this._state.profilepage, action)
        this._state.dialogspage = dialogsreducer(this._state.dialogspage, action)
        this._state.sidebar = dialogsreducer(this._state.sidebar, action)

        this._callsubsriber(this._state)
    }*!/
}
export const addpostactioncreator = () => ({type: add_post})
export const updatenewposttextactioncreator = (text) => ({type: update_new_post_text, newtext: text})

export default store




*/
