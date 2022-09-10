import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../Redux/dialogsReducer";

const DialogsItems = (props) => {
    return <div className={s.dialog}>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
}
let Messages = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {

    const dialogsElements = props.dialogs.map( dialog => <DialogsItems key={dialog.id} id={dialog.id} name={dialog.name}/> )
    const messagesElements = props.messages.map( message => <Messages key={message.id} message={message.message}/>)

    let newMessageText = React.createRef()

    const onMessageTextChange = () => {
        let text = newMessageText.current.value
        props.updateNewMessageText(text)
    }
    const sendMessage = () => {
        props.sendMessage()
    }

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messagesElements}
            <div>
                <textarea ref={newMessageText} onChange={onMessageTextChange} value={props.newMessageText} ></textarea>
                <button onClick={sendMessage}>send</button>
            </div>
        </div>
    </div>
}

export default Dialogs;