const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

let initialState =  {
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
    newMessageText: 'kama'
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let text = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 4, message: text}]
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer