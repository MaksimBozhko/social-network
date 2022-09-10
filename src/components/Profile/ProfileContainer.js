import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {addPostAC, getProfile, getUserStatus, savePhoto, saveProfile, updateStatus} from "../../Redux/profileReducer";

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
})

export default connect(mapStateToProps, {getProfile, getUserStatus, updateStatus, addPostAC, savePhoto, saveProfile})(Profile)