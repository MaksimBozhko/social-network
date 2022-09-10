import React from 'react'
import {sendMessageCreator, updateNewMessageTextCreator} from "../../Redux/dialogsReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {compose} from "redux";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";

const mapStateToProps = (state) => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText
})

const mapDispatchToProps = (dispatch) => ({
    sendMessage: () => {
        dispatch(sendMessageCreator())
    },
    updateNewMessageText: (text) => {
        dispatch(updateNewMessageTextCreator(text))
    }
})
compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate
)(Dialogs)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate
)(Dialogs)
